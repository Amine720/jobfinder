const express = require("express");
const router = express.Router();
const multer = require("multer");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const Recruter = require("../../models/recruter");
const config = require("config");
const { v4: uuidv4 } = require("uuid");
const auth = require("../../middlewares/auth");

//Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + file.originalname);
  },
});

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

// User registration
router.post(
  "/register",
  [
    body("firstname").isLength({ min: 4 }),
    body("lastname").isLength({ min: 4 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6, max: 12 }),
    body("cpassword").isLength({ min: 6, max: 12 }),
    body("skills").isArray(),
    body("education").not().isEmpty(),
    body("experience").not().isEmpty(),
  ],
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
      const {
        firstname,
        lastname,
        email,
        password,
        cpassword,
        skills,
        education,
        experience,
      } = req.body;

      console.log(req.body);

      if (password !== cpassword) {
        return res.json({ msg: "Passwords do not match" });
      }

      let user = await User.findOne({ email });
      if (user) {
        return res.status(401).json({ msg: "User already existed" });
      }

      const salt = await bcrypt.genSalt(10);
      const newpassword = await bcrypt.hashSync(password, salt);

      user = new User({
        firstname,
        lastname,
        email,
        password: newpassword,
        cv: req.files.cv[0].path,
        photo: req.files.photo[0].path,
        skills,
        education,
        experience,
        type: "user",
      });

      const ru = await user.save();
      const payload = {
        user: {
          id: ru._id,
        },
      };
      jwt.sign(payload, config.get("jwtKey"), (err, token) => {
        if (err) throw err;
        return res.json(token);
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

// Recruter registration
router.post(
  "/register/recruter",
  [
    body("company_name").not().isEmpty(),
    body("company_website").not().isEmpty(),
    body("company_email").isEmail(),
    body("company_description").not().isEmpty(),
    body("company_speciality").not().isEmpty(),
    body("location").not().isEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6, max: 12 }),
    body("cpassword").isLength({ min: 6, max: 12 }),
  ],
  upload.single("company_logo"),
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
      const {
        company_name,
        company_website,
        company_email,
        company_description,
        company_speciality,
        location,
        email,
        password,
        cpassword,
      } = req.body;

      console.log(req.body);
      console.log(req.file);

      if (password !== cpassword) {
        return res.json({ msg: "Passwords do not match" });
      }

      let recruter = await Recruter.findOne({ email });
      if (recruter) {
        return res.status(401).json({ msg: "Email already used" });
      }

      const salt = await bcrypt.genSalt(10);
      const newpassword = await bcrypt.hashSync(password, salt);

      recruter = new Recruter({
        company_name,
        company_logo: req.file.path,
        company_website,
        company_email,
        company_description,
        company_speciality,
        location,
        email,
        password: newpassword,
        type: "recruter",
      });

      const ru = await recruter.save();
      const payload = {
        user: {
          id: ru._id,
        },
      };
      jwt.sign(payload, config.get("jwtKey"), (err, token) => {
        if (err) throw err;
        return res.json(token);
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

// Login user
router.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  let userLogin = await User.findOne({ email });
  if (!userLogin) {
    return res.json({ msg: "Authentication error" });
  }

  const match = await bcrypt.compare(password, userLogin.password);
  if (match) {
    const payload = {
      user: {
        id: userLogin._id,
      },
    };
    jwt.sign(payload, config.get("jwtKey"), (err, token) => {
      if (err) throw err;
      return res.json(token);
    });
  } else {
    return res.json({ msg: "Authentication error" });
  }
});

// Login recruter
router.post("/login/recruter", async (req, res) => {
  const { email, password } = req.body;
  let recruterLogin = await Recruter.findOne({ email });
  if (!recruterLogin) {
    return res.json({ msg: "Authentication error" });
  }

  const match = await bcrypt.compare(password, recruterLogin.password);
  if (match) {
    const payload = {
      user: {
        id: recruterLogin._id,
      },
    };
    jwt.sign(payload, config.get("jwtKey"), (err, token) => {
      if (err) throw err;
      return res.json(token);
    });
  } else {
    return res.json({ msg: "Authentication error" });
  }
});

// fetch the current user
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = router;
