/* -------------------------------------------------- */
/* SCROLL LOCK
/* -------------------------------------------------- */

var scroll = (function scroll($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('scrollLock', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $element = document.querySelector('.is-unlocked');


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	// ENABLE / DISABLE CONTENT
	function lock() {

		console.log('Content is locked.');
		$html.addClass('is-locked');
		bodyScrollLock.disableBodyScroll($element);

	}

	function unlock() {
		
		console.log('Content is unlocked.');
		$html.removeClass('is-locked');
		bodyScrollLock.enableBodyScroll($element);
		//bodyScrollLock.clearAllBodyScrollLocks();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		lock: lock,
		unlock: unlock

	};


}(jQuery, window, document));
