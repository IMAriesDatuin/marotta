/* -------------------------------------------------- */
/* PAGE MANAGER
/* -------------------------------------------------- */

var pageManager = (function pageManager($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('pageManager', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $pageTransition = $('.page-transition');


	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var rootLink = '/';


	/* -------------------------------------------------- */
	/* ANIMATIONS
	/* -------------------------------------------------- */

	// SET
	//Tween.set($logo, {autoAlpha: 0, y: 50});


	// TIMELINE



	/* -------------------------------------------------- *	/
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function checkLink() {

		/*
		console.log(url.href);		// https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
		console.log(url.protocol);	// https:
		console.log(url.host);		// developer.mozilla.org:8080
		console.log(url.hostname);	// developer.mozilla.org
		console.log(url.port);		// 8080
		console.log(url.pathname);	// /en-US/search
		console.log(url.search);	// ?q=URL
		console.log(url.hash);		// #search-results-close-container
		console.log(url.origin);	// https://developer.mozilla.org:8080
		*/

		var currentOrigin = location.origin,
			//currentPath = location.pathname,
			currentPath = location.pathname.split('/').pop(),
			currentFullPath = location.href;


		console.log('Currently viewing: ' + currentPath);


		$('a[href^="' + rootLink + '"]:not(.button):not([data-no-swup])').removeClass('is-active');
		$('a[href^="' + rootLink + '"]:not(.button):not([data-no-swup])').parent().removeClass('is-active');


		if(location.pathname === '' + rootLink + '') { // Check if url is at root location.

			$('a[href="' + rootLink + '"]:not(.button):not([data-no-swup]').addClass('is-active');
			$('a[href="' + rootLink + '"]:not(.button):not([data-no-swup]').parent().addClass('is-active');

		} else {

			$('a[href^="' + rootLink + '' + currentPath + '"]:not(.button):not([data-no-swup]').addClass('is-active');
			$('a[href^="' + rootLink + '' + currentPath + '"]:not(.button):not([data-no-swup]').parent().addClass('is-active');

		}

	}


	function isLoading() {

		console.log('Content is loading...');
		$pageTransition.removeClass('is-loaded');
		scroll.lock();

	}


	function isLoaded() {

		console.log('Content is loaded successfully.');
		$pageTransition.addClass('is-loaded');
		scroll.unlock();
		//checkLink();

	}


	function intro() {
		
		var tl = new Timeline({paused: false});
			tl.to($pageTransition, 0.5, {autoAlpha: 0, delay: 2, ease: Expo.easeOut})
			  .addCallback(isLoaded);
	
	}


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	// SWUP CORE
	var options = {
		LINK_SELECTOR: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
		FORM_SELECTOR: 'form[data-swup-form]',
		elements: ['#swup'],
		animationSelector: '[class*="swup-transition"]',
		pageClassPrefix: '',
		cache: false,
		preload: false,
		scroll: true,
		doScrollingRightAway: false,
		animateScroll: true,
		scrollFriction: 0.4,
		scrollAcceleration: 0.05,
		support: true,
		debugMode: true,
		animateHistoryBrowsing: true,
		plugins: [],

		skipPopStateHandling: function(event){

			if (event.state && event.state.source === 'swup') {

				return false;

			}

			return true;

		},

		animations: {

			'*': {

				in: function(next) {

					// TRANSITION OUT (PULL BACK THE CURTAINS
					var tl = new Timeline({paused: false});
						tl.to($pageTransition, 1, {autoAlpha: 1, ease: Expo.easeInOut})
						  .addCallback(next)
						  .addCallback(isLoaded);

				},

				out: function(next) {

					// TRANSITION IN (BRIEF INTERMISSION)
					var tl = new Timeline({paused: false});
						tl.addCallback(isLoading)
						  .to($pageTransition, 1, {autoAlpha: 0, ease: Expo.easeInOut})
						  .addCallback(next);

				}

			}

		}

	};


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	var swup = new Swupjs(options);


	/* -------------------------------------------------- */
	/* EVENTS
	/* -------------------------------------------------- */

	docReady(function() {

		intro();
		modules.core();
		modules.components();

		if(isExplorer) {
			$html.addClass('visible');
		}

	});


	//swup.on('contentReplaced', modules.components());
	document.addEventListener('swup:contentReplaced', function() {

		modules.components();

	});


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		//init: init

	};


}(jQuery, window, document));
