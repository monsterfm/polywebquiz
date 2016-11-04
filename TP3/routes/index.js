var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

 router.get('/tabBord', function(req, res, next) {
  res.render('tabBord');
});

 router.get('/instructions', function(req, res, next) {
  res.render('instructions');
});

  router.get('/examen', function(req, res, next) {
  res.render('examen');
});
  router.get('/examen2', function(req, res, next) {
  res.render('examen2');
});
  router.get('/resultatExamen', function(req, res, next) {
  res.render('resultatExamen');
});
  router.get('/testrapide', function(req, res, next) {
  res.render('testrapide');
});
  router.get('/ajouterQuestion', function(req, res, next) {
  res.render('ajouterQuestion');
});
  router.get('/testRapide2', function(req, res, next) {
  res.render('testrapide2');
});
module.exports = router;
