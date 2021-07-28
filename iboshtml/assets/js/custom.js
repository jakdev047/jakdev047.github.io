$(".toggle-blog").hide("fast");
$(".btn-seeless").hide();

$(document).ready(function () {
  "use strict";

  /*==================================
  * Author        : "iBOS"
  * Template Name : iBOS HTML Template
  * Version       : 1.0
  ==================================== */

  /*=========== TABLE OF CONTENTS ===========

  ======================================*/

  /*----------------------------
		Slider
	------------------------------ */

  // Partner script
  $(".partner-content").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 399,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // product-card
  $(".product-card").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    center: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
        center: true,
      },
      399: {
        loop: true,
        items: 2,
        center: true,
        margin: 30,
      },
      767: {
        loop: true,
        items: 3,
        margin: 100,
      },
      991: {
        items: 3,
        margin: 10,
      },
    },
  });
  $(".owl-next").html(
    '<img src="assets/images/product/right-arrow.png" alt="iBOS">'
  );
  $(".owl-prev").html(
    '<img src="assets/images/product/right-arrow.png" alt="iBOS">'
  );

  // softwear procudure slider
  $(".serve-background").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".serve-items",
  });

  $(".serve-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".serve-items",
  });

  $(".serve-items").slick({
    infinite: false,
    slidesToShow: 9,
    slidesToScroll: 9,
    vertical: true,
    asNavFor: ".serve-content",
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

  // const serveItems = document.getElementById("serve-items");
  // if (serveItems) {
  //   $(".slick-track")
  //     .children()
  //     .each(function (index) {
  //       $(this).click(function () {
  //         $(".serve-wrapper").css(
  //           "background-image",
  //           `url("assets/images/serve/background-${index}.jpg")`
  //         );
  //       });
  //     });
  // }

  // blog-feature-slider
  $(".blog-feature-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    focusOnSelect: false,
    variableWidth: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });

  // .single-blog-image-slider
  $(".single-blog-image-slider").slick({
    dots: true,
    dragable: true,
  });

  /*----------------------------
        Testimonial Slider
  ------------------------------ */

  $(".hub-slider-slides ul").hubSlider({
    selector: $("li"),
    button: {
      next: $(".hub-slider-arrow_next"),
      prev: $(".hub-slider-arrow_prev"),
    },
    startOffset: -30,
    opacityStep: 0.4,
  });

  /*----------------------------
		magnific-popup
	------------------------------ */
  $(".video-play-button").magnificPopup({
    type: "video",
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
      1000
    );
    return false;
  });

  /*----------------------------
        Blog Toggle
  ------------------------------ */

  $(".btn-seemore").click(function () {
    $(".toggle-blog").slideDown("1000");
    $(this).hide();
    $(".btn-seeless").show();
  });
  $(".btn-seeless").click(function () {
    $(".toggle-blog").slideUp("fast");
    $(".btn-seemore").show();
    $(".btn-seeless").hide();
  });

  /*----------------------------
        AOS Effect
  ------------------------------ */
  AOS.init({
    easing: "ease-out-back",
    duration: 2000,
  });
});
