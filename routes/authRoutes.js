const express = require("express");
const { connectToDatabase } = require("../models/db");

const router = express.Router();

router.post("/login", async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const user = await db
    .collection("users")
    .findOne({ username: req.body.username }); // <- required line
  res.json(user || {});
});

module.exports = router;
