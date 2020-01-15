/***********  Navigation  **************/
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active');
    })
});

/****  Sticky Navbar  ****/
$(document).ready(function () {
    $(window).on("scroll", function () {
        var t = $(".navigation");
        $(window).scrollTop() >= t.height() ? t.addClass("nav-scroll") : t.removeClass("nav-scroll")
    })
});