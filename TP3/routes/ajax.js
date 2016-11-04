
var mongoose = require( 'mongoose' );
var Question = mongoose.model( 'Question' );
var express = require('express');
var router = express.Router();
var db = require('../database/questions.js');
// for test-rapide
router.get('/question', function(req, res, next) {
    var randomQuestion = Math.floor(Math.random()*db.length)
    res.json(db[randomQuestion]);
});
//for exams
router.get('/questionHTML',function(req, res, next) {
    var maxHTML_index =3
    var minHTML_index =0
    var randomQuestion = Math.floor(Math.random() * (maxHTML_index - minHTML_index+ 1 ) + minHTML_index);
    res.json(db[randomQuestion]);
    
});

router.get('/questionCSS',function(req, res, next) {
    
    var maxCSS_index =7
    var minCSS_index =5
    var randomQuestion = Math.floor(Math.random() * (maxCSS_index - minCSS_index + 1) + minCSS_index);
    res.json(db[randomQuestion]);
    
});

router.get('/questionJavaScript',function(req, res, next) {
    
    var maxJS_index =9
    var minJS_index =8
    var randomQuestion = Math.floor(Math.random() * (maxJS_index - minJS_index + 1 ) + minJS_index);
    res.json(db[randomQuestion]);
    
});

router.post('/ajouterQuestion',function ( req, res ){
    
    if(req.body.Domaine.length < 2 || req.body.Question < 2 || req.body.reponseCorrect < 2)
        res.status(400).send('Veuillez entrer de bonnes valeurs dans les champs');
    else{
        new Question({
            domaine    : req.body.Domaine,
            question    : req.body.Question,
            reponse_correcte    : req.body.reponseCorrect,
            reponse_2    : req.body.reponse2,
            reponse_3    : req.body.reponse3
        }).save( function( err, todo, count ){
            res.redirect( '/' );
        });
    }
});

module.exports = router;