
var mongoose = require( 'mongoose' );
var express = require('express');
//var db = require('../database/questions.js');
var router = express.Router();

var Question = mongoose.model( 'Question',Question);
var ExamenSchema = mongoose.model( 'Examen',ExamenSchema);
var testRapide = mongoose.model( 'testRapide',testRapide);

router.delete('/delete',function(req, res, next) {
    //var id = req.body.id;
    Question.remove({},function(err, result){
        if(!err){
            console.log("data deleted")

        }

    });
});

/**
 *
 * random question tp3
 *
 */

// // for test-rapide
// router.get('/question', function(req, res, next) {
//     var randomQuestion = Math.floor(Math.random()*db.length)
//     res.json(db[randomQuestion]);
// });
// //for exams
// router.get('/questionHTML',function(req, res, next) {
//     var maxHTML_index =3
//     var minHTML_index =0
//     var randomQuestion = Math.floor(Math.random() * (maxHTML_index - minHTML_index+ 1 ) + minHTML_index);
//     res.json(db[randomQuestion]);
    
// });

// router.get('/questionCSS',function(req, res, next) {
    
//     var maxCSS_index =7
//     var minCSS_index =5
//     var randomQuestion = Math.floor(Math.random() * (maxCSS_index - minCSS_index + 1) + minCSS_index);
//     res.json(db[randomQuestion]);
    
// });

// router.get('/questionJavaScript',function(req, res, next) {
    
//     var maxJS_index =9
//     var minJS_index =8
//     var randomQuestion = Math.floor(Math.random() * (maxJS_index - minJS_index + 1 ) + minJS_index);
//     res.json(db[randomQuestion]);
    
// });

/**
 *
 * random question from mangodb (test)
 *
 */
router.get('/question', function(req, res,next) {
    Question.findOneRandom(function(err, result){
        if(!err){
            console.log(result)
            res.json(result)
        }
            
    });
    
});
/**
 *
 * random css question 
 *
 */
router.get('/questionCSS', function(req, res,next) {
    var condition =  { domaine: { $in: ['CSS'] } };
    Question.findOneRandom(condition,{},{},function(err, result){
        if(!err){
            console.log(result)
            res.json(result)
        }
            
    });
    
});
/**
 *
 * random html question
 *
 */
router.get('/questionHTML', function(req, res,next) {
    var condition =  { domaine: { $in: ['HTML'] } };
    Question.findOneRandom(condition,{},{},function(err, result){
        if(!err){
            console.log(result)
            res.json(result)
        }
            
    });
    
});
/**
 *
 * random js question
 *
 */
router.get('/questionJavaScript', function(req, res,next) {
    var condition =  { domaine: { $in: ['JavaScript'] } };
    Question.findOneRandom(condition,{},{},function(err, result){
        if(!err){
            console.log(result)
            res.json(result)
        }
            
    });
    
});

/**
 *
 * add question = question 6
 *
 */


router.post('/ajouterQuestion', function (req, res) {
    var validInput1= (!req.body.domaine || !req.body.question || !req.body.choices || !req.body.Correctanswer);
    var validInput2 = (req.body.choices.length < 2  || req.body.Correctanswer < 0 || req.body.choices.length <= req.body.Correctanswer )
    if (validInput1 || validInput2) {
        res.status(400);
        return;
    }

    var question = new Question({
        domaine: req.body.domaine,
        question: req.body.question,
        choices: req.body.choices,
        Correctanswer: req.body.Correctanswer
    });


    question.save(function (err, question) {

        if (err)  return console.error(err);
        res.status(201).json(question); //201 for created
    });
});

/**
 *
 * get number of questions /domain ==question 9
 *
 */
 router.get('/nbreQuestionsJS',function(req,res){

    var condition =  { domaine: { $in: ['JavaScript'] } };
    Question.count(condition,function(err,result){
        console.log("nbjs");
        console.log(result);

    })
    

 });

/**
 *
 * Save Results of exams
 *
 */
 router.post('/sauvegarderExamen', function (req, res) {
    

    var results = new ExamenSchema({
        domainChoice: req.body.domainChoice,
        examNumber: req.body.examNumber,
        counter: req.body.counter,
        nbCorrectAnswers: req.body.nbCorrectAnswers
    });


    results.save(function (err, question) {

        if (err)  return console.error(err);
        res.status(201).json(question); //201 for created
    });
});

 /**
 *
 * Save Results of exams
 *
 */
 router.post('/saveInDb', function (req, res) {
    
    var results = new testRapide({
        nbCorrectAnswers: req.body.countCorrectAnswer,
        totalCounter: req.body.countTotal
    });


    results.save(function (err, question) {
        if (err)  return console.error(err);
        res.status(201).json(question); //201 for created
    });

});


 /**
 *
 * verify if answer is good
 *
 */
 router.post('/getCorrectAnswer', function (req, res) {
    Question.findById( req.body.idToFind, function ( err, question ){
        if (err)  return console.error(err);
        else{
            if(question.Correctanswer == req.body.reponse)
            res.send(true) ;
        else
            res.send(false) ;
        }
        
    });
});

 /**
 *
 * get all results exams
 *
 */
router.get('/resultsExams', function(req, res,next) {
    ExamenSchema.find(function ( err, result, count ){
        if(!err){
            console.log(result)
            res.json(result)
        }
            
    });
    
});

 /**
 *
 * get all test rapide 
 *
 */
router.get('/resultsTest', function(req, res,next) {
    testRapide.find(function ( err, result, count ){
        if(!err){
            console.log(result)
            res.json(result)
        }
            
    });
    
});

router.get('/nbreQuestionsCSS',function(req,res){

    var condition =  { domaine: { $in: ['CSS'] } };
    Question.count(condition,function(err,result){
         console.log("nbcss");
        console.log(result);


    })
    

 });

router.get('/nbreQuestionsHTML',function(req,res){

    var condition =  { domaine: { $in: ['HTML'] } };
    Question.count(condition,function(err,result){
         console.log("nbhtml");
        console.log(result);


    })
    

 });

module.exports = router;