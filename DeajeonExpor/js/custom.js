$(document).ready(function(){

  $('div.header nav ul.gnb li').mouseenter(function(){
    $(this).children('ul').stop().slideDown();
  });
  $('div.header nav ul.gnb li').mouseleave(function(){
    $(this).children('ul').stop().slideUp();
  });


  setInterval(function(){
    $('main figure ul.hero').animate({
      left: '-1280px'
    }, 600, function(){
      $('main figure ul.hero').append($('main figure ul.hero li').eq(0));
      $('main figure ul.hero').css({left: 0})
    })
  },3000);



});