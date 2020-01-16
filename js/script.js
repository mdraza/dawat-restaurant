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

/******* WOW Js *******/
new WOW().init();

/******* Owl Carousel *******/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})