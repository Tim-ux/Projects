import jquery from "jquery/dist/jquery.min.js";
import selectize from 'selectize/dist/js/selectize.js';
import fotorama from 'fotorama/fotorama.js';
import carousel from 'owl.carousel/dist/owl.carousel.min.js';
import mburger from 'mburger-css/dist/mburger.js'
import mmenu from 'mmenu-js/dist/mmenu.js';

document.addEventListener('DOMContentLoaded', () => {

  new Mmenu('#my-menu', {
    extensions: [ 'theme-black', 'pagedim-black', 'position-right' ],
    navbar: {
      title: '<img src="images/dist/logo-1.svg" alt="Салон красоты Смитлер">'
    },

  });

  $('.carousel-services-composition h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
  $('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

  $('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
    navElement: 'div',
		navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
    dots: false,
		responsive: {
			0: {
				items: 1,
			},
			800: {
				items: 2,
			},
			1100: {
				items: 3,
			}
		}
	}).on('changed.owl.carousel', function() {
		carouselService();
	});

  function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this);
			var thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    autoHeight: true
  });

  $('.partners').owlCarousel({
    loop: true,
    smartSpeed: 700,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $(function() {
    $('select').selectize({
      create: true
    });
  });

  $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'fast');
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });

  $(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
  })

})

