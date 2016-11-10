$(function() {

    /****
    ***Variables globales
    ***/
    var counter = sessionStorage.getItem('counter');
    var examNumber = sessionStorage.getItem('examNumber');
    var nbCorrectAnswers = sessionStorage.getItem('nbCorrectAnswers');
    var noteSur100 = (nbCorrectAnswers*100)/examNumber;
    var resultatMsg =  displayResultScoreMsg(noteSur100)
    var domainChoice = sessionStorage.getItem('domainChoice');
    addEntry();

    /****
    ***Fonction gerant le cas ou un examen est termnine
    ***/
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

    /****
    ***Fonction enregistrant les resultats de l'examen dans la BD
    ***/
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
    }


        
    
});