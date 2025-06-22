const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const admin = await Admin.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!admin) {
      return res
        .status(401)
        .json({ message: "Invalid credentials (user not found)" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid credentials (password mismatch)" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
