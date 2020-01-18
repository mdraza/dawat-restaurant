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
$('.owl-carouselOne').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

/******* Active Menu Filter Plugin  *******/
var filterizd = $('.filtr-container').filterizr({

});
/******* Filter Button Active Class *******/
var header = document.getElementById("workFilter");
var btns = header.getElementsByClassName("wrk");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active_wrk");
        current[0].className = current[0].className.replace(" active_wrk", "");
        this.className += " active_wrk";
    });
}
/********* Our Team ********/
$('.owl-carouselTwo').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
})
/********* Latest News Section ********/
$('.owl-carouselThree').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

/********* Gallery Magnific Pop ********/
$('.view-image').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
    },
});