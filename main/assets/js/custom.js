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
		3. Banner slider
	------------------------------ */
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

$(".tab-service .nav-item a:not(.active)").click(function(){
/* 
let left = $(this).offset().left;

let windowWidth = $(window).width() ;
let centerPosition = (windowWidth/2) - 60 ;
if(left<1){
  left = 0 ;
}

if(left>windowWidth){
  left  = windowWidth
}

if(left < centerPosition){
  $(this).scrollLeft += centerPosition - left;
}

if(left > centerPosition){
  $(this).scrollLeft +=  left - centerPosition;
}
 */
// $(this).scrollLeft += 50;
$(this).closest('.tab-service-area > .container').scrollLeft() + 50;
})



});
