/* -------------------------------------------------- */
/* LEGAL
/* -------------------------------------------------- */

var legal = (function legal($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('legal', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $element = $('.legal');


	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var	cookiePrivacyPolicy = 'privacy-policy',
		valuePrivacyPolicy = 'accepted',
		cookieExpireDate = 30,
		cookieSecure = false;


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function checkCookie() {
		
		if ( Cookies(cookiePrivacyPolicy) ) {	

			console.log( Cookies.get(cookiePrivacyPolicy) + ' cookie found! Visitor has already accepted Privacy and Cookie Policy.');
			$element.addClass('hide');

		} else {

			console.log('First visit. User has not accepted Privacy / Cookie Policy yet.');
			//Tween.to($element, 0.5, {display: 'block', opacity: 1, y: 0, ease: Power4.easeOut});

		}

	}


	function createCookie() {

		console.log('Cookie created for visitor.');
		Cookies.set(cookiePrivacyPolicy, valuePrivacyPolicy, { expires: cookieExpireDate, secure: cookieSecure });

	}


	/* -------------------------------------------------- */
	/* LISTENERS
	/* -------------------------------------------------- */

	$element.find('.munch-munch').on('click', function(e) {

		e.preventDefault();

		var $self = $(this);
		Tween.to($self.parent(), 0.5, {display: 'none', opacity: 0, scale: 0.9, y: $self.parent().height() * 0.2, ease: Back.easeInOut, onComplete: createCookie});

	});


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	checkCookie();


	/* -------------------------------------------------- */
	/* HELPERS
	/* -------------------------------------------------- */

	/*
	if ( window.location.hash === '#delete' ) {
		
		console.log( Cookie.get(cookiePrivacyPolilcy) + ' deleted.');
		Cookies.remove(cookiePrivacyPolicy);
		
	}
	*/


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		//init: init

	};


}(jQuery, window, document));
