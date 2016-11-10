$(function(){


    var correct = -2;
    var idQuestion;
    var answer = -3;
    var nbCorrectAnswersTotal = 0;
    var totalCounter = 0;
    var correctAnswer;

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
                 async: false //IMPORTANT ICI
            });

        if(correctAnswer == true) {
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
                //correct = data.Correctanswer;
                idQuestion = data._id;
                console.log(idQuestion)
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
            /*if (localStorage.getItem("nbCorrectAnswersTotal") === null &&  localStorage.getItem("totalCounter") === null) {

                localStorage.setItem("nbCorrectAnswersTotal",parseInt(nbCorrectAnswers));
                localStorage.setItem("totalCounter", parseInt(Counter));
            }
            else{
                
                localStorage.setItem("nbCorrectAnswersTotal",parseInt(localStorage.getItem("nbCorrectAnswersTotal")) + parseInt(nbCorrectAnswers));
                localStorage.setItem("totalCounter",parseInt(localStorage.getItem("totalCounter")) + parseInt(Counter));
              
            }*/
            var counters = {
                countCorrectAnswer: nbCorrectAnswers,
                countTotal: Counter
            }
            var data = JSON.stringify(counters);
            $.ajax({
                type: 'post',
                url: "/ajax/saveInDb",
                data: data,
                dataType: "json",
                contentType: 'application/json',
                success: function(data){ 
                    $('.currentScore').text('Note courante :' + data.note +' / ' + data.counter);
                },
                error: function(xhr, textStatus, error){
                    console.log(xhr.statusText);
                    console.log(textStatus);
                    console.log(error)
                    alert("something went wrong")
                },
                 async: false //IMPORTANT ICI
            });

    });


    function updateCurrentScoreTag(){
        var note = sessionStorage.getItem('nbCorrectAnswers');
        var counter = sessionStorage.getItem('counter');
         $('.currentScore').text('Note courante :' + note +' / ' + counter);
         return 0;

    }


});

