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
		magnific-popup
	------------------------------ */
	// vedio-popup
	$('.vedio-play').magnificPopup({
		type:'video'
	});

  /*----------------------------
		service-tab scroll
	------------------------------ */
  (function(){
    // tab nav box width
    let tabNavWidth = $('.tab-service-top>ul>li>a').outerWidth( true );

    // width of box/container where tab nav is overflowed 
    let boxWidth = $('.tab-service-top').outerWidth( true ); 

    // center position of parent box / container
    let boxCenter = boxWidth/2;

    // distance from left of a tab nav for centering a tab nav inside box/container
    let NavCenterDistanceFromLeft = boxCenter - (tabNavWidth/2) ;

    var scrollAmount = 0 ; 
    var distanceFromLeft = 0 ;
    let i = 1 ;

    $(".tab-service-top>ul>li>a").each(function(){
    
      if(i !== 1){   // skip First tab nab     
        let width = $(this).outerWidth( true );
        distanceFromLeft += width;  // distnce from tab nav starting
        if(distanceFromLeft > NavCenterDistanceFromLeft ){     
          scrollAmount  = distanceFromLeft- NavCenterDistanceFromLeft   
          $(this).closest('li').attr( 'data-step', scrollAmount );
        }else{
          $(this).closest('li').attr( 'data-step', 0 );  
        }
        
      }else{   // only for first tabNav
        i +=1;
        $(this).closest('li').attr( 'data-step', 0 );  
      }
        
    });

    // onclick scroll to center position
    $(".tab-service-top>ul>li").on('click',function(){   
      let step = $(this).data('step'); 
        $('div.tab-service-top').scrollLeft(step);  
    });

  })();

});
