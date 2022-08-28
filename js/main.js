"use strict";
// Jquery
$(document).ready(function(){
  // nav#gnb
  $(".gnb__main > li").hover(function(){  
    $(this).find(".gnb__sub").stop().slideDown(200);
    },function(){
    $(this).find(".gnb__sub").stop().slideUp(200);
  });
  
  // slide
  function slidemove(){
    let smv=$(".slide__box > div").height();
    $(".slide__box").animate({
      top:-smv
    },function(){
      $(".slide__box > div:first").appendTo(".slide__box");
      $(".slide__box").css("top",0);
    });    
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $(".notice__box > ul > li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });

});