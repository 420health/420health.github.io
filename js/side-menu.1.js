$(function () {
    var cartSidebar =  $("#cart-slideout");
    var page = $("#page");
    function toggleSidebar(){
        cartSidebar.toggleClass("sidebar-open");
        page.toggleClass("sidebar-open");
        page.toggleClass("main");
    }
    
    $("button.opennav2").click(toggleSidebar)
    $(".cart-slideout-close").click(toggleSidebar);

    //js or mobile menu
    $("#btn").click(function (event) {
        /* Act on the event */
        document.getElementById("menu").style.display = "block";
        document.getElementById("page").style.transform = "translate3d(240px ,0 ,0)";
        document.getElementById("page").style.position = "fixed";
        document.getElementById("btn").style.display = "none";
        $('#page').addClass('main');
    });
    $("#page").click(function (event) {
        /* Act on the event */
        $(".main").toggleClass('active');
        if ($('.main').hasClass('active')) {

        } else {
            //for mobile menu
            document.getElementById("menu").style.display = "none";
            document.getElementById("page").style.transform = "translate3d(0 ,0 ,0)";
            document.getElementById("page").style.position = "inherit";
            document.getElementById("btn").style.display = "block";
            //for home navigation
            document.getElementById("right-slideout").style.display = "none";
            document.getElementById("cart-slideout").style.display = "none";
            document.getElementById("page").style.transform = "none";
            $('#page').removeClass('main');
        }
    });
    //js for show and hide mobile menu
    $('#menu ul.main-menu li i.it1').click(function () {
        $('ul.sub-menu.sub1').toggle('active');
        if ($('ul.sub-menu.sub1').hasClass('active')) {
            $('ul.sub-menu.sub1').style.display = "block";
        }
    });
    $('#menu ul.main-menu li i.it2').click(function () {
        $('ul.sub-menu.sub2').toggle('active');
        if ($('ul.sub-menu.sub2').hasClass('active')) {
            $('ul.sub-menu.sub2').style.display = "block";
        }
    });
    $('#menu ul.main-menu li i.it3').click(function () {
        $('ul.sub-menu.sub3').toggle('active');
        if ($('ul.sub-menu.sub3').hasClass('active')) {
            $('ul.sub-menu.sub3').style.display = "block";
        }
    });
    $('#menu ul.main-menu li i.it4').click(function () {
        $('ul.sub-menu.sub4').toggle('active');
        if ($('ul.sub-menu.sub4').hasClass('active')) {
            $('ul.sub-menu.sub4').style.display = "block";
        }
    });
    $('#menu ul.main-menu li i.it5').click(function () {
        $('ul.sub-menu.sub5').toggle('active');
        if ($('ul.sub-menu.sub5').hasClass('active')) {
            $('ul.sub-menu.sub5').style.display = "block";
        }
    });
    $('#menu ul.main-menu li i.it6').click(function () {
        $('ul.sub-menu.sub6').toggle('active');
        if ($('ul.sub-menu.sub6').hasClass('active')) {
            $('ul.sub-menu.sub6').style.display = "block";
        }
    });
    $('#menu ul.main-menu li i.it7').click(function () {
        $('ul.sub-menu.sub7').toggle('active');
        if ($('ul.sub-menu.sub7').hasClass('active')) {
            $('ul.sub-menu.sub7').style.display = "block";
        }
    });
    $('#menu ul.main-menu li i.it8').click(function () {
        $('ul.sub-menu.sub8').toggle('active');
        if ($('ul.sub-menu.sub8').hasClass('active')) {
            $('ul.sub-menu.sub8').style.display = "block";
        }
    });
    // js for dropdown menu
    $('.dropdown.first').hover(
        function () {
            $(this).children('.dropdown-menu').slideDown(300);
        },
        function () {
            $(this).children('.dropdown-menu').slideUp(300);
        }
    );
});
