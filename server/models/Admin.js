const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // optional but good for validation
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
