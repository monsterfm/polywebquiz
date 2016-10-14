
$( document ).ready(function() {


var $abandonBtn = $('#abandonBtn');
$abandonBtn.click(function(){

        //e.preventDefault();
        // $.get('resultatExamen', null, function(data){

        // var $data = $(data);
        // console.log(data);
        // console.log($data.find('#termineExam').html());
        // $data.find('#termineExam').text("heyy");
        // //$('#termineExam').text("sorry");
        // console.log($data.find('#termineExam').html());
        // console.log(data);
        if(storage){
        var msg_abandon_Exam = " Vous avez choisi d'abandonner l'examen! Examen Échoué ! </br> Note finale: 0/100";
        storage.setItem('termineExam', msg_abandon_Exam);
      }

    });
     
  



    // $.ajax({
    // url: '../views/resultatExamen.pug',  //Pass URL here 
    // type: "GET", //Also use GET method
    // success: function(data) {
    //     console.log(data);
    //      $(data).find('#termineExam').html();
    //     $('#termineExam').text("sorry");
    // }
//});
   // });

});

    //redirect to resultat examen page
   // $(location).attr('href','/resultatExamen');

    // $abandonBtn.on('click', function(e){ //step 1
    //     console.log("hahah");
    //     e.preventDefault(); //prevent default action, step2
    //     var url = 'resultatExamen.html'; //get the url, step 2

    //     $.ajax({ //step 3
    //         url: url,
    //         type:'POST',
    //         // dataType:'Text',
    //         //your other options
    //         success: function(){ //on success
    //             $msgExam.html("SORRY!"); //update your div, step 4
    //         }
    //     });
    //  });



/**
 *
 * when we select exam and technology to start an exam (move code to tabBord.js)
 *
 */


      // bind change event to select
      // $('#dynamic_select').on('change', function () {
      //     var url = $(this).val(); // get selected value
      //     if (url) { // require a URL
      //         window.location = url; // redirect
      //     }
      //     return false;
      // });
  




