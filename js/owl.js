$('.global-carousel').each(function() {
    $(this).owlCarousel({
        nav: eval($(this).data('nav')),
        dots: eval($(this).data('dots')),
        loop: eval($(this).data('loop')),
        margin: $(this).data('margin'),
        center: eval($(this).data('center')),
        dotsSpeed: $(this).data('speed'),
        autoplay: eval($(this).data('autoplay')),
        transitionStyle: $(this).data('transition'),
        animateOut: $(this).data('animate-out'),
        animateIn: $(this).data('animate-in'),
        autoplayTimeout: $(this).attr('data-timeout'),
        lazyLoad: true,
        autoWidth: eval($(this).attr('data-autowidth')),
        autoHeight: eval($(this).attr('data-autoheight')),
        // navText: ["<i class='fa fa-chevron-left'></i><i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: $(this).data('slide-sm'),
            },
            600: {
                items: $(this).data('slide-md'),
            },
            1000: {
                items: $(this).data('slide')
            }
        }
    });
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});