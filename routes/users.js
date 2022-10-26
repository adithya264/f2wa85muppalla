var express = require('express');
var times=0;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  times+=1
  res.send('respond with a resource');
});

module.exports = router;
