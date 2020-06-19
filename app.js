require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

//Routes
var indexRouter = require("./routes/index");
var booksRouter = require("./routes/books.route");
var usersRouter = require("./routes/users.route");

var app = express();

//connect to mongo cluster
var connectDB = require("./connection");
try {
  connectDB();
} catch (error) {
  console.log("can't connect! : " + error);
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


//Using route
app.use("/api/books", booksRouter);
app.use("/api/users", usersRouter);


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3002, () => console.log(`Example app listening at http://localhost:${3002}`))


module.exports = app;
