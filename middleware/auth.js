require("dotenv");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.secret);

    req.user = decoded.user;
    next();
  } catch {
    res.status(401).json({ token, msg: "Token in not valid" });
  }
};
