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

    $('.menu').hover(function () {
        $('.menu').toggleClass('open');
        $('.menu-bg').toggleClass('cover');
    });
    $('.menu2').hover(function () {
        $('.menu2').toggleClass('open');
        $('.menu-bg').toggleClass('cover');
    });
    $('.menu3').hover(function () {
        $('.menu3').toggleClass('open');
        $('.menu-bg').toggleClass('cover');
    });
    $('.menu4').hover(function () {
        $('.menu4').toggleClass('open');
        $('.menu-bg').toggleClass('cover');
    });
    $('.flower').mouseenter(function () {
        $(this).animate({
            opacity: '1.0',
        });
    });
    $('.flower').mouseleave(function () {
        $(this).animate({
            opacity: '0.5',
        });
    });
    $('.caption').draggable({
        containment: ".video",
    });
    $('.button').click(function () {
        $('.video-container').css('display', 'block');
    });

    $('.button').hover(function () {
        $(this).css('background-color', 'white')
    }, function () {
        $(this).css('background-color', '#eb4646');
    });
});
