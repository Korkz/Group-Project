$(document).ready(function(){
  $("#Intro").click(function(){
    $("#IntroP").toggle();
  });
  $("#Instructions").click(function(){
    $("#InstructionsP").toggle();
  });

  $("#Intro").mouseenter(function(){
    $("#Intro").css('color':'blue');
  });
  $("#Intro").mouseleave(function(){
    $("#Intro").css('color':'black');
  });

  $("#Instructions").mouseenter(function(){
    $("#Intro").css('color':'blue');
  });
  $("#Instructions").mouseleave(function(){
    $("#Intro").css('color':'black');
  });
});
