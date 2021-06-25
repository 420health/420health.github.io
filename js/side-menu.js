$(function () {
    var cartSidebar =  $("#cart-slideout");
    var page = $("#page");
    function toggleSidebar(){
        cartSidebar.toggleClass("sidebar-open");
        page.toggleClass("sidebar-open");
        page.toggleClass("main");
    }
    
    $("button.navbar-cart").click(toggleSidebar)
    $(".cart-slideout-close").click(toggleSidebar);

});
