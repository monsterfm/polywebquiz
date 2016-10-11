

var express = require('express');
// var bodyParser = require('body-parser')
// var db = require('../database/questions.json');
// var db = require('javascripts/testRapide');
var router = express.Router();
/**
 *
 * need to be changed
 *
 */


router.get('/testrapide1', function(req, res)
{
	// var RandomQuestion = db.getQuestionById(getRandom(10));
	// res.render('testrapide1', {   title: 'Test rapide', q : RandomQuestion });
	// console.log(RandomQuestion);
	console.log('i am in ajax file');
});

router.get('/examen1', function(req, res)
{
	// var RandomQuestion = db.getQuestionById(getRandom(getDBLength()));
	// res.render('examen1', {   title: 'Examen', q : RandomQuestion });
	// console.log(RandomQuestion);
});
module.exports = router;