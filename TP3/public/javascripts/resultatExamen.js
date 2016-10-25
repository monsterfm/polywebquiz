$(function() {
    //nbre de questions effectuées
    var counter = sessionStorage.getItem('counter');
    var examNumber = sessionStorage.getItem('examNumber');
    var nbCorrectAnswers = sessionStorage.getItem('nbCorrectAnswers');
    var noteSur100 = (nbCorrectAnswers*100)/examNumber;
    var resultatMsg =  displayResultScoreMsg(noteSur100)
    var domainChoice = sessionStorage.getItem('domainChoice');
    addEntry();

    $('#termineExam').html(resultatMsg);
    //est ce qu'on affiche le resultat % au nbre de questions effectuées ou le nbre de questions selectionnnes au depart?
    //affichage des 4 messages possibles
    function displayResultScoreMsg(note){
      if(note>= 0 && note <25)
        resultatMsg = " Très faible </br> Note finale: " + note +" %";
      if(note>= 25 && note < 50)
       resultatMsg = " Faible </br> Note finale: " + note +" %";
      
      if(note>= 50 && note < 75)
        resultatMsg = " Bien </br> Note finale: "+ note +" %";       
      
      if(note>= 75 && note <= 100)
        resultatMsg= " Excellent </br> Note finale: " + note +" %";
      

  return resultatMsg ;
    }
    function addEntry() {
        // Parse any JSON previously stored in allEntries
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
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
        return 0;
    }


        
    
});