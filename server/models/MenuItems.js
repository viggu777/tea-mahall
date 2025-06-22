const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  image: { type: String, required: true }, // this will store Cloudinary URL
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
