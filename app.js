const express = require("express");

const giftRoutes = require("./routes/giftRoutes");
const searchRoutes = require("./routes/searchRoutes");

const app = express();
app.use(express.json());

// serves /api/gifts
app.use("/api/gifts", giftRoutes);

// serves /api/gifts/search
app.use("/api/gifts/search", searchRoutes);

module.exports = app;
