$(document).ready(function(){

// 레이아웃 설정
// 마우스 오버시 해당 요소 모션 걸기
// 해당 요소 모션 직후 새로운 텍스트 모션 걸기
// 마우스 오버 시 해당 요소의 동영상 재생하기



  $('article').mouseenter(function(){

    // vid에 video 파일 참조
    let vid = $(this).find('video').get(0);
    // 동영상재생 위치를 처음으로 설정 
    vid.currentTime = 0;
    // 동영상 재생
    vid.play();

    $(this).stop().animate({
      width: '35%'
    }, 1000, function(){
      $(this).find('h3').stop().animate({
        right: '10px'
      }, 400);
      $(this).find('p').stop().animate({
        right: '10px'
      }, 800);
    });
    $(this).find('video').stop().animate({
      opacity: 0.9
    }, 1000);
  });
  $('article').mouseleave(function(){

        // vid에 video 파일 참조
        let vid = $(this).find('video').get(0);
        // 동영상 정지
        vid.pause();

    $(this).stop().animate({
      width: '12%'
    }, 700);
    $(this).find('video').stop().animate({
      opacity: 0
    }, 2000);
    $(this).find('h3').stop().animate({
      right: '-310px'
    }, 400);
    $(this).find('p').stop().animate({
      right: '-310px'
    }, 500);
  });




});



