"use strict";

jQuery(document).ready(function(){
	var fph = function(){};

	fph.prototype.init = function() {
		this.owlCarousel = $('.owl-carousel');
		this.magPopup = $('.popup-gallery');

		this.bindEvents();
	};

	fph.prototype.bindEvents = function() {
		this.bindCarousel();
		this.bindPopup();
	};

	fph.prototype.bindCarousel = function() {
		var self = this;
		self.owlCarousel.each(function() {
            var config = {
            	singleItem: $(this).data('singleitem'),
            	items: 4,
                itemsDesktop: [1160,3],
                itemsTablet: [799,4],
                itemsTabletSmall: [768,2],
                itemsMobile: [480,1],
                pagination: $(this).data('pagination'),
                navigation: $(this).data('navigation'),
                navigationText: $(this).data('navigationtext'),
                autoPlay: $(this).data('autoplay'),
                slideSpeed: $(this).data('slidep peed'),
                afterInit: function(el) {
                	el.find('.owl-prev').append('<span class="fa fa-angle-left"></span>');
                	el.find('.owl-next').append('<span class="fa fa-angle-right"></span>');
                }
            };            
            $(this).owlCarousel(config);
        });
	};

	fph.prototype.bindPopup = function() {
		var self = this;
		self.magPopup.magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	}

	var appObj = new fph();
	appObj.init();

	// Back to top
	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});



