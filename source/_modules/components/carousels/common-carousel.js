/* -------------------------------------------------- */
/* COMMON CAROUSEL
/* -------------------------------------------------- */

var commonCarousel = (function commonCarousel($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('commonCarousel', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element,
			$carousel = $($element),
			$cell = '.carousel-cell';


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			adaptiveHeight: false
		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$carousel.each(function() {

			var $self = $(this);

			// READY
			$self.on('ready.flickity', function() {

				console.log('Flickity is ready.');

			});

			//$self.flickity(options);
			$self.addClass('is-ready');
			Tween.delayedCall( 1, function() { $self.flickity('resize'); } );
			$self.find('.carousel-lazy-load.is-selected').addClass('is-loaded');


			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			// SETTLE
			$self.on('change.flickity', function() {

				var flkty = $self.data('flickity'),
					element = flkty.selectedElement;

				if (flkty.selectedIndex === 0) {

					//console.log('First cell.');

				}

				if (flkty.selectedIndex === flkty.cells.length - 1) {

					//console.log('Last cell.');

				}

			});


			/* -------------------------------------------------- */
			/* LAZY LOAD
			/* -------------------------------------------------- */

			$self.on('lazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				//console.log(event.originalEvent.type, img.src);

				$self.on('scroll.flickity', function() {

					$(img).addClass('is-loaded');

					if( $(img).hasClass('is-loaded') ) {

						//console.log('Flickity img loaded');
						$(img).closest('.carousel-lazy-load.is-selected').addClass('is-loaded');

					}

					if( $(img).hasClass('flickity-lazyerror') ) {

						//console.log('Flickity img error');
						$(img).closest('.carousel-lazy-load.is-selected').addClass('flickity-lazyerror');

					}

				});

				Tween.delayedCall(1, function() { $self.flickity('resize'); } );

			}).on('bgLazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				//console.log(event.originalEvent.type, img.src);

				$self.on('scroll.flickity', function() {

					$(img).addClass('is-loaded');

					if( $(img).hasClass('is-loaded') ) {

						//console.log('Flickity img loaded');
						$(img).closest('.carousel-lazy-load.is-selected').addClass('is-loaded');

					}

					if( $(img).hasClass('flickity-lazyerror') ) {

						//console.log('Flickity img error');
						$(img).closest('.carousel-lazy-load.is-selected').addClass('flickity-lazyerror');

					}

				});

				Tween.delayedCall(1, function() { $self.flickity('resize'); } );

			});

		});

	}


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
