const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected...");
  } catch (err) {
    console.log("Error connecting to the database");
  }
};

module.exports = connectDB;
