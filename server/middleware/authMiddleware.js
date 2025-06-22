const jwt = require("jsonwebtoken");

const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", req.headers.authorization);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // 👈 must match
    req.admin = decoded; // attach admin to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { authenticateAdmin };
