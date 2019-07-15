/* -------------------------------------------------- */
/* WAVE
/* -------------------------------------------------- */

var waves = (function waves($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('waves', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */
		
		var	$element = $('.button'),
			$ignore = $('.no-waves');
		

		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */
			
		var options = {
			// Delay showing Waves effect on touch
			// and hide the effect if user scrolls
			// (0 to disable delay) (in milliseconds)
			duration: 600,

			// How long Waves effect duration 
			// when it's clicked (in milliseconds)
			delay: 600
		};
	   
		
		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		//buttonElement.addClass('overflow-hidden');
		Waves.attach($element.not($ignore), ['waves-float', 'waves-light']);

		/*
		Waves.attach(element.not(ignore), ['waves-block', 'waves-float', 'waves-light']);
		Waves.attach(element.not(ignore), ['waves-button', 'waves-float', 'waves-light']);
		Waves.attach(element.not(ignore), ['waves-circle', 'waves-float', 'waves-light']);
		*/

		var waves = new Waves.init(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//Waves.calm(element);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
