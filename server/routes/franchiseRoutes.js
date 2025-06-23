const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Franchise = require("../models/Franchise");

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/franchise
router.post("/", async (req, res) => {
  const { name, email, phone, location, message } = req.body;

  // Validate phone number format
  const phonePattern = /^[6-9]\d{9}$/;
  if (!phonePattern.test(phone)) {
    return res.status(400).json({ message: "Invalid phone number format" });
  }

  // ✅ Basic email format validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // ✅ 1. Save to DB
    const newFranchise = new Franchise({
      name,
      email,
      phone,
      location,
      message,
    });
    await newFranchise.save();

    let emailIssue = false;

    // ✅ 2. Send confirmation to user
    try {
      await transporter.sendMail({
        from: `"Tea Mahal" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Franchise Request Received ✔️",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5a27;">Hello ${name},</h2>
          <p>Thank you for showing interest in becoming a <strong>Tea Mahal</strong> franchise partner.</p>
          <p>We've received your request and our team will reach out to you within 24 hours.</p>
          
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d5a27; margin-top: 0;">Your Submitted Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Preferred Location:</strong> ${location}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
          </div>
          
          <p>If you have any immediate questions, feel free to reach out to us at:</p>
          <ul>
            <li>📞 Phone: +91 7013415191</li>
            <li>📧 Email: franchise@teamahal.com</li>
          </ul>
          
          <br/>
          <p style="color: #2d5a27;">Best regards,<br/>Tea Mahal Team ☕</p>
        </div>
        `,
      });
    } catch (err) {
      console.error(
        "❌ Error sending confirmation email to user:",
        err.message
      );
      emailIssue = true;
    }

    // ✅ 3. Send admin email (doesn't stop flow if it fails)
    try {
      await transporter.sendMail({
        from: `"Tea Mahal Website" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "📬 New Franchise Request Submission",
        html: `
          <h2>New Franchise Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
          <br/>
          <p>Check the admin dashboard or database for more details.</p>
        `,
      });
    } catch (err) {
      console.error("❌ Error sending admin notification email:", err.message);
    }

    // ✅ 4. Respond back to frontend
    return res.status(200).json({
      message: emailIssue
        ? "Franchise request saved, but confirmation email failed to send."
        : "Franchise request submitted successfully!",
      emailIssue,
    });
  } catch (err) {
    console.error(
      "❌ Backend error submitting franchise request:",
      err.message
    );
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
