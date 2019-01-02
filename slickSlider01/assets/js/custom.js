$(document).ready(function(){
   "use strict";

   // 4. slick
	
		$('.screenshot-content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
			dots:true,
			fade:true,
			autoplay:true,
			asNavFor: '.screenshot-images',
			autoplaySpeed:1500,
		});
		
		$('.screenshot-images').slick({
			slidesToShow:1,
			slidesToScroll: 1,
			arrows:false,
         autoplay:true,
			fade:true,         
			//centerMode:true,
			asNavFor: '.screenshot-content',
			focusOnSelect: true,
			autoplaySpeed:1500,
			
		});
	
});	