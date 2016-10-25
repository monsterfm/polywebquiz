$(function(){


    var bonneReponse = -2;
    var reponseChoisie = -3;

    function handleDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', $(this).html());
        //reponseChoisie = $(this).data('value');
        reponseChoisie = $(this).attr('value');
        console.log(reponseChoisie)
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

        if(reponseChoisie == bonneReponse) {
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
                bonneReponse = data.Correctanswer;
                    var counter = parseInt(sessionStorage.getItem('counter') || 1);

                    $('#domain').text(data.domaine);
                    $('#enonce').text(data.question);
                    //$('#choixreponses').html('');
                    for(i in data.choices){
                        //var j = parseInt(i) + 1 ;
                      $('#choixreponses').append('<li class="choix" draggable="true" value="'+ parseInt(i) +'"'+'>'+ data.choices[i]+'</li><br><br>');
                    }
                    $('.choix').each(function() {
                        this.addEventListener('dragstart', handleDragStart, false);
                    });
                    }
                    , 'json');
 }
              
     
              getRandomQuestion();

    //drag & drop
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
    function updateCurrentScoreTag(){
        var note = sessionStorage.getItem('nbCorrectAnswers');
        var counter = sessionStorage.getItem('counter');
         $('.currentScore').text('Note courante :' + note +' / ' + counter);
         return 0;
    }


});

