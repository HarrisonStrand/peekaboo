
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
    $("#paragraph-showing").Toggle();
    $("#paragraph-hidden").Toggle();
  });
});