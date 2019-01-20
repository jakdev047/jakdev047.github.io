$(document).ready(function($){
	"use strict";
	
	// owl carousel (.team-carousel-smooth)
	
    var owl = $('.team-carousel-smooth');
	owl.owlCarousel({
		items:1,
		loop:true,
		dots:false,
		nav:false,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		margin:30,
		autoplay:true,
		smartSpeed:1000,
		autoplayHoverPause:true,

		// responsive
		
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			640:{
				items:1,
				nav:true
			},
			992:{
				items:1,
				nav:true,
				loop:true
			}
		}
		
		
		
	});

});