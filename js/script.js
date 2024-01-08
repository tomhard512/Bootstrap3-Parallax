// (function() {

// })

// event pada saat link diklik
$('.page-scroll').on('click', function(e) {

    // console.log('ok')

    // ambil isi href
    var tujuan = $(this).attr('href');
    // console.log(href);

    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // console.log($('body').scrollTop());
    // console.log(elemenTujuan.offset().top);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
    // $('html, body').scrollTop(elemenTujuan.offset().top);


    e.preventDefault();
});

// parallax
// about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul')
    $('.pKanan').addClass('pMuncul')
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // portfolio 
    // if( wScroll > 1000 ) {
    if( wScroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
                // $('.portfolio .thumbnail').addClass('muncul');
                // console.log('oke');
            }, 300 * (i+1));
        });
        
        
        // console.log('oke');
    }

    // console.log(wScroll);
});