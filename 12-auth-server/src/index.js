require("dotenv").config();
const express = require("express");
const cors = require("cors");
const database = require("./database/config");

const authRouter = require("./routes/auth");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", express.static("public"));
app.use("/auth", authRouter);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  await database.connect();
  console.log(`Listening on port ${PORT}`);
});
