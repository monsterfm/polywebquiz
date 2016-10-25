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
    });
    /**
     *
     * reset button
     *
     */
    

    $('#resetBtn').click(function(){
        //localStorage.clear();
        //updateStats();
    }); 
        
    
});