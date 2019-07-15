/* -------------------------------------------------- */
/* PRINT
/* -------------------------------------------------- */

var print = (function print($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('print', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.print');


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */
		
		var options = {
			addGlobalStyles : false,
			mediaPrint: false,
			stylesheet : null,
			rejectWindow : true,
			noPrintSelector : '.no-print',
			iframe : true,
			append : null,
			prepend : '<div style="top: 1em;">Company</div>'

		};


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$element.on('click', function(e) {

			e.preventDefault();
			win.print(options);

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
