var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  password: String,
  avatar: String
});

var Users = mongoose.model("Users", userSchema, "Users");

module.exports = Users;
