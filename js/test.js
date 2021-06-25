
$(function () {
    var authtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiMWEzYzQyN2UtM2JhMC00YzUxLTk0YzctYTI0Nzc5YTU2M2M5In0.3dXJZ5rI21thx5shEfEGL0ZIj5jdw1tE5FrvV9ZIiBo";

    $.ajax({
        url: "/ws/",
        headers: { "Authorization": authtoken },
        dataType: "json",
        success: function (data) {
            $("#main pre").text(JSON.stringify(data, null, 4))
        },
        error: function (jqxr,status,err){
            $("#main pre").text(status+": "+err);
        }
    })


});