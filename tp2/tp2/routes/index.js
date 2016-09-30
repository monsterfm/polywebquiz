var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index', function(req, res, next) {
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

  router.get('/examen1', function(req, res, next) {
  res.render('examen1');
});
  router.get('/examen2', function(req, res, next) {
  res.render('examen2');
});
  router.get('/resultatExamen', function(req, res, next) {
  res.render('resultatExamen');
});
  router.get('/testRapide1', function(req, res, next) {
  res.render('testrapide1');
});
  router.get('/testRapide2', function(req, res, next) {
  res.render('testrapide2');
});
module.exports = router;
