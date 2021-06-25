$(function () {
    var imgs = $(".more-img img");
    var mainImg = $(".pro-img .mimg")
    imgs.on("touchstart click",function(){
        imgs.removeClass("iactive");
        $(this).addClass("iactive");
        mainImg.attr("src",$(this).attr("src"));
    });

});