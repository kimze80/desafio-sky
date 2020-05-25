
$(document).ready(function(){
  $('.nav li').click(function() {
    $('.nav li.active').removeClass('active');
    $(this).addClass('active');
  });
});
