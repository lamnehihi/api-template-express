var Books = require("../models/books.model");

module.exports.index = async function(req, res, next) {
  var books = await Books.find();
  
  res.send(books);
}
