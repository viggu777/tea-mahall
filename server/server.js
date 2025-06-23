const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://teamahall.netlify.app"], // ✅ Allow both dev and production
    credentials: true,
  })
);


app.use(express.json());

const menuRoutes = require("./routes/menuRoutes");
app.use("/api/menu", menuRoutes);

const franchiseRoutes = require("./routes/franchiseRoutes");
app.use("/api/franchise", franchiseRoutes);

const adminAuthRoutes = require("./routes/adminAuthRoutes");
app.use("/api/admin", adminAuthRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Tea Mahal Backend!");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
