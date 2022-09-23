$(document).ready(function(){

// window 높이값을 변수 ht에 저장
let ht = $(window).height();
// console.log(ht);
// section의 높이값을 window 높이값으로 지정
$('section').height(ht);

// 브라우저가 resize가 되면...
$(window).resize(function(){
let ht = $(window).height();
// console.log(ht);
$('section').height(ht);
});


// 주 메뉴 클릭시 자동으로 해당 section으로 이동
$('nav ul li').click(function(e){
  e.preventDefault();

  // ht에 window 높이값 저장
  let ht = $(window).height();
  // 변수 i에 현재 클릭한 li 순서 값을 저장
  let i = $(this).index();
  // console.log(i);
  // 브라우저의 높이값 * 순서값 = 현재 박스의 위치값
  let nowTop = i*ht;
  // console.log(nowTop);
  // 해당 스크롤의 위치값으로 문서를 이동
  $('html, body').stop().animate({
    scrollTop : nowTop
  },1400);
});

// 스크롤 될떄마다 해당 메뉴 활성화
$(window).scroll(function(){
  // ht에 window 높이값 저장
  let ht = $(window).height();
  // scroll에 현재 문서가 스크롤 된 거리 저장
  let scroll = $(window).scrollTop();
  // console.log(scroll);
  for (let i = 0; i < 5; i++) {
    if (scroll >= ht*i && scroll < ht*(i+1)) {
      $('nav ul li').removeClass();
      $('nav ul li').eq(i).addClass('on');
    }
  }
});


// 마우스 휠의 움직임에 따라 화면 스크롤 시키기
$('section').mousewheel(function(event, delta) {
  // 마우스 휠을 올렸을 때...
  if (delta > 0 ) {
    // 변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().stop() 위치 저장
    let prev = $(this).prev().offset().top;
    // 문서 전체를 prev에 저장된 위치로 이동
    $('html, body').stop().animate({
      scrollTop: prev
    }, 1400);
  }
});
$('section').mousewheel(function(event, delta) {
  // 마우스 휠을 내렸을 때...
  if (delta < 0 ) {
    // 변수 next 현재 휠을 움직인 section에서 이전 section의 offset().stop() 위치 저장
    let next = $(this).next().offset().top;
    // 문서 전체를 prev에 저장된 위치로 이동
    $('html, body').stop().animate({
      scrollTop: next
    }, 1400);
  }
});


// 스크롤시 섹션 영역의 애니메이션
$(window).scroll(function(){
  let top = $(document).scrollTop();
  console.log(top);

  if (top >= 1200) {

// 카운트
$('.count-num').each(function() { 
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo 
  },
  {
    duration: 3000, 
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() { 
      $this.text(this.countNum);
    }
  });  
});

// 원형바
$(function(){
  $('.chart').easyPieChart({
    size: 160,
    barColor: '#ffffffe6',
    scaleLength: 0,
    lineWidth: 15,
    trackColor: '#ffffff26',
    lineCap: 'round',
    animate: 3000,
  });
})
  } else {

  }
});










});