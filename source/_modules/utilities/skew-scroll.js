/* -------------------------------------------------- */
/* SKEW SCROLL
/* -------------------------------------------------- */

var skewScroll = (function skewScroll($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('skewScroll', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.skew-scroll');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var currentScrollY = 0,
			documentHeight = 0,
			windowHeight = 0,
			velocity = 0,
			total = 0,
			strength = 0.75,
			amount = 2,
			ticking = false;


		/* -------------------------------------------------- */
		/* ANIMATION
		/* -------------------------------------------------- */

		Tween.set($element, {skewType: 'simple', skewY: 0, transformOrigin: 'left center'});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function addEvent() {

			Tween.ticker.addEventListener('tick', animate);

		}


		function removeEvent() {

			Tween.ticker.removeEventListener('tick', animate);
			
		}


		function animate() {

			currentScrollY += (window.pageYOffset - currentScrollY) * strength;
			var velocity = (window.pageYOffset - currentScrollY) / 20;
			total = Math.min(Math.max(velocity, -amount), amount);

			if(total < 0) {

				//console.log('Negative');
				Tween.to($element, strength * 0.25, {skewY: total + 'deg', transformOrigin: 'right center', ease: Expo.easeOut});

			} else {

				//console.log('Positive');
				Tween.to($element, strength * 0.25, {skewY: total + 'deg', transformOrigin: 'left center', ease: Expo.easeOut});

			}

		}


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('scrollstart', _.throttle(addEvent, interval.update, { leading: interval.leading, trailing: interval.trailing } ));
		$win.on('scrollstop', _.throttle(removeEvent, interval.update, { leading: interval.leading, trailing: interval.trailing } ));

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
