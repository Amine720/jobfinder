const User = require("../models/user");

const isPasswordValid = (req, res, next) => {
  if (req.body.cpassword !== req.body.password) {
    return res.json({ msg: "Passwords do not match" });
  }
  next();
};

module.exports = { isPasswordValid };
