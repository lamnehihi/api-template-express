var Users = require("../models/users.model");

module.exports.index = async function(req, res, next) {
  var books = await Users.find();
  
  res.send(books);
}

module.exports.postLogin = async function(req, res, next) {
  var errors = [];
  var email = req.body.email;
  var password = req.body.password;

  var user = await Users.findOne({ email : email});
  console.log(user);

  if (!user) {
    errors.push("Wrong email!");
    res.json(errors);
  }

  var isRightPass = password === user.password; // true

  if (!isRightPass) {
    errors.push("Wrong password!");
    res.json(errors);
  }

  res.json("login susscess!");
};
