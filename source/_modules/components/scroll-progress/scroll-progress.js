/* -------------------------------------------------- */
/* SCROLL PROGRESS
/* -------------------------------------------------- */

var scrollProgress = (function scrollProgress($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('scrollProgress', '1.0', 'Aries Datuin');
		//endRemoveIf(production)
	

		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $scrollProgress = $('.scroll-progress'),
			$scrollProgressCursor = $('.cursor').find('.cursor-circular');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var currentScrollY = 0,
			documentHeight = 0,
			windowHeight = 0,
			total = 0,
			ticking = false;


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set($scrollProgressCursor.find('.cursor-circular-foreground'), {drawSVG: '0%'});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function animate() {

			//console.log(total + '%');
			Tween.staggerTo($scrollProgress.find('.scroll-progress-bar').find('span'), 2, {scaleY: (total * 1), ease: Expo.easeOut}, 0.05);
			Tween.to($scrollProgressCursor.find('.cursor-circular-foreground'), 1, {drawSVG: (total * 100) + '%', ease: Expo.easeOut});
			//item[0].style.width = currentScrollY + 100 + 'px';
			ticking = false;

		}


		function update() {

			currentScrollY = window.scrollY; // No IE8.
			documentHeight = $doc.height();
			windowHeight = $win.height();
			total = currentScrollY / (documentHeight - windowHeight);
			request();

		}


		function request() {

			if(!ticking) {

				raf(animate);

			}

			ticking = true;

		}


		update();


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('scroll', _.throttle(update, interval.update, { leading: interval.leading, trailing: interval.trailing } ));

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
