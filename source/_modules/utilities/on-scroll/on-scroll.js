/* -------------------------------------------------- */
/* LEGAL
/* -------------------------------------------------- */

var onScroll = (function onScroll($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('onScroll', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.on-scroll');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */



		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		// Ex: data-lax-property="0, 0, height scrolled, property value | loop=0 offset=-100 speed=1"
		// Note on offset: Negative (-) 'offset' values will delay the animation. Positive (+) values will jump or skip ahead of the animation.
		// Note on speed: 0 = no transition, 1 = normal the speed, 2 = double the speed.
		// (document.body.scrollHeight*0.5)

		//window.onload = function() {

			lax.setup();

			function updateLax() {

				lax.update(window.scrollY);
				window.requestAnimationFrame(updateLax);

			};

			window.requestAnimationFrame(updateLax);

		//}


		window.addEventListener('resize', function() {

			//if (window.innerWidth !== window.innerWidth) {

				console.log('Viewport size has changed. Updating laxxx values.');
				lax.updateElements();

			//}

		});


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */



	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
