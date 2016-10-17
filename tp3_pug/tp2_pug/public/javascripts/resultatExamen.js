$(document).ready(function() {
      if(storage){
        var text = storage.getItem('termineExam');
        if(text) $('#termineExam').html(text);
      }
});
