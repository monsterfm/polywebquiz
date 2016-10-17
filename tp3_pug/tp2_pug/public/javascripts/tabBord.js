$(function(){

var nbreExamens = "";
var domaine = "";
//get number of questions selected
  var getNbreExamens = function(){

    $('#examNumber').find('option:selected').each(function() {
        nbreExamens = $(this).text();
      });
    return nbreExamens;
  };

//get domaine selected
  var getDomaine = function(){

    $('#domainChoice').find('option:selected').each(function() {
        domaine = $(this).text();
       });
    return domaine;
  };

// click on examen and store information 

var $examenBtn = $('#examenBtn');
$examenBtn.click(function(){
  if(storage){
    storage.setItem('nbreExamen', getNbreExamens());
    storage.setItem('domaine', getDomaine());
   }

    });

});
