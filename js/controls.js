$(function () {
    // js for isotope
    $(".grid").isotope({
        itemSelector: '.pro-it',
        layoutMode: 'fitRows',
    });
    $('ul.menu-filter li').click(function () {
        $('ul.menu-filter li').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $(".grid").isotope({
            filter: selector,
            animationOption: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
    // masonry layout
    $('.grid-man').masonry({
        // options...
        itemSelector: '.grid-item-man',
        // columnWidth: 200
    });
    //js for quantiity input
    //$(".numbers-row").append('<div class="inc button">+</div><div class="dec button">-</div>');
    $(".numbers-row .minus, .numbers-row .plus").on("click", function () {
        var $button = $(this);
        var input = $("#french-hens");
        var oldValue = input.val();
        var newVal = oldValue;
        if ($button.val() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        input.val(newVal);
    });

    $('#readmore').on('hide.bs.collapse', function () {
        $(".smore a").text("Show More");
    });
    $('#readmore').on('show.bs.collapse', function () {
        $(".smore a").text("Show Less");
    });

    /*
    $(window).scroll(function(event) {
        //Act on the event
        var scrollPos = $(window).scrollTop(),
        nav = $('.grid-nav');
        if(scrollPos > 1300){
            nav.addClass('fixed-top');

        }else{
            nav.removeClass('fixed-top');
        }
    });	
    */
});