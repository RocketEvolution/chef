$(document).ready(function() {

	// SCROLLED
	$(window).scroll(function() {
		$('.header-top').toggleClass('header-top-scrolled', $(this).scrollTop() > 10);
		$('.header-main').toggleClass('header-main-scrolled', $(this).scrollTop() > 10);
	});


	// RESPONSIVE MENU
	$('.responsive-button').click(function() {
		$('#responsive-menu').addClass('responsive-menu-show');
	});
	$('.responsive-button-close').click(function() {
		$('#responsive-menu').removeClass('responsive-menu-show');
	});


	// SLIDER HEIGHT
	var slideHeight = $(window).height();
	$('#slider .carousel-inner .item, #slider .video-container').css('height',slideHeight);
	$(window).resize(function(){'use strict',
		$('#slider .carousel-inner .item, #slider .video-container').css('height',slideHeight);
	});


	// BANNER HEIGHT
	var bannerHeight = $(window).height()/1.75;
	$('#banner .banner-item').css('height',bannerHeight);
	$(window).resize(function(){'use strict',
		$('#banner .banner-item').css('height',bannerHeight);
	});


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});


	// PRETTY PHOTO
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	


});