const express = require("express");
const { connectToDatabase } = require("../models/db");

const router = express.Router();

router.get("/", async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const gifts = await db.collection("gifts").find().toArray();
  res.json(gifts);
});

router.get("/:id", async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const gift = await db.collection("gifts").findOne({ _id: req.params.id });
  res.json(gift);
});

module.exports = router;
