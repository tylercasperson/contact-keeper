const jwt = require("jsonwebtoken");
require("dotenv");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    nect();
  } catch {
    res.status(401).json({ msg: "Token in not valid" });
  }
};
