(function ($) {
	"use strict";
  
	var nav = $('nav');
	var navHeight = nav.outerHeight();
  
	$('.toggle-icon').click(function () {
	  $(this).toggleClass('fa-toggle-on fa-toggle-off');
	});

	$(document).ready(function() {
		$('.toggle-icon').click(function() {
		  $('body').toggleClass('dark-theme light-theme');
		});
	});
  
	// Navbar blur scroll
	$(window).scroll(function () {
	  var scrollPos = $(window).scrollTop();
	  $('#navbar').toggleClass('blur', scrollPos > 50);
	  $('.back-to-top').toggle(scrollPos > 100);
	});
  
	$('.back-to-top').click(function () {
	  $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
	  return false;
	});
  
	// Scrolling Animation
	$(window).on('scroll', function () {
	  $('section').each(function () {
		var sectionTop = $(this).offset().top;
		var windowHeight = $(window).height();
		if (sectionTop < (windowHeight * 0.75 + $(window).scrollTop())) {
		  $(this).css('opacity', 1);
		}
	  });
	}).trigger('scroll');
  
	// Navbar Menu Reduce
	$(window).on('scroll', function () {
	  var pixels = 50;
	  var top = 1200;
	  var $navbar = $('.navbar-expand-md');
  
	  $navbar.toggleClass('navbar-reduce', $(window).scrollTop() > pixels);
	  $navbar.toggleClass('navbar-trans', $(window).scrollTop() <= pixels);
  
	  $('.scrolltop-mf').toggle($(window).scrollTop() > top);
	});
  
	// Typed
	if ($('.text-slider').length == 1) {
	  var typed_strings = $('.text-slider-items').text().split(',');
	  var typed = new Typed('.text-slider', {
		strings: typed_strings,
		typeSpeed: 80,
		loop: true,
		backDelay: 1100,
		backSpeed: 30
	  });
	}
  
  })(jQuery);