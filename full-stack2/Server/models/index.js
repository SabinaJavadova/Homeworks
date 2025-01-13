const mongoose = require ("mongoose");
const { Schema } = mongoose;

const wineSchema = new Schema({
  img: String,
  title: String,
  price: Number,
});

const modelWine = mongoose.model("wines", wineSchema);

module.exports =modelWine
