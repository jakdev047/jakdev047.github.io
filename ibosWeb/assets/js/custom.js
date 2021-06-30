$(".toggle-team-members").hide("fast");
$(".btn-seeless").hide();

/*----------------------------
        Book Demo Timeline
  ------------------------------ */
const bookDemoTimeLine = document.getElementById(
  "book-demo-proces-timelineDiv"
);
if (bookDemoTimeLine) {
  (function () {
    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      document.getElementById("book-demo-proces-timelineDiv").scrollLeft -=
        delta * 40; // Multiplied by 40
      e.preventDefault();
    }
    if (
      document.getElementById("book-demo-proces-timelineDiv").addEventListener
    ) {
      // IE9, Chrome, Safari, Opera
      document
        .getElementById("book-demo-proces-timelineDiv")
        .addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document
        .getElementById("book-demo-proces-timelineDiv")
        .addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
      // IE 6/7/8
      document
        .getElementById("book-demo-proces-timelineDiv")
        .attachEvent("onmousewheel", scrollHorizontally);
    }
  })();
}

$(document).ready(function () {
  "use strict";

  /*==================================
  * Author        : "iBOS"
  * Template Name : iBOS HTML Template
  * Version       : 1.0
  ==================================== */

  /*=========== TABLE OF CONTENTS ===========
    1. Vanilla Tilt
    2. Sticky Menu
    3. Slider
    4. Scroll To top
    5. Map
    6. Smooth Scroll Spy
  ======================================*/

  /*----------------------------
        Smooth Scroll Spy
  ------------------------------ */
  $("a.appointment-smooth").bind("click", function (event) {
    event.preventDefault();
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - -1,
        },
        1200,
        "easeInOutExpo"
      );
  });
  $("body").scrollspy({
    target: ".welcome-btn-section",
    offset: 0,
  });

  /*----------------------------
        Scroll To Top
  ------------------------------ */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".return-to-top").fadeIn();
    } else {
      $(".return-to-top").fadeOut();
    }
  });

  $(".return-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });

  /*----------------------------
        Team Toggle
  ------------------------------ */

  $(".btn-seemore").click(function () {
    $(".toggle-team-members").slideDown("1000");
    $(this).hide();
    $(".btn-seeless").show();
  });
  $(".btn-seeless").click(function () {
    $(".toggle-team-members").slideUp("fast");
    $(".btn-seemore").show();
    $(".btn-seeless").hide();
  });

  /*----------------------------
        Slider
  ------------------------------ */
  // serve slider
  $(".serve-slider").slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 2560,
        settings: "unslick",
      },
      {
        breakpoint: 1920,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
      {
        breakpoint: 767,
        settings: {
          rows: 2,
          dots: true,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          rows: 2,
          dots: true,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          rows: 2,
          dots: true,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  // client slider
  var owl = $(".client-slider");
  owl.owlCarousel({
    items: 4,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    margin: 25,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,

    // responsive
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        center: true,
        dots: true,
      },
      767: {
        items: 3,
        dots: true,
      },
      1199: {
        items: 4,
        dots: true,
      },
    },
  });

  // testimonial slider
  $(".testimonial-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // technologies slider
  var owl = $(".technologies-slider");
  owl.owlCarousel({
    items: 7,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    margin: 25,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,

    // responsive

    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        margin: 0,
        center: true,
      },
      399: {
        items: 2,
        margin: 0,
        center: true,
      },
      445: {
        items: 3,
      },
      767: {
        items: 4,
      },
      992: {
        items: 5,
        loop: false,
      },
      1199: {
        items: 7,
        loop: false,
      },
    },
  });

  // mobile-app-testimonial-slider
  var owl = $(".mobile-app-testimonial-slider");
  owl.owlCarousel({
    items: 2,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    margin: 30,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,

    // responsive

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
        center: true,
      },
      399: {
        items: 1,
        margin: 0,
        center: true,
      },
      445: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1199: {
        items: 2,
      },
    },
  });

  // module-erp
  $(".erp-double-slider-images").slick({
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".erp-double-slider-categories",
  });
  $(".erp-double-slider-categories").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    asNavFor: ".erp-double-slider-images",
    centerMode: true,
    focusOnSelect: true,
  });

  // softwear procudure slider
  $(".procedure-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".procedure-items",
  });

  $(".procedure-items").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    vertical: true,
    asNavFor: ".procedure-content",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 575,
        settings: {
          autoplay: true,
          infinite: true,
          vertical: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: true,
          variableWidth: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          infinite: true,
          vertical: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          focusOnSelect: true,
          variableWidth: true,
        },
      },
    ],
  });

  /*----------------------------
        Map
  ------------------------------ */
  const mapId = document.getElementById("mapid");

  if (mapId) {
    //Init BaseMaps
    var basemaps = {
      GoogleMap: L.tileLayer(
        "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
        {
          minZoom: 2,
          maxZoom: 19,
          // zoomOffset: -1,
          id: "google.street",
        }
      ),
    };
    //Map Options
    var mapOptions = {
      zoomControl: false,
      attributionControl: false,
      center: [23.755789099999998, 90.36441459999999],
      zoom: 15,
      layers: [basemaps.GoogleMap],
    };
    //Render Main Map
    var map = L.map("mapid", mapOptions);
    var marker = L.marker([23.755789099999998, 90.36441459999999]).addTo(map);
    marker
      .bindPopup(
        '<img class="contact-logo" src="assets/images/logo/map-logo.svg" alt="iBOS">'
      )
      .openPopup();
  } else {
    return "";
  }

  /*----------------------------
        Sticky Menu
    ------------------------------ */
  var fixed_top = $(".sticky-menu");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
      fixed_top.addClass("animated fadeInDown navBackgroundScroll");
    } else {
      fixed_top.removeClass("animated fadeInDown navBackgroundScroll");
    }
  });
});
