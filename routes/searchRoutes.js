const express = require("express");
const { connectToDatabase } = require("../models/db");

const router = express.Router();

router.get("/", async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const category = req.query.category;
  const gifts = await db.collection("gifts")
    .find({ category: category })
    .toArray();
  res.json(gifts);
});

module.exports = router;
