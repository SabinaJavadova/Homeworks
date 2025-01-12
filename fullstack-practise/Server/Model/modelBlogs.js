const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  img: String,
  country: String,
  title: String,
  description: String,
});

const modelBlogs = mongoose.model("blog", blogSchema);

module.exports = modelBlogs;
