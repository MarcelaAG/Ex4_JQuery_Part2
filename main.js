$(document).ready(function(){
   let text = $('#texte');
   let green = $('#green');
   let red = $('#red');
   let blue = $('#blue');

    $(green).on('click', function(){
        $(text).css('color', 'green');
      $(red).on('click', function(){
         $(text).css('color', 'red');
      });
         $(blue).on('click', function(){
            $(text).css('color', 'blue');
         });   
   });

});



