const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItems");
const { upload } = require("../utils/cloudinary");
const { authenticateAdmin } = require("../middleware/authMiddleware");
const wrapAsync = require("../utils/wrapAsync");

// ✅ GET: All items (public)
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const items = await MenuItem.find();
    res.json(items);
  })
);

// ✅ POST: Add menu item (admin only)
router.post(
  "/",
  authenticateAdmin,
  upload.single("image"),
  wrapAsync(async (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Admin:", req.admin);

    const { name, description, price } = req.body;
    const image = req.file?.path;

    if (!image) return res.status(400).json({ error: "Image upload failed" });

    const item = new MenuItem({ name, description, price, image });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  })
);

// ✅ PUT: Update menu item
router.put(
  "/:id",
  authenticateAdmin,
  upload.single("image"),
  wrapAsync(async (req, res) => {
    const updateData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    };

    if (req.file?.path) updateData.image = req.file.path;

    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedItem) return res.status(404).json({ error: "Item not found" });

    res.json(updatedItem);
  })
);

// ✅ DELETE: Remove menu item
router.delete(
  "/:id",
  authenticateAdmin,
  wrapAsync(async (req, res) => {
    const deleted = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  })
);

module.exports = router;
