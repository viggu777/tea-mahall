require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

const seedAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const existing = await Admin.findOne({ email: "admin@teamahal.com" });
  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = new Admin({
    username: "admin",
    email: "admin@teamahal.com",
    password: hashedPassword,
  });

  await admin.save();
  console.log("Admin created successfully.");
  process.exit();
};

seedAdmin();
