const app = require("./app");
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("GiftLink backend running"));

app.listen(PORT, () => console.log(`Running on ${PORT}`));
