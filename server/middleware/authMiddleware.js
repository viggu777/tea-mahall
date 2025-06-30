const { verifyToken } = require("@clerk/backend");
require("dotenv").config();

const authenticateAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { payload } = await verifyToken(token, {
      apiKey: process.env.CLERK_SECRET_KEY, // ✅ Required
    });

    req.user = payload; // Attach to request
    next();
  } catch (err) {
    console.error("Clerk token verification failed:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { authenticateAdmin };
