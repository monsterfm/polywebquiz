
$( document ).ready(function() {

var counter = 0;
var $domain = $('#domain'); // pour changer le domaine
var $enonce = $('#enonce'); // pour changer la question
var $choices = $('#choices'); // pour changer les choix
var $suivantExamenBtn = $('#suivantExamen');
var $abandonBtn = $('#abandonBtn');
//get domaine and nbExam from local storage
if(storage){
        var domain = storage.getItem('domaine');
        var nbExamen = storage.getItem('nbreExamen');   
 }

/**
 *
 * abandonner examen
 *
 */
$abandonBtn.click(function(){

        if(storage){
        var msg_abandon_Exam = " Vous avez choisi d'abandonner l'examen! Examen Échoué ! </br> Note finale: 0/100";
        storage.setItem('termineExam', msg_abandon_Exam);
      }
 });

/**
 *
 * Generate random number
 *
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * update exam page
 *
 */
function updateExamPage(data,random){
$domain.text(data[random]["domaine"]);
$enonce.text(data[random]["question"]);
 for(i in data[random]["choices"]){
      $(choices).append('<span draggable ="true"><input draggable ="true" type="checkbox" name="something" id="'+i+'" />' + data[random].choices[i] + '</span>');

 } 
 return 0;
}


 /**
  *
  * storeResultScoreMsg
  *
  */
 
function storeResultScoreMsg(score){
  if(storage){
      if(score>= 0 && score <25){
        var msg_veryweak = " Très faible </br> Note finale: " + score +"/100";
        storage.setItem('termineExam',msg_veryweak)
      }
      if(score>= 25 && score < 50){
        var msg_weak = " Faible </br> Note finale: " + score +"/100";
        storage.setItem('termineExam',msg_weak)
      }
      if(score>= 50 && score < 75){
        var msg_average = " Bien </br> Note finale: " +score + "/100";
        storage.setItem('termineExam',msg_average)
      }
      if(score>= 75 && score <= 100){
        var msg_excellent= " Excellent </br> Note finale: " + score +"/100";
        storage.setItem('termineExam',msg_excellent)
      }
   
  }
  return 0 ;

}
/**
 *
 * next exam button
 *
 */

$suivantExamenBtn.click(function() {
  //if not the last question
  if(counter<nbExamen){
  $.getJSON("questions.json", function(data){
         //generate random number dependeing on selected domain
         if(domain == "HTML"){
          var randomNum = getRandomInt(1,4);
         }
         if(domain == "CSS"){
          var randomNum = getRandomInt(5,8);
         }
         if(domain == "JavaScript"){
          var randomNum = getRandomInt(9,10);
         }
         console.log(randomNum);
         console.log(data[randomNum]["domaine"]);
         console.log(domain);
         console.log("----------");
         updateExamPage(data,randomNum);
         //to do: calculate score increment correctAnswers
          counter++;
          }); 
    $(choices).text(''); 
}

else { // if it is the last question
  window.location.href = "/resultatExamen";
  //to do :save exam data (domain,nbExam,nbCorrectAnswers) into this object
  var examObj= {
    domain: domain,
    nbExam: nbExamen,
    nbCorrectAnswers : 
  }

  //increment statistics

  //storeResultScoreMsg(score)
  


}


  

}); //end of click


});



