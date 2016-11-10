$(function() {

    var counter = sessionStorage.getItem('counter');
    var examNumber = sessionStorage.getItem('examNumber');
    var nbCorrectAnswers = sessionStorage.getItem('nbCorrectAnswers');
    var noteSur100 = (nbCorrectAnswers*100)/examNumber;
    var resultatMsg =  displayResultScoreMsg(noteSur100)
    var domainChoice = sessionStorage.getItem('domainChoice');
    addEntry();

    $('#termineExam').html(resultatMsg);
    function displayResultScoreMsg(note){
      if(note>= 0 && note <25)
        resultatMsg = " Très faible </br> Note finale: " + note.toFixed(2) +" %";
      if(note>= 25 && note < 50)
       resultatMsg = " Faible </br> Note finale: " + note.toFixed(2) +" %";
      
      if(note>= 50 && note < 75)
        resultatMsg = " Bien </br> Note finale: "+ note.toFixed(2) +" %";       
      
      if(note>= 75 && note <= 100)
        resultatMsg= " Excellent </br> Note finale: " + note.toFixed(2) +" %";
      

  return resultatMsg ;
    }
    function addEntry() {

      var examenAajouter = {
            domainChoice: domainChoice,
            examNumber: examNumber,//TODO A CHANGER
            counter: counter-1,
            nbCorrectAnswers: nbCorrectAnswers,
            toComplete: false
        };
        var data = JSON.stringify(examenAajouter);

        $.ajax({
          type: 'post',
          url: "/ajax/sauvegarderExamen",
          data: data,
          dataType: "json",
          contentType: 'application/json',
          success: function(data){ 
            alert("Votre examen a été bien ajoutée à la BD");
            
          },
          error: function(xhr, textStatus, error){
            console.log(xhr.statusText);
              console.log(textStatus);
              console.log(error)
              alert("something went wrong")
          }
      });
        // Parse any JSON previously stored in allEntries
        /*var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) 
            existingEntries = [];
        var entry = {domaine: domainChoice,
                    nbQuestionsRep: counter-1,
                     nbQuestionsExamen: examNumber,
                     nbQuestionsCorrectes: nbCorrectAnswers,
                     note: noteSur100};
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.push(entry);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        return 0;*/
    }


        
    
});