$(document).ready(function(){

      // Tap funtion
      $('.btn li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
  
        var result = $(this).attr('data-alt')
        $('.tabs div').removeClass('active')
        $('#' + result).addClass('active')
      });

});