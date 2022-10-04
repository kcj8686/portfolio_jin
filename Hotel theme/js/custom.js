$(document).ready(function(){

// 테마 변경
  $('header ul#gnb li:nth-child(6)').click(function(){
    $('header ul#gnb li:nth-child(5)').removeClass('active');
    $('header ul#gnb li:nth-child(6)').addClass('active');
    $('section').addClass('hidden');
    $('section').next().removeClass('hidden');
  });

  $('header ul#gnb li:nth-child(5)').click(function(){
    $('header ul#gnb li:nth-child(6)').removeClass('active');
    $('header ul#gnb li:nth-child(5)').addClass('active');
    $('section').removeClass('hidden');
    $('section').next().addClass('hidden');
  });

  


});