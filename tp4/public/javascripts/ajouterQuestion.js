$(function(){
    

	//ajouter un autre choix de reponses
    $('#autreOption').click(function() {
        var numItems = $('#reponses > input').length 
        $('#reponses').append('<br/>' +
            'choix de réponse' + parseInt(numItems+1) + '<br/>' +
            '<input id="reponse'+numItems+'"  type="text" required />')
    });


    //vider btn
   $('#viderBtn').click(function(e) {
       
        e.preventDefault();
         $.ajax({
            type: "delete",
            url: "ajax/delete",
            success:function(data){
                alert("la bd a été bien vidée")
            },

            error: function(xhr, textStatus, error){
                    console.log(xhr.statusText);
                    console.log(textStatus);
                    console.log(error)
                    alert("something went wrong")
                }

            
        });
    });
  

    //ajouter question
     $('#ajouterForm').on('submit',function(e) {
     	//donnees de la question entrees par utilisateur
     	var questionAajouter = {
            domaine: $('#domaine').val(),
            question: $('#Question').val(),
            Correctanswer:(parseInt($('#reponseCorrect').val()) -1).toString(),
            
        };


        questionAajouter.choices = [];
    	$('#reponses > input').each(function() {
            questionAajouter.choices.push($(this).val());
    	});
    	console.log(questionAajouter.choices)
    	console.log(questionAajouter)

    	
    	
        var numItems = $('#reponses > input').length 
        console.log(numItems)
        var inputRepCorrecte =$('#reponseCorrect').val();

        if(parseInt(inputRepCorrecte)>parseInt(numItems) || parseInt(inputRepCorrecte)<1 || inputRepCorrecte == ""){
        	alert('le numéro de la bonne réponse ne correspond pas au nombres de choix de réponses entré!')
        	e.preventDefault();
        }
        else{
        	var data = JSON.stringify(questionAajouter);
        	console.log(data);
	    	 $.ajax({
		  		type: 'post',
		  		url: "/ajax/ajouterQuestion",
		  		data: data,
		  		dataType: "json",
		  		contentType: 'application/json',
		  		success: function(data){ 
		  			alert("Votre question a été bien ajoutée à la BD");
		  			
		  		},
		  		error: function(xhr, textStatus, error){
		  		 	console.log(xhr.statusText);
      				console.log(textStatus);
      				console.log(error)
      				alert("something went wrong")
		  		}
			});
	   		e.preventDefault();
        }
    });
});