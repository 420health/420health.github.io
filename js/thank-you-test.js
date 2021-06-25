$(function () {

    var tpl = $("#tpl-thankyou").text();

    var data = {
        "option_selection3_1": "Advance biotech hemp capsules 150mg 525mg cbd 15percent infused with",
        "option_selection3_2": "Cbd +fx hemp soft gels 750 series with mct oil",
        "first_name": "test",
        "discount": "0.00",
        "mc_shipping": "0.00",
        "mc_currency": "GBP",
        "payer_status": "verified",
        "shipping_discount": "0.00",
        "payment_fee": "",
        "address_status": "confirmed",
        "payment_gross": "",
        "address_zip": "E1 6RL",
        "txn_type": "cart",
        "num_cart_items": "2",
        "address_country_code": "GB",
        "mc_handling": "2.99",
        "payer_id": "ULVHX7ULZES6L",
        "option_selection2_1": "ab-1001",
        "option_selection2_2": "cf-1018",
        "charset": "windows-1252",
        "tax1": "0.00",
        "receiver_id": "EXDAZGBJWYBEE",
        "tax2": "0.00",
        "mc_handling1": "0.00",
        "mc_handling2": "0.00",
        "option_name3_1": "alt",
        "option_name3_2": "alt",
        "item_name1": "\r\n    \r\n    , Advance Biotech Hemp Capsules 150mg \/ 5.25mg CBD (1.5%) Infused with Turmeric and Black Pepper",
        "tax": "0.00",
        "item_name2": "\r\n    \r\n    , CBD +FX Hemp Soft Gels 750 Series with MCT Oil 30 CT",
        "payment_type": "instant",
        "mc_shipping1": "0.00",
        "address_street": "Spitalfields Arts Market, 112 Brick Lane,",
        "mc_shipping2": "0.00",
        "ebay_txn_id1": "",
        "ebay_txn_id2": "",
        "txn_id": "0198788772353524M",
        "mc_gross_1": "21.99",
        "quantity1": "1",
        "mc_gross_2": "44.99",
        "quantity2": "1",
        "item_number1": "1",
        "protection_eligibility": "Eligible",
        "item_number2": "2",
        "custom": "",
        "option_selection1_1": "\/shop\/advance-biotech-hemp-capsules-150mg-525mg-cbd-15percent-infused-with",
        "option_selection1_2": "\/shop\/cbd-+fx-hemp-soft-gels-750-series-with-mct-oil",
        "business": "sb-0t1479286608@business.example.com",
        "residence_country": "GB",
        "last_name": "buyer",
        "address_state": "London",
        "payer_email": "admin-buyer@420health.co.uk",
        "option_name2_1": "sku",
        "option_name2_2": "sku",
        "address_city": "London",
        "payment_status": "Completed",
        "payment_date": "02:28:32 Sep 29, 2019 PDT",
        "transaction_subject": "",
        "receiver_email": "sb-0t1479286608@business.example.com",
        "mc_fee": "2.58",
        "shipping_method": "Default",
        "address_country": "United Kingdom",
        "mc_gross": "69.97",
        "insurance_amount": "0.00",
        "address_name": "test buyer",
        "option_name1_1": "link",
        "option_name1_2": "link"
    };

    var img = "/img/products/reakiro/tiny/reakiro-cbd-oil-500mg.jpg"

    var numItems = parseInt(data.num_cart_items);
    var subtotal = 0;
    var items = [];
    for (var i = 1; i <= numItems; i++) {
        var price = data["mc_gross_" + i]
        item = {
            name: data["option_selection3_" + i],
            name2: data["item_name" + i],
            link: data["option_selection1_" + i],
            sku: data["option_selection2_" + i],
            quantity: data["quantity" + i],
            price: price
        }
        var row = tpl.replace("{{link}}", item.link).
            replace("{{img}}",img).
            replace("{{title}}", item.name).
            replace("{{quantity}}", item.quantity).
            replace("{{price}}", item.price).
            replace("{{subtotal}}", item.price);
        $("#cart-products").append(row);
        items.push(item);
        subtotal = subtotal + parseFloat(price);
    }


    $("#o-subtotal").text(subtotal.toFixed(2));
    $("#o-shipping").text(data.mc_handling);
    $("#o-grandtotal").text(data.mc_gross);


    simpleCart.empty();

});