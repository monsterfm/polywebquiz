
// $.event.props.push('dataTransfer');
var $correctAnswer;
var $answerProposed;
 $( document ).ready(function() {

var $domain = $('#domain'); // pour changer le domaine
var $enonce = $('#enonce'); // pour changer la question
var $choices = $('#choices'); // pour changer les choix
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
            console.log(data);
                //generate random number between 1 and 10
               var randomNum = Math.floor((Math.random() * 10) + 1);
                $domain.text(data[randomNum].domaine);
                $enonce.text(data[randomNum].question);
                for(i in data[randomNum].choices){
                    // ch = $("<input id = "+"choices" + " type="+"checkbox"+ " name="+"choix1" +" value="+i+">");
                    $(choices).append('<span draggable ="true"><input draggable ="true" type="checkbox" name="something" id="'+i+'" />' + data[randomNum].choices[i] + '</span>');
                    

                }
                $correctAnswer=data[randomNum].Correctanswer;
                
    	}
        

    });
      $(choices).text(''); 
 });
});

/**
*
* Mise a jours des stats
*
*/
function updateStats(){

}

/**
*
* Affichage des stats courants
*
*/
function displayStats(){
    console.log("test");
}

document.dragend = function(ev) {
    ev.preventDefault();
    console.log($correctAnswer);
    console.log($answerProposed);
    document.getElementById("responsebox").style.borderColor="#FF0000" ;
    
}

/**
 *
 * drag and drop
 *
 */
document.allowDrop = function(ev) {
    ev.preventDefault();
}

document.drag= function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

document.drop= function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    $answerProposed = data;
    ev.target.appendChild(document.getElementById(data));
}




















































