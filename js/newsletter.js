/*global $*/
// Contact Form Scripts
$(function() {
   
    $("#subForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var email = $("input#sub-email").val();
            var name = $("input#sub-name").val();
            $("#subscribeButton").prop("disabled",true);
            $.ajax({
                url: "https://getsimpleform.com/messages/ajax?form_api_token=88fd19aa0ccc57f11a43c87e4f459565",
                dataType: "jsonp",
                data: {
                    "Title": "Newsletter subscription via 420health.co.uk",
                    "Name": name,
                    "Email": email,
                    "Details": "Newsletter subscription via 420health.co.uk"
                },
                cache: false,
                success: function(data,status,jqXhr) {
                    // Success message
                    Swal.fire("Subscribed to our newsletter", "Thank you for your subscription", "success");
                    //clear all fields
                    $('#subForm').trigger("reset");
                    $("#subscribeButton").prop("disabled",false);
                },
                error: function() {
                    // Fail message
                    Swal.fire("Woops! There seems to be a problem processing your request", "The problem is on our side. Please try again later when hopefully we will have solved the problem", "error");
                    //clear all fields
                    $('#subForm').trigger("reset");
                    $("#subscribeButton").prop("disabled",false);
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

});


