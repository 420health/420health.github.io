$(function () {
    //js for search box
    $('button.search-top-bt').click(function () {
        $('.topsearch').toggleClass('show');
    });

    $('[data-toggle="tooltip"]').tooltip();

    // // find original navigation bar position
    // var navPos = $navBar.offset().top;
    $(window).scroll(function (event) {
        /* Act on the event */
        var scrollPos = $(window).scrollTop(),
            nav1 = $('.ht-header');
        nav3 = $('.ht-headerv3');
        nav4 = $('.ht-headerv4');
        if (scrollPos > 1300) {
            nav1.addClass('fixed-nav1');
            nav3.addClass('fixed-nav3');
            nav4.addClass('fixed-nav4');

        } else {
            nav1.removeClass('fixed-nav1');
            nav3.removeClass('fixed-nav3');
            nav4.removeClass('fixed-nav4');
        }
    });
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 20000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });
});