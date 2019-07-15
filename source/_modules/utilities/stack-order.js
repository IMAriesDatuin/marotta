/* -------------------------------------------------- */
/* STACK ORDER (Z-INDEX)
/* -------------------------------------------------- */

var stackOrder = (function stackOrder($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('stackOrder', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */		

		var $element = $('.stack-order'),
			$ignore = $('.no-stack-order');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */	

		var zIndexNum = 1;


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		$element.children().not($ignore).each(function(index) {

			var $self = $(this);
			$self.css({
				'z-index' : zIndexNum + index,
				'position' : 'relative'
			});

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
