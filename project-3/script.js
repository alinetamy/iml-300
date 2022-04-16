$(document).ready(function () {
    $(".myth-container").click(function () {
        $(this).css("background-image", "linear-gradient(#FFC3F2, #FFFFFF)"),
            $(this).css("filter", "drop-shadow(8px 8px 10px white)"),
            $(this).css("border", "0px");
        //            $(".truth-container-first").hide()
    });

    $("#myth-1").click(function () {
        $("#truth-1").toggle(),
            $("#truth-2, #truth-3, #truth-4, #truth-5, #truth-6").hide();
    });

    $("#myth-2").click(function () {
        $("#truth-2").toggle(),
        $("#truth-1, #truth-3, #truth-4, #truth-5, #truth-6").hide();
    });

    $("#myth-3").click(function () {
        $("#truth-3").toggle(),
        $("#truth-2, #truth-1, #truth-4, #truth-5, #truth-6").hide();
    });

    $("#myth-4").click(function () {
        $("#truth-4").toggle(),
        $("#truth-2, #truth-3, #truth-1, #truth-5, #truth-6").hide();
    });

    $("#myth-5").click(function () {
        $("#truth-5").toggle(),
        $("#truth-2, #truth-3, #truth-4, #truth-1, #truth-6").hide();
    });

    $("#myth-6").click(function () {
        $("#truth-6").toggle(),
        $("#truth-2, #truth-3, #truth-4, #truth-1, #truth-5").hide();
    });
});