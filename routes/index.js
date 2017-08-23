var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('Home Page');
});

/* GET home page. */
router.get('/request', function(req, res, next) {
  res.render('index',{"host":req.hostname});
});

module.exports = router;
