$(document).ready(function() {
  "use strict";

  /*==================================
* Author        : "bgx"
* Template Name : bgx HTML Template
* Version       : 1.0
==================================== */

  /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top

======================================*/

  // 1. Scroll To Top
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 300) {
      $(".return-to-top").fadeIn();
    } else {
      $(".return-to-top").fadeOut();
    }
  });
  $(".return-to-top").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1500
    );
    return false;
  });

  /*----------------------------
    2. Menu Mobile
  ------------------------------ */

    $(".menu-btn,.offcanvas-overlay,.menu-sidebar-cross").on("click", function(e) {
      e.preventDefault();
      $(".main-menu").toggleClass("smart-menu-active");
      $(".offcanvas-overlay").toggleClass("offcanvas-overlay-active");
    });
  
  /*----------------------------
		3. slider
	------------------------------ */
    // i. brand slider
    $('.brand-carousel').owlCarousel({
      items:10,
      loop: true,
      autoplay: true,
      margin: 0,
      dots: false,
      smartSpeed: 1000,
      nav: false,
      navText: ['<img src="assets/images/testimonial/left-arrow.svg" alt="left">', '<img src="assets/images/testimonial/right-arrow.png" alt="right">'],
      responsiveClass: true,
      responsive: {
        0: {
          items: 3
        },
        440: {
          items: 5
        },
        600: {
          items: 6
        },
        1340: {
          items: 10
        }
      }
    });

    // ii. brand slider
    $('.about-welcome-hero-carousel-content').owlCarousel({
      items:2,
      loop: true,
      autoplay: false,
      margin: 0,
      dots: true,
      smartSpeed: 2000,
      nav: true,
      navText: ['<img src="assets/images/testimonial/left-arrow.svg" alt="left">', '<img src="assets/images/testimonial/right-arrow.png" alt="right">'],
      responsiveClass: true,
      center:true,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1800: {
          items: 2
        }
      }
    });

   /*----------------------------
		4. blur system
	------------------------------ */

  $("input,textarea").blur(function(){
    $(this).css({
    	border:'1px solid #7dc4a6',
      boxShadow: 'none'
    })
  });

  $(".register-form-content select").blur(function(){
    $(this).css({color: '#3d4642'})
  });

  $(".ts-checklabel").click(function(){
    $(this).css({opacity:'1' })
  });

  $(".register-select").click(function(){
    $(this).css({boxShadow: 'none',opacity:'1',border:'1px solid #7dc4a6'})
  });

  /*----------------------------
		5. magnific-popup
	------------------------------ */
	// vedio-popup
	$('.vedio-play').magnificPopup({
		type:'video'
	});

  $('.single-details-tec-partner-body-head--mobile-inner-select-txt,.offcanvas-overlay2').on("click", function(e) {
    e.preventDefault();
    $('.single-details-tec-partner-left-sidebar').toggleClass('left-zero');
    $(".offcanvas-overlay2").toggleClass("offcanvas-overlay-active");
  });


});
