var mongoose = require( 'mongoose' );
var random = require('mongoose-simple-random');

var Schema   = mongoose.Schema;
//Question
var Question = new Schema({
	//question_id: String,
	domaine: String,
	question: String,
	choices: [String],
	Correctanswer: String
});

Question.plugin(random)
mongoose.model( 'Question', Question );

//testRapide
var testRapide = new Schema({
    nbCorrectAnswers: Number,
    totalCounter: Number
});
mongoose.model('testRapide', testRapide);

//examen
var ExamenSchema = new Schema({
    domainChoice: String,
    examNumber:Number,
    counter:Number,
    nbCorrectAnswers: Number,
    toComplete: Boolean
});
mongoose.model('Examen', ExamenSchema);


mongoose.connect( 'mongodb://polywebquiz:test123@ds143767.mlab.com:43767/polyweb' );