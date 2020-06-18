var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  shopId : String
});

var Books = mongoose.model("Books", bookSchema, "Books");

module.exports = Books;
