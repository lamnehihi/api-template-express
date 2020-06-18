var mongoose = require("mongoose");

const uri =
"mongodb+srv://lamnehihi:" + process.env.MONGO_PASSWORD + "@cluster0-fxd6j.gcp.mongodb.net/Library?retryWrites=true&w=majority";

var connectDB = async function() {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected"));
}

module.exports = connectDB

