$(function () {
    var headerTpl = $("#tpl-header-cart").text();
    var cartItemEl = $("#tpl-main-cart");
    //var checkoutItemEl = $("#tpl-checkout-item");
    var cartTpl = cartItemEl.text();
    //var checkoutTpl = checkoutItemEl.text();


    function getItemHtml(item, y) {
        var title = item.get("name").trim();
        var thumb = item.get("thumb");

        var result = headerTpl.replace("{{title}}", title);
        result = result.replace("{{price}}", item.get("price"));
        result = result.replace("{{quantity}}", item.get("quantity"));
        result = result.replace("{{img}}", thumb);
        result = result.replace("{{y}}", y);
        result = result.replace(/{{link}}/g, item.get("link"));
        result = result.replace("{{sku}}", item.get("sku"));
        result = result.replace("{{id}}", item.id());
        return result;
    }

    function getMainCartHtml(item, y) {
        var title = item.get("name").trim();
        var thumb = item.get("thumb");
        var total = item.get("total");

        var result = cartTpl.replace("{{title}}", title);
        result = result.replace(/{{price}}/g, item.get("price"));
        result = result.replace("{{quantity}}", item.get("quantity"));
        result = result.replace("{{img}}", thumb);
        result = result.replace("{{total}}", total);
        result = result.replace("{{y}}", y);
        result = result.replace(/{{link}}/g, item.get("link"));
        result = result.replace(/{{sku}}/g, item.get("sku"));
        result = result.replace(/{{id}}/g, item.id());
        return result;
    }

    function writeFullCart() {
        var tableEl = $("#cart-products");
        tableEl.empty();
        var html = "";

        simpleCart.each(function (item, y) {
            html += getMainCartHtml(item, y) + "\n";

        });
        tableEl.prepend(html);
    }

    function writeCart(selector) {
        if (cartItemEl.length > 0) {
            //we are on the main cart page
            writeFullCart();
        }

        //header-cart items are in ul.simpleCart_items
        //selector is .simpleCart_items 
        //This should work for both the header cart AND
        //the checkout page
        var container = simpleCart.$(selector);
        //clear out container
        container.html('');
        // cycle through the items
        if (simpleCart.quantity() > 0) {
            $("#cart-slideout .cart-product").addClass("d-none");
        }
        simpleCart.each(function (item, y) {
            var html = getItemHtml(item, y);
            container.append(html);
        });

        return container;
    }

    simpleCart.extend();

    simpleCart.writeCart = writeCart;

    var checkout = window.xcheckout || {
        type: "PayPal",
        email: "rachel@420health.co.uk",
        sandbox: false, 
        success: "https://www.420health.co.uk/thank-you/",
    };

    simpleCart({
        currency: "GBP",
        checkout: checkout,
        shippingFlatRate: 2.99,
        cartColumns: [
            { attr: "name", label: "Name" },
            { attr: "price", label: "Price", view: 'currency' },
            { view: "decrement", label: false },
            { attr: "quantity", label: "Qty" },
            { view: "increment", label: false },
            { attr: "total", label: "SubTotal", view: 'currency' },
            { view: "remove", text: "Remove", label: false },
            { view: 'image', attr: 'thumb', label: false },
            { attr: "link", label: false },
            { attr: "sku", label: false },
            { attr: "alt", label: false }

        ]
    });

    simpleCart.Item.prototype.total = function () {
        return Math.round(this.quantity() * this.price() * 100) / 100;
    };

    $(".header-cart .simpleCart_checkout").on("click", function () {
        simpleCart.checkout();
    })

    simpleCart.bind("afterAdd", function (item) {
        var name = item.get("name");
        var img = item.get("thumb");
        $.notify({
            icon: img,
            title: name,
            message: "Added to your cart!"
        }, {
                placement: {
                    from: "bottom",
                    align: "bottom"
                },
                animate: {
                    enter: 'animated fadeInUp',
                    exit: 'animated fadeOutDown'
                },
                allow_dismiss: true,
                type: 'minimalist',
	            delay: 5000,
	            icon_type: 'image',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>'+
                    '<img data-notify="icon" class="img-circle pull-left">' +
                    '<span data-notify="title">{1}</span>' +
                    '<span data-notify="message">{2}</span>' +
                    '</div>'
            });

    });

    /*     $('.item_add').each(function(){
            var nameProduct = $(this).parent().parent().find('.item_name').text();
            $(this).on('click', function(){
                swal(nameProduct, "has been added to your cart !", "success");
            });
        }); */



});