const mongoose = require("mongoose");
const schema = mongoose.Schema;

const OfferSchema = new schema({
  recruter: {
    type: schema.Types.ObjectId,
    ref: "Recruter",
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  job_type: {
    type: String,
    required: true,
  },
  vacancy: {
    type: Number,
    required: true,
  },
  applicants: [
    {
      appliedBy: { type: mongoose.Types.ObjectId, ref: "User" },
    },
  ],
});

OfferSchema.index({ title: "text" });

const Offer = mongoose.model("Offer", OfferSchema);
module.exports = Offer;
