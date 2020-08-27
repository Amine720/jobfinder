const Offer = require("../../models/offer");
const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");
const isUser = require("../../middlewares/isUser");

// Post a job offer-- Recruter
router.post("/post", auth, async (req, res) => {
  const {
    title,
    category,
    salary,
    description,
    skills,
    education,
    experience,
    location,
    job_type,
    vacancy,
  } = req.body;

  const offer = new Offer({
    recruter: req.user.id,
    title,
    category,
    salary,
    description,
    skills,
    education,
    experience,
    location,
    job_type,
    vacancy,
    applicants: [],
  });

  try {
    const offer_added = await offer.save();
    return res.json(offer_added);
  } catch (err) {
    console.log(err);
    return res.json("An error occured");
  }
});

// get all my job offers
router.get("/posts", auth, async (req, res) => {
  const offers = await Offer.find({ recruter: req.user.id })
    .populate("recruter", "-password")
    .populate("applicants.appliedBy");
  res.json(offers);
});

// Get all offers for a sepecific recruter
router.get("/specific-rec/:recruter", async (req, res) => {
  const offer = await Offer.find({ recruter: req.params.recruter });
  res.json(offer);
});

// get details of a specific job offer
router.get("/post/:id", async (req, res) => {
  const offer = await Offer.findById(req.params.id).populate("recruter");
  res.json(offer);
});

// get all different offers
router.get("/all", async (req, res) => {
  const alloffers = await Offer.find().populate("recruter");
  res.json(alloffers);
});

// get all offers for a specific category
router.get("/category/:category", async (req, res) => {
  const offer = await Offer.find({ category: req.params.category }).populate(
    "recruter"
  );
  res.json(offer);
});

// get all offers for a specific job type (ie Full-time)
router.get("/type/:type", async (req, res) => {
  const offer = await Offer.find({ job_type: req.params.type }).populate(
    "recruter"
  );
  res.json(offer);
});

// get all offers for a specific experience range
router.get("/experience/:exp", async (req, res) => {
  const offer = await Offer.find({
    experience: { $lte: req.params.exp },
  }).populate("recruter");
  res.json(offer);
});

// get all offers for based on a price range

// get all offres for a specific category for a specific recruter
router.get("/offers/:category/:recruter", async (req, res) => {
  const offer = await Offer.find({
    $and: [
      { category: req.params.category },
      { recruter: req.params.recruter },
    ],
  });
  res.json(offer);
});

// get all job based on a title search
router.get("/title/:title", async (req, res) => {
  const offer = await Offer.find({ $text: { $search: req.params.title } });
  res.json(offer);
});

// get all job based on a location
router.get("/location/:location", async (req, res) => {
  const offer = await Offer.find({ location: req.params.location });
  res.json(offer);
});

// get all job based on a location and on a title search
router.get("/title-location/:title/:location", async (req, res) => {
  const offer = await Offer.find({
    $and: [
      { $text: { $search: req.params.title } },
      { location: req.params.location },
    ],
  });
  res.json(offer);
});

// get all job based on a location and on a title search
router.post("/titleLocation", async (req, res) => {
  const { title, location } = req.body;
  const offer = await Offer.find({
    $and: [{ $text: { $search: title } }, { location: location }],
  }).populate("recruter");
  res.json(offer);
});

// update a job offer
router.put("/update/:offerid", auth, async (req, res) => {
  const update = {
    title: req.body.title,
    category: req.body.category,
    salary: req.body.salary,
    description: req.body.description,
    skills: req.body.skills,
    education: req.body.education,
    experience: req.body.experience,
    location: req.body.location,
    job_type: req.body.job_type,
    vacancy: req.body.vacancy,
  };
  const doc = await Offer.findOneAndUpdate(
    { _id: req.params.offerid },
    update,
    {
      new: true,
    }
  );

  res.json(doc);
});

// remove a job offer
router.delete("/delete/:offerid", auth, async (req, res) => {
  await Offer.findOneAndDelete({ _id: req.params.offerid });
  res.json({ msg: "Offer has been deleted" });
});

// Don't forget to lowercase when adding new job offers to the collection

// apply for job
router.post("/apply/:offerid", isUser, async (req, res) => {
  let offer = await Offer.findById(req.params.offerid);
  const appliedBy = req.user.id;
  offer.applicants.push({ appliedBy });
  const updatedOffer = await offer.save();
  // res.json(updatedOffer);
  res.json({ success: "applied successfully" });
});

// filter for a job
router.post("/filter", async (req, res) => {
  let { category, job_type, experience, location } = req.body;
  let filter = null;
  if (category === "all" && location === "all" && experience === "more") {
    filter = await Offer.find({
      $and: [{ job_type: job_type }, { experience: { $gte: 6 } }],
    });
  } else if (
    category === "all" &&
    location === "all" &&
    experience !== "more"
  ) {
    filter = await Offer.find({
      $and: [{ job_type: job_type }, { experience: { $lte: experience } }],
    });
  } else if (
    category !== "all" &&
    location !== "all" &&
    experience === "more"
  ) {
    filter = await Offer.find({
      $and: [
        { category: category },
        { location: location },
        { job_type: job_type },
        { experience: { $gte: 6 } },
      ],
    });
  } else if (
    category !== "all" &&
    location !== "all" &&
    experience !== "more"
  ) {
    filter = await Offer.find({
      $and: [
        { category: category },
        { location: location },
        { job_type: job_type },
        { experience: { $lte: experience } },
      ],
    });
  } else if (category !== "all" && location == "all" && experience === "more") {
    filter = await Offer.find({
      $and: [
        { category: category },
        { job_type: job_type },
        { experience: { $gte: 6 } },
      ],
    });
  } else if (
    category !== "all" &&
    location === "all" &&
    experience !== "more"
  ) {
    filter = await Offer.find({
      $and: [
        { category: category },
        { job_type: job_type },
        { experience: { $lte: experience } },
      ],
    });
  } else if (
    category === "all" &&
    location !== "all" &&
    experience === "more"
  ) {
    filter = await Offer.find({
      $and: [
        { location: location },
        { job_type: job_type },
        { experience: { $gte: 6 } },
      ],
    });
  } else if (
    category === "all" &&
    location !== "all" &&
    experience !== "more"
  ) {
    filter = await Offer.find({
      $and: [
        { location: location },
        { job_type: job_type },
        { experience: { $lte: experience } },
      ],
    });
  }
  res.json(filter);
});

module.exports = router;
