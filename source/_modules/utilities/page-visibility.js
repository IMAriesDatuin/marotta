/* -------------------------------------------------- */
/* PAGE VISIBILITY
/* -------------------------------------------------- */

var pageVisibility = (function pageVisibility($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('pageVisibility', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			onHidden: function(element) {

				console.log('Page is inactive.');

			},
			onVisible: 	function(element) {

				console.log('Page is active');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var pageVisibility = new Visibility(options);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
