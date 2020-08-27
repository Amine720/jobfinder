const mongoose = require("mongoose");
const schema = mongoose.Schema;

const RecruterSchema = new schema({
  company_name: {
    type: String,
    required: true,
  },
  company_logo: {
    type: String,
    required: true,
  },
  company_website: {
    type: String,
    required: true,
  },
  company_email: {
    type: String,
    required: true,
  },
  company_description: {
    type: String,
    required: true,
  },
  company_speciality: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Recruter = mongoose.model("Recruter", RecruterSchema);
module.exports = Recruter;
