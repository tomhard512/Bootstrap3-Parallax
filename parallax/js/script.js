$(window).scroll(function() {
    // console.log('ok');
    var wScroll = $(this).scrollTop();

    $('h1').css({
        // 'transform': 'translate(100px, 0px)'
        // 'transform': 'translate(0px, 200px)'
        // 'transform': 'translate(0px, '+ wScroll/2 +'px)'
        'transform': 'translate(0px, '+ wScroll/2 +'%)'
    });
    // console.log(wScroll);
    $('.kotak').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
        });
});