$(function(){


    var correct = -2;
    var answer = -3;
    var nbCorrectAnswersTotal = 0;
    var totalCounter = 0;

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

 

        return false;
    }

 function getRandomQuestion() {
        $.get('/ajax/question',function(data) {
                correct = data.Correctanswer;
                    var counter = parseInt(sessionStorage.getItem('counter') || 1);

                    $('#domain').text(data.domaine);
                    $('#enonce').text(data.question);
                    for(i in data.choices){
                      $('#choixreponses').append('<li class="choix" draggable="true" value="'+ parseInt(i) +'"'+'>'+ data.choices[i]+'</li><br><br>');
                    }
                    $('.choix').each(function() {
                        this.addEventListener('dragstart', handleDragStart, false);
                    });
                    }
                    , 'json');
 }
              
     
              getRandomQuestion();

    $('#reponse').each(function() {
        this.addEventListener('dragenter', handleDragEnter, false);
        this.addEventListener('dragover', handleDragOver, false);
        this.addEventListener('dragleave', handleDragLeave, false);
        this.addEventListener('drop', handleDrop, false);
        this.addEventListener('dragend', handleDragEnd, false);
    });

    $('#suivantBtn').on('click',function(e) {
            counter = parseInt(sessionStorage.getItem('counter')) + 1;
            sessionStorage.setItem('counter', counter);
            updateCurrentScoreTag();
            $('#choixreponses').html('');
              getRandomQuestion();
            $('#reponse').html('');
            $('#reponse').css("border","5px solid black");

    });
    updateCurrentScoreTag();

    $('#retourBtn').on('click',function(e) {
            var nbCorrectAnswers = sessionStorage.getItem("nbCorrectAnswers");
            var Counter = sessionStorage.getItem("counter");
            if (localStorage.getItem("nbCorrectAnswersTotal") === null &&  localStorage.getItem("totalCounter") === null) {

                localStorage.setItem("nbCorrectAnswersTotal",parseInt(nbCorrectAnswers));
                localStorage.setItem("totalCounter", parseInt(Counter));
            }
            else{
                
                localStorage.setItem("nbCorrectAnswersTotal",parseInt(localStorage.getItem("nbCorrectAnswersTotal")) + parseInt(nbCorrectAnswers));
                localStorage.setItem("totalCounter",parseInt(localStorage.getItem("totalCounter")) + parseInt(Counter));
              
            }

    });


    function updateCurrentScoreTag(){
        var note = sessionStorage.getItem('nbCorrectAnswers');
        var counter = sessionStorage.getItem('counter');
         $('.currentScore').text('Note courante :' + note +' / ' + counter);
         return 0;
    }


});

