$(document).ready(function () {
    //游標移到開啟下拉選單
    $('.dropdown').mouseenter(function (e) { 
        e.preventDefault();
        $('.dropdown_open').slideDown();
    });
    //游標離開關閉下拉選單
    $('.dropdown_open').mouseleave(function (e) { 
        e.preventDefault();
        $('.dropdown_open').slideUp();
    });

    $('.top a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },1000);
    });

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'disableScrolling':true,
      'positionFromTop':200
    });

    

});