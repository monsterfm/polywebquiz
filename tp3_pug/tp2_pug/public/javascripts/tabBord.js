$(function(){


var $examenBtn = $('#examenBtn');
var $reset =$('#reset');
var $examForm = $('#examForm');
var $domaine = $('#domainChoice');
var $nbreExamens = $('#examNumber');

//use sessionStorage for exam data 
// $examenBtn.click(function() {
//         var domaine = $domaine.val();
//         var nbreExamens = $nbreExamens.val();

//         sessionStorage.clear();

//         sessionStorage.setItem('domaine', domaine);
//         sessionStorage.setItem('nbreExamens', nbreExamens);
//         sessionStorage.setItem('nbCorrectAnswers', 0);
//         sessionStorage.setItem('compteurQuestion', 1);
//     });

 $('#examForm').on('submit', function(event) {
        var domaine = $domaine.val();
        var nbQuestions = $nbreExamens.val();

        sessionStorage.clear();

        sessionStorage.setItem('domaine', domaine);
        sessionStorage.setItem('nbQuestions', nbQuestions);
        sessionStorage.setItem('nbBonneReponses', 0);
    });


//get number of questions selected
  // var getNbreExamens = function(){

  //   $('#examNumber').find('option:selected').each(function() {
  //       nbreExamens = $(this).text();
  //     });
  //   return nbreExamens;
  // };

//get selected domain
// var domaine = $('#domainChoice').val();
//   var getDomaine = function(){

//     $('#domainChoice').find('option:selected').each(function() {
//         domaine = $(this).text();
//        });
//     return domaine;
//   };

// click on examen and store information 


// $examenBtn.click(function(){
//   if(storage){
//     storage.setItem('nbreExamen', getNbreExamens());
//     storage.setItem('domaine', getDomaine());
//    }

//     });

//click to reset

$reset.click(function(){
  //do the job here (qui réinitialise les données sauvegardées (tel que sa note des tests rapides, la liste d’examens)
  
  localStorage.clear();
  //updateStats();
  alert("Vos statistiques ont bien été initialisées!");
  

});

});
