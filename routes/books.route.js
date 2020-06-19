var express = require('express');
var router = express.Router();

var controller = require('../controllers/books.controller');

router.get(
  "/",
  controller.index
)

module.exports = router;
