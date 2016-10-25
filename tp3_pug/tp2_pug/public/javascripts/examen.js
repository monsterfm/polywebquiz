    $(function(){
        var domaine = sessionStorage.getItem('domaine');
        var bonneReponse = -1;
        var reponseChoisie = -2;
        var $domain = $('#domain'); // pour changer le domaine
        var $enonce = $('#enonce'); // pour changer la question
        var $choices = $('#choices'); // pour changer les choix
        var $suivantExamenBtn = $('#suivantExamen');
        var $abandonBtn = $('#abandonBtn');

        function handleDragStart(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', $(this).parent().html());

            reponseChoisie = $(this).data('value');
        }
        function handleDragOver(e) {
            e.preventDefault();
            return false;
        }
        function handleDragEnter(e) {
            $(this).addClass('drop-container-over');
        }
        function handleDragLeave(e) {
            $(this).removeClass('drop-container-over');
        }
        function handleDragEnd(e) {
            $('.drop-container-over').each(function() {
                $(this).removeClass('drop-container-over');
            });
        }
        function handleDrop(e) {
            e.stopPropagation();
            $('.drop-container-over').each(function() {
                $(this).removeClass('drop-container-over');
            });
            // On place le html de la réponse dans le container
            $(this).html(e.dataTransfer.getData('text/html'));

            // On ne peut plus drag n drop les autres réponses
            $('[draggable]').attr('draggable', false);

            //compteur réponse
            if(reponseChoisie == bonneReponse) {
                var nbBonneReponses = parseInt(sessionStorage.getItem('nbBonnesReponses') || 0) + 1;
                sessionStorage.setItem('nbBonnesReponses', nbBonneReponses);
            }

            // On peut passer à la question suivante

            //on incrémente le compteur
            var compteurQuestion = parseInt(sessionStorage.getItem('compteurQuestion') || 1) + 1;
            sessionStorage.setItem('compteurQuestion', compteurQuestion);

            // On modifie le texte du bouton si on a terminé l'examen
            if(compteurQuestion > sessionStorage.getItem('nbQuestions')) {
                $suivantExamenBtn.attr('value', 'Voir le résultat');
                alert("examen fini")
            }

            $suivantExamenBtn.attr('disabled', false);

            return false;
        }


        // Effectue la requête ajax pour récupérer une question au hasard et l'affiche
        function getRandomQuestionJS() {
            $.get('/ajax/questionJavaScript',function(data) {
                    bonneReponse = data.bonne_reponse;
                    var compteurQuestion = parseInt(sessionStorage.getItem('compteurQuestion') || 1);

                    $domain.text(data.domaine);
                    $enonce.text(data.question);
                    $('#choices').html('');
                    // for(i in data.choices){
                    //   $(choices).append('<span class= "choice"><input draggable ="true" type="checkbox" data-value="' + i + '"id="'+ i +'" />' + data.choices[i] + '</span>');
                    //   } 
                    $.each(data.choices, function(i, reponse) {
                        $('#reponses').append('<li><div id="reponse' + i + '" class="reponse" draggable="true" data-value="' + i + '"></div></li>');
                        $('#reponses' + i).text(reponse);
                    });
                    $('.reponse').each(function() {
                        this.addEventListener('dragstart', handleDragStart, false);
                    });
                    }
                    , 'json');
     }
              
            if(domaine =="JavaScript")
              getRandomQuestionJS();

        //drag & drop
        $('.reponse-container').each(function() {
            this.addEventListener('dragenter', handleDragEnter, false);
            this.addEventListener('dragover', handleDragOver, false);
            this.addEventListener('dragleave', handleDragLeave, false);
            this.addEventListener('drop', handleDrop, false);
            this.addEventListener('dragend', handleDragEnd, false);
        });
       //stackoverflow.com/questions/26746982/jquery-click-in-submit-button
        $('#choices').on('submit', function(event) {
            // on charge une autre question sauf si le nombre de question max est atteint
            if((sessionStorage.getItem('compteurQuestion') <= sessionStorage.getItem('nbQuestions'))) {
                getRandomQuestionJS();

                // reset du formulaire
                $suivantExamenBtn.prop('disabled', 'disabled');
                $('.reponse-container')
                    .html('')
                    .removeClass('bonne-reponse-container')
                    .removeClass('mauvaise-reponse-container');

                // on empêche le submit qui mènerait vers la page de résultats
                event.preventDefault();
            }

            // sinon on submit et on arrive à la page de résultats
        });

        $('#abandonBtn').on('click', function(event) { //reset le nb de bonnes réponses à 0 et envoie la page de résultats
            sessionStorage.setItem('nbBonnesReponses', 0);
            sessionStorage.setItem('compteurQuestion', sessionStorage.getItem('nbQuestions') + 1);
            $('#choices').trigger('submit');
        });
 });