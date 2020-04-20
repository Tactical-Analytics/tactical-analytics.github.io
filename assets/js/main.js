(function ($) {
	"use strict";
	
	/*----------------------------
    Responsive menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 10) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.mainmenu li a, .logo a,.slicknav_nav li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 500);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).on('load', function(){
		jQuery("#preloader").fadeOut(500);
	});

	/*----------------------------
    START - Form Submit
    ------------------------------ */
	$("#contact-form").submit(function(e) {

		e.preventDefault(); // avoid to execute the actual submit of the form.
	
		var form = $(this);
		var url = form.attr('action');
	
		$.ajax({
			type: "POST",
			url: url,
			data: form.serialize()
		}).always(function(response) {
			if ( response.status !== 400 ) {
				form.find("input, textarea").val("");
				$('.form-message').removeClass("alert-danger").addClass("alert-success").text("Contact form successfully submitted.").fadeIn().delay(4500).fadeOut();
			} else {
				$('.form-message').removeClass("alert-success").addClass("alert-danger").text("You must fill in the form.").fadeIn();
			}
		});
	
	});
	

}(jQuery));