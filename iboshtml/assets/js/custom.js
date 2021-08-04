$(".toggle-blog").hide("fast");
$(".btn-seeless").hide();

var mouse = { x: 0, y: 0 };

homex = 0;
homey = 0;
forcex = 0;
forcey = 0;
magnet = 500;

$(document).bind("mousemove", function (e) {
  mouse = { x: e.pageX, y: e.pageY };
});

$(".wooble-effect").each(function (index, el) {
  $(el).data("homex", parseInt($(el).position().left));
  $(el).data("homey", parseInt($(el).position().top));
});

$(".wooble-effect").css("position", "absolute");
setInterval(function () {
  $(".wooble-effect").each(function (index, el) {
    el = $(el);
    position = el.position();
    x0 = el.offset().left;
    y0 = el.offset().top;
    x1 = mouse.x;
    y1 = mouse.y;
    distancex = x1 - x0;
    distancey = y1 - y0;

    distance = Math.sqrt(distancex * distancex + distancey * distancey) + 80; //80 added by me to reduce the effect

    powerx = x0 - ((distancex / distance) * magnet) / distance;
    powery = y0 - ((distancey / distance) * magnet) / distance - 35; //-35 added by me to fix top postion

    forcex = (forcex + (el.data("homex") - x0) / 2) / 1.51;
    forcey = (forcey + (el.data("homey") - y0) / 2) / 1.52;

    el.css("left", powerx + forcex);
    el.css("top", powery + forcey);
  });
}, 15);

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

  // technology-content script
  var owl = $(".technology-content");
  owl.owlCarousel({
    items: 6,
    loop: true,
    dots: false,
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
        items: 3,
        margin: 0,
      },
      399: {
        items: 3,
        margin: 0,
      },
      445: {
        items: 3,
      },
      767: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1199: {
        items: 6,
      },
    },
  });

  // single-service-feature-section
  $(".single-service-feature-section").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 399,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // service-process-slider
  $(".service-process-slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    center: true,
    dots: false,
    nav: false,
  });

  $(".my-owl-next").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

  $(".my-owl-prev").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });

  // case-study-slider
  $(".case-study-slider").owlCarousel({
    dots: false,
    nav: true,
    loop: false,
    autoWidth: true,
    items: 8,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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

  $(".play-btn").magnificPopup({
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

  // pro-bms
  const proBMS = document.getElementById("pro-bms");
  if (proBMS) {
    function detect_active() {
      // get active
      var get_active = $("#dp-slider .dp_item:first-child").data("class");
      $("#dp-dots li").removeClass("active");
      $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }

    $("#dp-next").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:first-child")
        .hide()
        .appendTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
      detect_active();
    });

    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
      var get_slide = $(this).attr("data-class");
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });

      detect_active();
    });
  }

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
        Case Study
  ------------------------------ */
  //selecting all required elements
  const filterItem = document.querySelector(".case-portfolio-content .items");
  const filterImg = document.querySelectorAll(
    ".case-portfolio-content .gallery .single-case-card"
  );

  if (filterItem) {
    window.onload = () => {
      //after window loaded
      filterItem.onclick = (selectedItem) => {
        //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) {
          //if user selected item has .item class
          filterItem
            .querySelector(".active-class")
            .classList.remove("active-class"); //remove the active-class class which is in first item
          selectedItem.target.classList.add("active-class"); //add that active class on user selected item
          let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
          filterImg.forEach((image) => {
            let filterImges = image.getAttribute("data-name"); //getting image data-name value
            //if user selected item data-name value is equal to images data-name value
            //or user selected item data-name value is equal to "all"
            if (filterImges == filterName || filterName == "all") {
              image.classList.remove("hide"); //first remove the hide class from the image
              image.classList.add("show"); //add show class in image
            } else {
              image.classList.add("hide"); //add hide class in image
              image.classList.remove("show"); //remove show class from the image
            }
          });
        }
      };
    };
  }

  /*----------------------------
        AOS Effect
  ------------------------------ */
  AOS.init({
    easing: "ease-out-back",
    duration: 2000,
  });
});
