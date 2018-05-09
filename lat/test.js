window.onload = function() {

$("#icon__open").click(function() {
  $("#test").show();
  $("#icon__open").hide();
  $("#icon__close").show();
});
$("#icon__close").click(function() {
  $("#test").hide();
  $("#icon__open").show();
  $("#icon__close").hide();
});

$(window).resize(function(){
  if($(window).width() > 800){
      $("#test").show();
      $(".icon").hide();
   }
  else if ($(window).width() < 800){
      $("#test").hide();
      $(".icon").show();
      $("#icon__open").show();
      $("#icon__close").hide();
   }
});

(function() {
  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $('.hamburger-line').toggleClass('on');
    return $('.hamburger-bar').toggleClass('on');
  });

}).call(this);
}
