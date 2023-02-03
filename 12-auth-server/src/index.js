require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const database = require("./database/config");

const authRouter = require("./routes/auth");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", express.static("public"));
app.use("/api/auth", authRouter);

// Wildcard to respond with the Angular app so it can handle the URL
app.get("*", (req, res) => {
  const html = path.resolve(__dirname, "../public/index.html");
  res.sendFile(html);
});

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  await database.connect();
  console.log(`Listening on port ${PORT}`);
});
