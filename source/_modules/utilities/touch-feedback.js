/* -------------------------------------------------- */
/* TOUCH FEEDBACK
/* -------------------------------------------------- */

var touchFeedback = (function touchFeedback($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('touchFeedback', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.button, .watch-touch');


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		// Apply a '.is-touch' class to show ':hover' or ':focus' and ':active' states on touch devices.
		$element.addClass('is-touch');

		$element.on('touchstart', function() {
		
			var $self = $(this);
			$self.addClass('is-active');
			//Tween.to($self, 0.5, {x: 0, y: 1, scale: 0.98, className: '+=is-active', ease: Expo.easeInOut});
		
		}).on('touchend touchleave touchmove', function() {
		
			var $self = $(this);
			$self.removeClass('is-active');
			//Tween.to($self, 0.25, {x: 0, y: 0, scale: 1, className: '-=is-active', ease: Expo.easeOut});
			
		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
