const express = require("express");
const mongoose = require("mongoose");
const router = require("../Server/routers/index")
const dotenv = require("dotenv")

const app = express();
const port = 3000;


const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 3000
dotenv.config();

app.use(express.json())
app.use("/",router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});


mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
