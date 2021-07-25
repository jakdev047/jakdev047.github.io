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
  // product-card
  $(".product-card").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
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
        breakpoint: 991,
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
        AOS Effect
  ------------------------------ */
  AOS.init({
    easing: "ease-out-back",
    duration: 2000,
  });
});
