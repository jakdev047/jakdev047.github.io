$(document).ready(function() {
  "use strict";

  /*==================================
* Author        : "bgx"
* Template Name : bgx HTML Template
* Version       : 1.0
==================================== */

  /*=========== TABLE OF CONTENTS ===========


======================================*/

  // Scroll To Top
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
    Menu Mobile
  ------------------------------ */

  $(".menu-btn,.offcanvas-overlay,.menu-sidebar-cross").on("click", function(e) {
    e.preventDefault();
    $(".main-menu").toggleClass("smart-menu-active");
    $(".offcanvas-overlay").toggleClass("offcanvas-overlay-active");
  });

  /*----------------------------
		2. Sticky Menu
	------------------------------ */
	var fixed_top = $(".sticky-menu");
	$(window).on("scroll", function(){
		if( $(window).scrollTop() > 50){  
			fixed_top.addClass("animated fadeInDown scroll-menu");
			$("ul.head-smart-menu-list").addClass('smart-menu-pad-decrease')
		}
		else{
			fixed_top.removeClass("animated fadeInDown scroll-menu");
			$("ul.head-smart-menu-list").removeClass('smart-menu-pad-decrease')
		}
	});

});
