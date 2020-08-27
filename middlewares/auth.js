const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  const token = req.header("x-token");
  try {
    const decoded = jwt.verify(token, config.get("jwtKey"));
    req.user = decoded.user;
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  next();
};

module.exports = auth;
