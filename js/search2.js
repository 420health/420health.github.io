$(function () {
    function truncate(txt, num) {
        num = num || 50;
        return txt.substring(0, num) + "...";
    }

    if (!window.idx) {
        $.getJSON("/js/docIndex.json", function (data) {
            console.log("got index...")
            window.idx = elasticlunr.Index.load(data);
        });
    } 

    var liTpl = '<li><a href="https://www.420health.co.uk/{{url}}">';
    liTpl += '<div class="search-img"><img src="https://www.420health.co.uk{{img}}"></div>'
    liTpl+= '<span>{{title}}</span></a></li>';
    //liTpl += '<div>{{contents}}</div></li>';

    var searchContainer = $(".search-box-results");
    var contentLength = 100;

    function doSearch(input) {

        var searchTerms = $(input).val();
        if (searchTerms.length > 1) {
            var searchBox = $(input).closest(".search-box");
            var searchContainer = searchBox.find(".search-box-results");
            var results = window.idx.search(searchTerms);

            searchContainer.remove('ul');
            var ul = $("<ul></ul>").appendTo(searchContainer);
            ul.addClass("search-results");
            var len = results.length < 10 ? results.length : 10;
            for (var i = 0; i < len; i++) {
                var doc = results[i].doc;
                var html = liTpl.replace("{{url}}", doc.url);
                html = html.replace("{{title}}", doc.title);
                html = html.replace("{{img}}", doc.img);
                //html = html.replace("{{contents}}", truncate(doc.contents, contentLength));
                ul.append(html)
            }
            searchContainer.fadeIn(500);
        }
    }


    $(".search-input").on('keypress', function (e) {
        if (e.which === 13) {
            doSearch(this);
        }
    });
    $(".search-input").on('keyup', function (e) {
        if ($(this).val().length > 2) {
            doSearch(this);
        }
    });


    $(".search-btn").on('click', function (e) {
        var input = $(this).siblings(".search-input")[0];
        doSearch(input);
    });

    $(".search-close").on('click', function (e) {
        $(".search-box-results").fadeOut(500,function(){
            $(".search-input").val('');
        });
        
    });



})