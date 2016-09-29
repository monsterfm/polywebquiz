var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/**
 *
 * 
 *
 */
 router.get('/tabBord', function(req, res, next) {
  res.render('tabBord');
});

 router.get('/instructions', function(req, res, next) {
  res.render('instructions');
});

  router.get('/tabBord/examen1', function(req, res, next) {
  res.render('examen1');
});
module.exports = router;
