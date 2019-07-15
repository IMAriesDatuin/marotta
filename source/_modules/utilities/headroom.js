/* -------------------------------------------------- */
/* HEADROOM
/* -------------------------------------------------- */

var headroom = (function headroom($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('headroom', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.headroom');


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			scroller: window, // Element to listen to scroll events on, defaults to 'window'.
			offset: $('main').find('section').first().height() * 0.2, // Vertical offset in px before element is first unpinned.
			//offset: 75, // Vertical offset in px before element is first unpinned.
			tolerance: { // Or you can specify tolerance individually for up / down scroll.
				up: 0,
				down: 0
			},

			classes: {
				initial: 'is-ready', // Element is initialised.
				top: 'is-top', // When above offset.
				notTop: 'is-not-top', // When below offset.
				bottom: 'is-bottom', // When at bottom of scoll area.
				notBottom: 'is-not-bottom', // when not at bottom of scroll area.
				pinned: 'is-scrolling-up', // When scrolling up.
				unpinned: 'is-scrolling-down' // When scrolling down.
			},

			onTop: function(element) {

				//console.log('At top of page (above offset if defined).');

			},

			onNotTop: function(element) {

				//console.log('Away from top of page (below offser if defined).');
				
			},

			onBottom: function(element) {

				//console.log('At bottom of page.');

			},

			onNotBottom: function(element) {

				//console.log('Moving away from bottom of page.');

			},

			onPin: function(element) {

				//console.log('Scrolling up.');

			},

			onUnpin: function(element) {

				//console.log('Scrolling down.');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$element.headroom(options);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
