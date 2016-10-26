$(function(){

    var domainChoice = sessionStorage.getItem('domainChoice');
    var examNumber = sessionStorage.getItem('examNumber');

    var correct = -2;
    var answer = -3;

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

    function handleDrop(e) {
        if(e.stopPropagation)
            e.stopPropagation();

        $('.over').each(function() {
            $(this).removeClass('over');
        });

        this.innerHTML = e.dataTransfer.getData('text/html');
        $('[draggable]').attr('draggable', false);

        if(answer == correct) {
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

    $('#abandonnerBtn').click(function(){ 
        sessionStorage.setItem('nbCorrectAnswers', 0);
         sessionStorage.setItem('counter', parseInt(sessionStorage.getItem('examNumber')) + 1);
         $('#abandonForm').trigger('submit');
    });
     $('#retourBtn').click(function(){ 
        sessionStorage.setItem('nbCorrectAnswers', 0);
         sessionStorage.setItem('counter', parseInt(sessionStorage.getItem('examNumber')) + 1);
         $('#retourForm').trigger('submit');
    });
    function getRandomQuestionJS() {
            $.get('/ajax/questionJavaScript',function(data) {
                    correct = data.Correctanswer;
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

     function getRandomQuestionHTML() {
        $.get('/ajax/questionHTML',function(data){

                correct = data.Correctanswer;
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
 function getRandomQuestionCSS() {
        $.get('/ajax/questionCSS',function(data) {
                correct = data.Correctanswer;
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
              
     if(domainChoice =="JavaScript")
              getRandomQuestionJS();
    if(domainChoice =="HTML")
              getRandomQuestionHTML();
    if(domainChoice =="CSS")
              getRandomQuestionCSS();

    $('#reponse').each(function() {
        this.addEventListener('dragenter', handleDragEnter, false);
        this.addEventListener('dragover', handleDragOver, false);
        this.addEventListener('dragleave', handleDragLeave, false);
        this.addEventListener('drop', handleDrop, false);
        this.addEventListener('dragend', handleDragEnd, false);
    });

    
    function updateCurrentScoreTag(){
        var score = sessionStorage.getItem('nbCorrectAnswers');
        var examNumber = sessionStorage.getItem('examNumber');
         $('.currentScore').text('Note courante :' + score +' / ' + examNumber);
    }




});

