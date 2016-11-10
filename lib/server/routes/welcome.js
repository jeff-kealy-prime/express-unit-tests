var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log("welcome get");
  res.send("Welcome to the spaceship factory!");
});

module.exports = router;
