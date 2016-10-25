$(function(){
var counter = 0;
var $domain = $('#domain'); // pour changer le domaine
var $enonce = $('#enonce'); // pour changer la question
var $choices = $('#choices'); // pour changer les choix
var $suivantExamenBtn = $('#suivantExamen');
var $abandonBtn = $('#abandonBtn');
//get domaine and nbreExamens from session storage
var domaine = sessionStorage.getItem('domaine');
var nbExamen = sessionStorage.getItem('nbreExamens'); 
 var correctAnswer = "";  


var bonneReponse = -1;
var reponseChoisie = -2;

    function handleDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', $(this).parent().html());

        reponseChoisie = $(this).data('value');
    }

    function handleDragOver(e) {
        e.preventDefault();
        return false;
    }

    function handleDragEnter(e) {
        $(this).addClass('drop-container-over');
    }

    function handleDragLeave(e) {
        $(this).removeClass('drop-container-over');
    }

    function handleDragEnd(e) {
        $('.drop-container-over').each(function() {
            $(this).removeClass('drop-container-over');
        });
    }

    function handleDrop(e) {
        e.stopPropagation();

        $('.drop-container-over').each(function() {
            $(this).removeClass('drop-container-over');
        });

        // On place le html de la réponse dans le container
        $(this).html(e.dataTransfer.getData('text/html'));

        // On ne peut plus drag n drop les autres réponses
        $('[draggable]').attr('draggable', false);

        //compteur réponse
        if(reponseChoisie == bonneReponse) {
            var nbBonneReponses = parseInt(sessionStorage.getItem('nbBonnesReponses') || 0) + 1;
            sessionStorage.setItem('nbBonnesReponses', nbBonneReponses);
        }

        // On peut passer à la question suivante

        //on incrémente le compteur
        var compteurQuestion = parseInt(sessionStorage.getItem('compteurQuestion') || 1) + 1;
        sessionStorage.setItem('compteurQuestion', compteurQuestion);

        // On modifie le texte du bouton si on a terminé l'examen
        if(compteurQuestion > sessionStorage.getItem('nbQuestions')) {
            $('#suivant').attr('value', 'Voir le résultat');
        }

        $('#suivant').attr('disabled', false);

        return false;
    }

/**
 *
 * abandonner examen
 *
 */
$abandonBtn.click(function(){
        sessionStorage.setItem('nbCorrectAnswers', 0);
        sessionStorage.setItem('nbQuestionsAbandon', sessionStorage.getItem('nbQuestions') + 1);
        if(storage){
        var msg_abandon_Exam = " Vous avez choisi d'abandonner l'examen! Examen Échoué ! </br> Note finale: 0/" + compteurQuestion ;
        storage.setItem('termineExam', msg_abandon_Exam);
        }
 });

/**
 *
 * getRandomQuestionHTML
 *
 */
function getRandomQuestionHTML() {
        $.get('/ajax/questionHTML',function(data){

                $domain.text(data.domaine);
                $enonce.text(data.question);
                for(i in data.choices){
                  $(choices).append('<span><input draggable ="true" type="checkbox" id="'+ i +'" />' + data.choices[i] + '</span>');
                  } 

                }, 'json');
 }
 function getRandomQuestionCSS() {
        $.get('/ajax/questionCSS',function(data) {

                $domain.text(data.domaine);
                $enonce.text(data.question);
                for(i in data.choices){
                  $(choices).append('<span><input draggable ="true" type="checkbox" id="'+ i +'" />' + data.choices[i] + '</span>');
                  } 
                }, 'json');
 }
function getRandomQuestionJS() {
        $.get('/ajax/questionJavaScript',function(data) {
                $domain.text(data.domaine);
                $enonce.text(data.question);
                for(i in data.choices){
                  $(choices).append('<span><input draggable ="true" type="checkbox" id="'+ i +'" />' + data.choices[i] + '</span>');
                  } 
                }, 'json');
 }
          
                // bind events pour le drag and drop
                // $('.reponse').each(function() {
                //     this.addEventListener('dragstart', handleDragStart, false);
                // });
        if(domaine =="HTML" && sessionStorage.getItem('compteurQuestion') == "1")
          getRandomQuestionHTML(); 
          //sessionStorage.setItem('compteurQuestion',1);


        
        if(domaine =="CSS" && sessionStorage.getItem('compteurQuestion') == "1")
          getRandomQuestionCSS();
          //sessionStorage.setItem('compteurQuestion',1);
     
        if(domaine =="JavaScript"){
          getRandomQuestionJS();
          sessionStorage.setItem('compteurQuestion',parseInt(sessionStorage.getItem('compteurQuestion')) + 1);

        }
          
          //counter++;
          //sessionStorage.setItem('compteurQuestion',parseInt(sessionStorage.getItem('compteurQuestion')) + 1);


       


 
// function storeResultScoreMsg(score){
//   if(storage){
//       if(score>= 0 && score <25){
//         var msg_veryweak = " Très faible </br> Note finale: " + score +"/100";
//         storage.setItem('termineExam',msg_veryweak)
//       }
//       if(score>= 25 && score < 50){
//         var msg_weak = " Faible </br> Note finale: " + score +"/100";
//         storage.setItem('termineExam',msg_weak)
//       }
//       if(score>= 50 && score < 75){
//         var msg_average = " Bien </br> Note finale: " +score + "/100";
//         storage.setItem('termineExam',msg_average)
//       }
//       if(score>= 75 && score <= 100){
//         var msg_excellent= " Excellent </br> Note finale: " + score +"/100";
//         storage.setItem('termineExam',msg_excellent)
//       }
   
//   }
//   return 0 ;

// }
/**
 *
 * next exam button
 *
 */

$suivantExamenBtn.click(function() {
  alert("1")
  //if not the last question
  nbExamen= sessionStorage.getItem('nbreExamens');
  // alert(parseInt(sessionStorage.getItem('compteurQuestion')));
  // alert(parseInt(nbExamen));
  // alert(typeof(parseInt(sessionStorage.getItem('compteurQuestion'))));
  // alert(typeof(parseInt(nbExamen)));
  var x = parseInt(sessionStorage.getItem('compteurQuestion'));
  var y = parseInt(nbExamen);
  domaine = sessionStorage.getItem('domaine');

  if(x>=y)
     window.location.href = "/resultatExamen";
  
  else{

    alert("2")
    if(domaine == "HTML"){
      getRandomQuestionHTML();   

    }
    if(domaine == "CSS"){
      getRandomQuestionCSS();   

    }
    if(domaine == "JavaScript"){
      getRandomQuestionJS();   
      sessionStorage.setItem('compteurQuestion',parseInt(sessionStorage.getItem('compteurQuestion')) + 1);

    }

  }

}); //end of click

});


