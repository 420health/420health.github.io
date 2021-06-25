$(function(){
    function getMetaObject(){
        return {
            title: $('title').text(),
            metaDesc: $('meta[name=description]').attr("content"),
            metaKey: $('meta[name=keywords]').attr("content"),
            metaAuth: $('meta[name=author]').attr("content"),
            twitTitle: $('meta[name="twitter:title"]').attr("content"),
            twitDesc: $('meta[name="twitter:description"]').attr("content"),
            twitImg: $('meta[name="twitter:image"]').attr("content"),
            fbTitle: $('meta[property="og:title"]').attr("content"),
            fbDesc: $('meta[property="og:description"]').attr("content"),
            fbImg: $('meta[property="og:image"]').attr("content"),
            fbUrl: $('meta[property="og:url"]').attr("content"),
            canonical: $('head link[rel=canonical]').attr("href")
        }
    
    }

    var mobj = getMetaObject();

    var html = $("#tpl-seosidebar").text();
    html = html.replace("{{desc}}",mobj.metaDesc).replace("{{keys}}",mobj.metaKey).replace("{{auth}}",mobj.metaAuth);
    html = html.replace("{{ogtitle}}",mobj.fbTitle).replace("{{ogdesc}}",mobj.fbDesc).replace("{{ogurl}}",mobj.fbUrl);
    html = html.replace("{{ogimg}}",mobj.fbImg);
    $("body").append(html);

})