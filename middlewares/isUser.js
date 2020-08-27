const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");

const isUser = async (req, res, next) => {
  const token = req.header("x-token");
  try {
    const decoded = await jwt.verify(token, config.get("jwtKey"));
    const user = await User.findById(decoded.user.id);
    if (user) {
      req.user = decoded.user;
      next();
    }
  } catch (err) {
    res.json({ error: "not allowed" });
  }
};

module.exports = isUser;
