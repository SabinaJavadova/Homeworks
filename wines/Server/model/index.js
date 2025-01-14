const mongoose = require('mongoose');
const { Schema } = mongoose;

const wineSchema = new Schema({
    img: String,
    title: String,
    price: Number,

});

const wineModel = mongoose.model("wines",wineSchema)

module.exports = wineModel;
