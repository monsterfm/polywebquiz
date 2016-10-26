
function moyenneExamens(){
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        var moyenneExams=0;
        if(existingEntries == null) 
            $('#stat').text("Aucun examen n'a encore été fait!");
        else{
            for(i in existingEntries){
                moyenneExams=moyenneExams+((parseInt(existingEntries[i].nbQuestionsCorrectes)/parseInt(existingEntries[i].nbQuestionsExamen))*100);
            }
            moyenneExams=(moyenneExams/existingEntries.length);
            $('#stat').text("Moyenne des examens: " + moyenneExams.toFixed(2) +" %");
        }
        if (localStorage.getItem("nbCorrectAnswersTotal") === null &&  localStorage.getItem("totalCounter") === null) 
        $('#statstest').text("Statistiques test rapide : "+ 0 +"/ " + 0);
      else
        $('#statstest').text("Statistiques test rapide : "+ localStorage.getItem("nbCorrectAnswersTotal") +"/ " + localStorage.getItem("totalCounter"));
      return 0;
       }


$(function(){
	
       moyenneExamens();


});