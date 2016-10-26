function moyenneExamens(){
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        var moyenneExams=0;
        if(existingEntries == null) 
            $('#stats').text("Aucun examens n'a encore ete fait!");
        else{
            for(i in existingEntries){
                moyenneExams=moyenneExams+((parseInt(existingEntries[i].nbQuestionsCorrectes)/parseInt(existingEntries[i].nbQuestionsExamen))*100);
            }
            moyenneExams=(moyenneExams/existingEntries.length);
            $('#stats').text("Moyenne des examens: " + moyenneExams.toFixed(2) +" %");
           

      }
      if (localStorage.getItem("nbCorrectAnswersTotal") === null &&  localStorage.getItem("totalCounter") === null) 
        $('#statstest').text("Statistiques test rapide : "+ 0 +"/ " + 0);
      else
        $('#statstest').text("Statistiques test rapide : "+ localStorage.getItem("nbCorrectAnswersTotal") +"/ " + localStorage.getItem("totalCounter"));
      return 0;  
  }



$(function() {
    /**
     *
     * test rapide
     *
     */
    
    $('#testRapideBtnForm').click(function() {

        sessionStorage.clear();

        sessionStorage.setItem('nbCorrectAnswers', 0);
        sessionStorage.setItem('counter', 0);
        moyenneExamens();


    });
    /**
     *
     * choix param examen
     *
     */
    
    $('#examenFormBtn').click(function(){
        var domainChoice= $('#domainChoice').val();
        var examNumber = $('#examNumber').val();

        sessionStorage.clear();

        sessionStorage.setItem('domainChoice', domainChoice);
        sessionStorage.setItem('examNumber', examNumber);
        sessionStorage.setItem('nbCorrectAnswers', 0);

         moyenneExamens();
    });
    /**
     *
     * reset button
     *
     */
    

    $('#resetBtn').click(function(){
        localStorage.clear();
        moyenneExamens();
        $('#stats').text("Aucun examens n'a encore ete fait!");
    }); 

    $('#Details').click(function(){
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) 
            $('#textDetails').text("Aucun examens n'a encore ete fait!");
        else{
            for(i in existingEntries){
                var numeroExam=parseInt(i)+1;
                $('#listeExams').append("<li>Examen "+ numeroExam +" - ("+ existingEntries[i].domaine +") : " +existingEntries[i].nbQuestionsCorrectes + "/"
                    +existingEntries[i].nbQuestionsExamen +"</li><br>");
            }
        }
    }); 


    
});



