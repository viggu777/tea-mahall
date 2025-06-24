const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  category: {
    type: String,
    enum: ["Tea", "Healthy Tea", "Coolers", "Juices", "Snacks"],
    required: true
  },
  image: { type: String, required: true }, // Cloudinary URL
});

module.exports = mongoose.model("MenuItem", menuItemSchema);

