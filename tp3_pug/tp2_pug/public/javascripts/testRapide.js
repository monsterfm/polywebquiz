
// $.event.props.push('dataTransfer');
var $correctAnswer;//L'id de la bonne reponse
var $answerProposed = -1;//L'id de la reponse depose dans le carre
var $totalNumberAnswer =0;//Nombre total de questions rapide fait
var $numberGoodAnswer =0;//Nombre de bonne reponses
 $( document ).ready(function() {

var $domain = $('#domain'); // pour changer le domaine
var $enonce = $('#enonce'); // pour changer la question
var $choices = $('#choices'); // pour changer les choix

/**
 *
 * first question implementation, avant que l'utilisateur appui sur suivant
 *
 */
$( function() {$.ajax({ type:'GET',
        url: 'questions.JSON',
        dataType:'json',
        success: function(data){
            console.log(data);
                //generate random number between 1 and 10
               var randomNum = Math.floor((Math.random() * 10) + 1);
                $domain.text(data[randomNum].domaine);
                $enonce.text(data[randomNum].question);
                for(i in data[randomNum].choices){
                    // ch = $("<input id = "+"choices" + " type="+"checkbox"+ " name="+"choix1" +" value="+i+">");
                    $(choices).append('<p draggable="true" ondragstart="drag(event)" ondragend="dragend(event)" type="button" name="something" id="'+i+'" >' + data[randomNum].choices[i] + '</p>');
                }
                $correctAnswer=data[randomNum].Correctanswer;//set l'id de la bonne reponse
                document.getElementById("currentScore").innerHTML="Score Courant:0%";//Affiche score courant a 0%
        }});
});

/**
 *
 * next question implementation
 *
 */

$('#suivant').click(function(){
    $.ajax({
    	type:'GET',
    	url: 'questions.JSON',
    	dataType:'json',
    	success: function(data){
            $answerProposed = -1;//remet l'id de answer proposed pour reactiver le drag and drop
            console.log(data);
                //generate random number between 1 and 10
               var randomNum = Math.floor((Math.random() * 10) + 1);
                $domain.text(data[randomNum].domaine);
                $enonce.text(data[randomNum].question);
                for(i in data[randomNum].choices){
                    // ch = $("<input id = "+"choices" + " type="+"checkbox"+ " name="+"choix1" +" value="+i+">");
                    $(choices).append('<p draggable="true" ondragstart="drag(event)" ondragend="dragend(event)" type="button" name="something" id="'+i+'" >' + data[randomNum].choices[i] + '</p>');
                }
                $correctAnswer=data[randomNum].Correctanswer;
                
    	}
        

    });
      $(choices).text('');//vide choices pour afficher que les prochain choix de reponse
      $(responsebox).text('');//vide la boite de reponse 
      document.getElementById("responsebox").style.borderColor="black" ;//Remet la boite de reponse en noir
 });
});

/**
 *
 * evenement dragend, se declenche quand l'element est relache
 *
 */
document.dragend = function(ev) {
    ev.preventDefault();
    console.log($correctAnswer);
    console.log($answerProposed);
    $totalNumberAnswer++;
    //Verifie si la reponse est bonne
    if(parseInt($correctAnswer) == $answerProposed){
        document.getElementById("responsebox").style.borderColor="green";//Met la boite de reponse en vert
        $numberGoodAnswer++;
    }else{
        document.getElementById("responsebox").style.borderColor="#FF0000";//Met la boite de reponse en rouge
    }
    document.getElementById("currentScore").innerHTML="Score Courant:" + (($numberGoodAnswer/$totalNumberAnswer)*100) + "%";//Affiche le score courant
    
    
}

/**
 *
 * allowDrop pour autoriser le drop
 *
 */
document.allowDrop = function(ev) {
    ev.preventDefault();
    
}

/**
 *
 * drag
 *
 */
document.drag= function(ev) {
    //Verifie si aucune reponse n'a deja ete depose dans la boite, si une repose a deja ete depose, le drag n'est plus possible
    if($answerProposed == -1){
        ev.dataTransfer.setData("text", ev.target.id);
    }
    
}

/**
 *
 * drop
 *
 */
document.drop= function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    $answerProposed = data;//set la variable d'apres l'id de la reponse depose dans la boite
    ev.target.appendChild(document.getElementById(data));
}




















































