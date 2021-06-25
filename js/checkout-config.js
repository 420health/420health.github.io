
var successUrl = location.hostname == "localhost" ? "http://localhost/thank-you/" : "https://test.420health.co.uk/thank-you/";
window.xcheckout = {
        type: "PayPal",
        //email: "rachel@420health.co.uk",
        email: "sb-0t1479286608@business.example.com",
        sandbox: true, 
        success: successUrl
}