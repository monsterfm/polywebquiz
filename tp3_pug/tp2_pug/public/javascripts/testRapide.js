
// $.event.props.push('dataTransfer');
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
    	url: 'questions.json',
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

                
    	}
        

    });
      $(choices).text(''); 
 });


/**
 *
 * drag and drop
 *
 */
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

});


















































