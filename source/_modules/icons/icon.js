/* -------------------------------------------------- */
/* ICON
/* -------------------------------------------------- */

var icon = (function icon($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('icon', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $iconContainer = $('.icon'),
			$iconLotus = $('.icon-lotus'),
			$iconMuscle = $('.icon-muscle'),
			$iconClipboard = $('.icon-clipboard');


		/* -------------------------------------------------- */
		/* ANIMATIONS: CORE
		/* -------------------------------------------------- */

		var tlIconLotus = new Timeline({paused: true, onReverseComplete: controller});
			tlIconLotus.staggerFrom($iconLotus.children(), 1, {scale: 0, autoAlpha: 0, transformOrigin: 'bottom center', ease: Expo.easeInOut}, 0.05);


		var tlIconMuscle = new Timeline({paused: true, onReverseComplete: controller});
			tlIconMuscle.staggerFrom($iconMuscle.children().children(), 1, {autoAlpha: 0, scaleY: 0.9, transformOrigin: 'bottom center', ease: Expo.easeInOut}, 0.05);


		var tlIconClipboard = new Timeline({paused: true, onReverseComplete: controller});
			tlIconClipboard.staggerFrom($iconClipboard.find('.body').children(), 0.75, {autoAlpha: 0, scale: 0, transformOrigin: 'center center', ease: Expo.easeInOut}, 0.02, 'group-01')
						   .fromTo($iconClipboard.find('.checkmark'), 0.5, {drawSVG: '0%'},
																		   {drawSVG: '100%', delay: 1, ease: Expo.easeOut}, 'group-01-=0.5')
						   .staggerFrom($iconClipboard.find('.checkbox').children(), 0.75, {autoAlpha: 0, scale: 0, transformOrigin: 'center center', ease: Expo.easeInOut}, -0.02, 'group-01')
						   .staggerFrom($iconClipboard.find('.lines').children(), 0.75, {autoAlpha: 0, scaleX: 0, transformOrigin: 'left center', ease: Expo.easeInOut}, 0.02, 'group-01');


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		/*
		$iconContainer.each(function(i, e) {

			var $self = $(this);
			//e.hover = tl;

			$self.hover(function() {

				console.log('Mouseover');


			}, function() {

				console.log('Mouseout');

			});

		});
		*/


		function controller() {

			if( $iconClipboard.hasClass('in-view') ) {

				/*
				if(tlIconClipboard.progress() === 1) {

					tlIconClipboard.restart();

				}
				*/

				if( tlIconClipboard.reversed() ) {

					tlIconClipboard.play();

				} else {

					tlIconClipboard.play();

				}

			}

			if( $iconMuscle.hasClass('in-view') ) {

				if( tlIconMuscle.reversed() ) {

					tlIconMuscle.play();

				} else {

					tlIconMuscle.play();

				}

			}

			if( $iconLotus.hasClass('in-view') ) {

				if( tlIconLotus.reversed() ) {

					tlIconLotus.play();

				} else {

					tlIconLotus.play();

				}

			}


		}


		function resetTimeline() {

			tlIconClipboard.reverse();
			tlIconMuscle.reverse();
			tlIconLotus.reverse();

		}


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		//$iconContainer.on('mouseover touchstart', function(){ controller(); } );
		$iconClipboard.on('mouseover touchstart', function() { tlIconClipboard.reverse(); } );
		$iconMuscle.on('mouseover touchstart', function() { tlIconMuscle.reverse(); } );
		$iconLotus.on('mouseover touchstart', function() { tlIconLotus.reverse(); } );


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.icon',
			threshold: 0,
			thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
			auto_unobserve: false,
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entering viewport: ', element);
				$(element).addClass('in-view');
				controller();

			},

			callback_exit: function(element) {

				//console.log('Exiting viewport: ', element);
				$(element).removeClass('in-view');
				resetTimeline();

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init
		//init.content: content,
		//init.websites: websites

	};


}(jQuery, window, document));
