const Franchise = require("../models/FranchiseModel");
const nodemailer = require("nodemailer");

exports.createFranchise = async (req, res) => {
  try {
    const franchise = new Franchise(req.body);
    await franchise.save();

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
  from: `"Tea Mahal" <${process.env.EMAIL_USER}>`,
  to: email, // receiver's email
  subject: "Franchise Application Received ✔️",
  html: `
    <h3>Thank you for applying!</h3>
    <p>We've received your franchise request. Our team will get in touch with you soon.</p>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("❌ Mail error:", error);
    return res.status(500).json({ message: "Mail not sent" });
  }
  console.log("✅ Email sent:", info.response);
  res.status(200).json({ message: "Franchise request submitted and confirmation sent." });
});
