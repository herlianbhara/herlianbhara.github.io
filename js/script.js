$('.page-scroll').on('click', function(event) {
    event.preventDefault();
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    $('body,html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1000, 'swing');
});