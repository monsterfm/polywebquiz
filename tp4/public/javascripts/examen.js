$(function(){

    /****
    ***Variables globales
    ***/
    var domainChoice = sessionStorage.getItem('domainChoice');
    var examNumber = sessionStorage.getItem('examNumber');

    var correct = -2;
    var answer = -3;

    var idQuestion;
    var correctAnswer;

    
    /****
    ***Fonctions du drag and drop
    ***/
    function handleDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', $(this).html());
        answer = $(this).attr('value');
        console.log(answer)
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
        e.preventDefault();
        }
        return false;
    }

    function handleDragEnter(e) {
        $(this).addClass('over');
    }

    function handleDragLeave(e) {
        $(this).removeClass('over');
    }

    function handleDragEnd(e) {
        $('.over').each(function() {
            $(this).removeClass('over');
        });
    }

    /****
    ***Fonction gerant l'action du drop et faisant la confirmation de la 
    ***bonne reponse avec le server
    ***/
    function handleDrop(e) {
        if(e.stopPropagation)
            e.stopPropagation();

        $('.over').each(function() {
            $(this).removeClass('over');
        });

        this.innerHTML = e.dataTransfer.getData('text/html');
        $('[draggable]').attr('draggable', false);

        var bodyRequest={
            reponse: answer,
            idToFind: idQuestion
        }
        var data = JSON.stringify(bodyRequest);
        $.ajax({
                type: 'post',
                url: "/ajax/getCorrectAnswer",
                data: data,
                dataType: "json",
                contentType: 'application/json',
                success: function(data){ 
                    if(data==true)
                        correctAnswer = true;
                    else
                        correctAnswer = false;
                },
                error: function(xhr, textStatus, error){
                    console.log(xhr.statusText);
                    console.log(textStatus);
                    console.log(error)
                    alert("something went wrong")
                },
                 async: false//synchrone pour attendre la confirmation que la reponse est bonne
            });

        if(correctAnswer) {
            var nbCorrectAnswers = parseInt(sessionStorage.getItem('nbCorrectAnswers') || 0) + 1;
            sessionStorage.setItem('nbCorrectAnswers', nbCorrectAnswers);
            //add style
            $(this).css("border","5px solid green");
        }
        else{
             $(this).css("border","5px solid red");
        }

        var counter = parseInt(sessionStorage.getItem('counter') || 1) + 1;
        sessionStorage.setItem('counter', counter);
        return false;
}
    
    /****
    ***Fonction gerant le click du bouton suivant
    ***/
    $('#suivantBtn').on('click',function(e) {
        if((sessionStorage.getItem('counter') <= sessionStorage.getItem('examNumber'))) {
            updateCurrentScoreTag();
            $('#choixreponses').html('');
             if(domainChoice =="JavaScript")
              getRandomQuestionJS();
            if(domainChoice =="HTML")
              getRandomQuestionHTML();
            if(domainChoice =="CSS")
              getRandomQuestionCSS();
            $('#reponse').html('');
            $('#reponse').css("border","5px solid black");
            e.preventDefault();
         }
    });


    /****
    ***Fonction gerant le click du bouton abandonner
    ***/
    $('#abandonnerBtn').click(function(){ 
        sessionStorage.setItem('nbCorrectAnswers', 0);
         sessionStorage.setItem('counter', parseInt(sessionStorage.getItem('examNumber')) + 1);
         $('#abandonForm').trigger('submit');
    });


    /****
    ***Fonction gerant le click du bouton retour
    ***/
    $('#retourBtn').click(function(){ 
        sessionStorage.setItem('nbCorrectAnswers', 0);
         sessionStorage.setItem('counter', parseInt(sessionStorage.getItem('examNumber')) + 1);
         $('#retourForm').trigger('submit');
    });
     

    /****
    ***Fonction gerant le click du bouton save, enregistre l'examen dans la BD
    ***avec l'element toComplete a true
    ***/
    $('#saveBtn').click(function(){ 
         var counter = sessionStorage.getItem('counter');
         var examNumber = sessionStorage.getItem('examNumber');
         var nbCorrectAnswers = sessionStorage.getItem('nbCorrectAnswers');
         var domainChoice = sessionStorage.getItem('domainChoice');
         
         var examenAajouter = {
            domainChoice: domainChoice,
            examNumber: examNumber,
            counter: counter-1,
            nbCorrectAnswers: nbCorrectAnswers,
            toComplete: true            
        };
        var data = JSON.stringify(examenAajouter);

        $.ajax({
          type: 'post',
          url: "/ajax/sauvegarderExamen",
          data: data,
          dataType: "json",
          contentType: 'application/json',
          success: function(data){ 
            
          },
          error: function(xhr, textStatus, error){
            console.log(xhr.statusText);
              console.log(textStatus);
              console.log(error)
          }
      });
    });
    
    /****
    ***Fonction selectionnant une question JS a travers une requete AJAX
    ***/
      function getRandomQuestionJS() {
            $.get('/ajax/questionJavaScript',function(data) {
                    idQuestion = data._id;
                    var counter = parseInt(sessionStorage.getItem('counter') || 1);
                    var examNumber = parseInt(sessionStorage.getItem('examNumber'));

                    $('#domain').text(data.domaine);
                    $('#enonce').text("Question "+ counter + " / " + examNumber + ": " + data.question);
                    
                    for(i in data.choices){
                      $('#choixreponses').append('<li class="choix" draggable="true" value="'+ parseInt(i) +'"'+'>'+ data.choices[i]+'</li><br><br>');
                    }
                    $('.choix').each(function() {
                        this.addEventListener('dragstart', handleDragStart, false);
                    });
                    }
                    , 'json');
     }


    /****
    ***Fonction selectionnant une question HTML a travers une requete AJAX
    ***/
      function getRandomQuestionHTML() {
        $.get('/ajax/questionHTML',function(data){
                idQuestion = data._id;
                    var counter = parseInt(sessionStorage.getItem('counter') || 1);
                    var examNumber = parseInt(sessionStorage.getItem('examNumber'));

                    $('#domain').text(data.domaine);
                    $('#enonce').text("Question "+ counter + " / " + examNumber + ": " + data.question);
                    for(i in data.choices){
                      $('#choixreponses').append('<li class="choix" draggable="true" value="'+ parseInt(i) +'"'+'>'+ data.choices[i]+'</li><br><br>');
                    }
                    $('.choix').each(function() {
                        this.addEventListener('dragstart', handleDragStart, false);
                    });
                    }
                    , 'json');
 }

    /****
    ***Fonction selectionnant une question CSS a travers une requete AJAX
    ***/
      function getRandomQuestionCSS() {
        $.get('/ajax/questionCSS',function(data) {
                idQuestion = data._id;
                    var counter = parseInt(sessionStorage.getItem('counter') || 1);
                    var examNumber = parseInt(sessionStorage.getItem('examNumber'));

                    $('#domain').text(data.domaine);
                    $('#enonce').text("Question "+ counter + " / " + examNumber + ": " + data.question);
                    for(i in data.choices){
                      $('#choixreponses').append('<li class="choix" draggable="true" value="'+ parseInt(i) +'"'+'>'+ data.choices[i]+'</li><br><br>');
                    }
                    $('.choix').each(function() {
                        this.addEventListener('dragstart', handleDragStart, false);
                    });
                    }
                    , 'json');
 }

    /****
    ***Fonction gerant le cas d'un examen a completer
    ***/
 function continueExamen() {
    $.get('/ajax/examenToContinue',function(data) {
        sessionStorage.clear();

        sessionStorage.setItem('domainChoice', data.domainChoice);
        sessionStorage.setItem('examNumber', data.examNumber);
        sessionStorage.setItem('nbCorrectAnswers', data.nbCorrectAnswers);
        sessionStorage.setItem('counter', data.counter);
        domainChoice = data.domainChoice;
        examNumber = data.examNumber;
        if(domainChoice =="JavaScript")
              getRandomQuestionJS();
        if(domainChoice =="HTML")
              getRandomQuestionHTML();
        if(domainChoice =="CSS")
              getRandomQuestionCSS();
    }, 'json');





 }

  /****
  ***Choix de la fonction a appleller en premier
  ***/
  if(domainChoice =="JavaScript")
    getRandomQuestionJS();
  if(domainChoice =="HTML")
    getRandomQuestionHTML();
  if(domainChoice =="CSS")
    getRandomQuestionCSS();
  if(domainChoice =="Continuer")
    continueExamen();

  /****
  ***Ajout de listener pour le drag and drop
  ***/
  $('#reponse').each(function() {
    this.addEventListener('dragenter', handleDragEnter, false);
    this.addEventListener('dragover', handleDragOver, false);
    this.addEventListener('dragleave', handleDragLeave, false);
    this.addEventListener('drop', handleDrop, false);
    this.addEventListener('dragend', handleDragEnd, false);
  });

  /****
  ***Fonction mettant a jours le score du joueur
  ***/
  function updateCurrentScoreTag(){
    var score = sessionStorage.getItem('nbCorrectAnswers');
    var examNumber = sessionStorage.getItem('examNumber');
    $('.currentScore').text('Note courante :' + score +' / ' + examNumber);
  }

});

