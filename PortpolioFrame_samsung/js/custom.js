$(document).ready(function(){

// 최상단으로 가는 버튼
$('#goTop').on('click', function(){ 
  $("html, body").animate({ scrollTop : 0 }, "400") ;
  return false; 
});
// 최하단으로 가는 버튼
$('#goBottom').on('click', function(){ 
  $("html, body").animate({scrollTop : $(document).height() }, "400");
  return false; 
})
// 팝업창 따라다니게 하기
  let currentPosition = parseInt($("#pop_nav").css("top"));
  $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    $("#pop_nav").stop().animate({"top":position+currentPosition+"px"},1000);
  });



  
});