var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
var Question =new Schema({
	question_id    : String,
	domaine    : String,
	question 	: String,
	reponse_correcte    : String,
	reponse_2    : String,
	reponse_3    : String
});
mongoose.model( 'Question', Question );
mongoose.connect( 'mongodb://polywebquiz:test123@ds143767.mlab.com:43767/polyweb' );