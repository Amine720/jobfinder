const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
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
  cv: {
    type: String,
    required: true,
  },
  photo: {
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
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  offers: [
    {
      type: mongoose.Types.ObjectId,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
