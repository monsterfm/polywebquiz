function moyenneExamens(){
    var moyenneExams=0;
    var nbrQuestionRapide=0;
    var nbrQuestionTotal=0;
    $.ajax({
                type: 'get',
                url: "/ajax/resultsExams",
                dataType: "json",
                success: function(data){ 
                    if(data == null || data.length == 0) 
                        $('#stats').text("Aucun examens n'a encore ete fait!");
                    else{
                        for(i in data){
                            moyenneExams=moyenneExams+((parseInt(data[i].nbCorrectAnswers)/parseInt(data[i].counter))*100);
                        }
                        moyenneExams=(moyenneExams/data.length);
                        $('#stats').text("Moyenne des examens: " + moyenneExams.toFixed(2) +" %");
                    }
                    
                        
                }
                
            });


    $.ajax({
                type: 'get',
                url: "/ajax/resultsTest",
                dataType: "json",
                success: function(data){ 
                    if(data == null || data.length == 0) 
                        $('#statstest').text("Statistiques test rapide : "+ 0 +"/ " + 0);
                    else{
                        for(i in data){
                            nbrQuestionRapide=nbrQuestionRapide+(parseInt(data[i].nbCorrectAnswers));
                            nbrQuestionTotal=nbrQuestionTotal+(parseInt(data[i].totalCounter));
                        }
                        $('#statstest').text("Statistiques test rapide : "+ nbrQuestionRapide +"/ " + nbrQuestionTotal);
                    }
                    
                        
                }
                
            });
        /*var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
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
      return 0;  */


  }



$(function() {

     //get number of js questions
    function getNumberJSQuestions(){
        $.ajax({
                type: 'get',
                url: "/ajax/nbreQuestionsJS",
                dataType: "json",
                //contentType: 'application/json',
                success: function(data){ 
                    
                    console.log(data)
                    
                        $("#examNumber option").each(function(){
                        if (parseInt($(this).val()) > data) {
                            $(this).attr("disabled", true);
                      }
                    });

                   
                    
                }
                
            });

    }
    // if($('#domainChoice').val() =="JavaScript")
    //     getNumberJSQuestions()
    // if($('#domainChoice').val() =="CSS")
    //     getNumberCSSQuestions()
    // if($('#domainChoice').val() =="HTML")
    //     getNumberHTMLQuestions()

      //get number of css questions
    function getNumberCSSQuestions(){
        $.ajax({
                type: 'get',
                url: "/ajax/nbreQuestionsCSS",
                dataType: "json",
                //contentType: 'application/json',
                success: function(data){ 
                    
                    console.log(data)
                    //return data;
                    
                }
                
            });

    }
       //get number of HTML questions
    function getNumberHTMLQuestions(){
        $.ajax({
                type: 'get',
                url: "/ajax/nbreQuestionsHTML",
                dataType: "json",
                //contentType: 'application/json',
                success: function(data){ 
                    
                    console.log(data)
                    return data;
                    
                }
                
            });

    }
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
    
    $('#examenFormBtn').on('click',function(e){
        //getNumberJSQuestions()
        var domainChoice= $('#domainChoice').val();
        var examNumber = $('#examNumber').val();
        
        sessionStorage.clear();

        sessionStorage.setItem('domainChoice', domainChoice);
        sessionStorage.setItem('examNumber', examNumber);
        sessionStorage.setItem('nbCorrectAnswers', 0);

         moyenneExamens();
         //e.preventDefault();
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
        $.ajax({
                type: 'get',
                url: "/ajax/resultsExams",
                dataType: "json",
                success: function(data){ 
                    if(data == null|| data.length == 0) 
                        $('#textDetails').text("Aucun examens n'a encore ete fait!");
                    else{
                        console.log(data)
                    for(i in data){
                        var numeroExam=parseInt(i)+1;
                        $('#listeExams').append("<li>Examen "+ numeroExam +" - ("+ data[i].domainChoice +") : " +data[i].nbCorrectAnswers + "/"
                    +data[i].counter +"</li><br>");
                    }
                    }
                    
                }
            });





        /*var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) 
            $('#textDetails').text("Aucun examens n'a encore ete fait!");
        else{
            for(i in existingEntries){
                var numeroExam=parseInt(i)+1;
                $('#listeExams').append("<li>Examen "+ numeroExam +" - ("+ existingEntries[i].domaine +") : " +existingEntries[i].nbQuestionsCorrectes + "/"
                    +existingEntries[i].nbQuestionsExamen +"</li><br>");
            }
        }
    }); */


    });
});



