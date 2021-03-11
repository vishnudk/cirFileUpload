var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var d = __dirname.split("\\")
  d.pop()
  d.push("public")
  d.push("html")
  d.push("index.html")
  d = d.join("\\")
  console.log(d)
  res.sendFile(d)
});

module.exports = router;
