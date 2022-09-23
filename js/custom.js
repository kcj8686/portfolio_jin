$(document).ready(function(){

  
// 마우스 드래그시 메인 이동
  $('section.circle ul').draggable({axis: "x"});


// 마우스 휠시 메인 이동
  $(function() {
    $(window).on('scroll', function(e) {
      scrollWhell = $(window).scrollTop();
      $("section.circle ul").css("left", -scrollWhell);
      // $("section.circle ul").css("left", scrollTop('500px'));
      e.preventDefault();
      // document.documentElement.style.overflowY = "hidden";
      // document.documentElement.style.overflowY = "auto";
    });
  });


// 주 메뉴 클릭시 메인이동
$('main nav ul li').click(function(e){
  e.preventDefault();
  let ht = $('main').height();
  let i = $(this).index();
  console.log(i);
  let nowTop = i*ht;
  console.log(nowTop);
  $('html, body').stop().animate({
    scrollTop : nowTop
  },1400);
});


// 스크롤 될떄마다 해당 메뉴 활성화
$('main').scroll(function(){
  // ht에 window 높이값 저장
  let ht = $('main').height();
  // scroll에 현재 문서가 스크롤 된 거리 저장
  let scroll = $('main').scrollTop();
  // console.log(scroll);
  for (let i = 0; i < 3; i++) {
    if (scroll >= ht*i && scroll < ht*(i+1)) {
      $('main nav ul li').removeClass();
      $('main nav ul li').eq(i).addClass('on');
    }
  }
});




});