/* -------------------------------------------------- */
/* NAV PANEL
/* -------------------------------------------------- */

var navPanel = (function navPanel($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		console.log('navPanel ' + ' 1.0 ' + ' Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $navbar = $('.navbar, .menubar-logo, .menubar-toggle'),
			$menuToggle = $('.menu-toggle'),
			$navPanel = $('.nav-panel'),
			$menu = $('.nav-panel-menu'),
			$social = $('.nav-panel-social'),

			$overlayFade = $('.nav-panel-fade'),
			$particleGrid = $('.nav-panel-particle-grid'),
			$grayscaleDisplacement = $('.grayscale-displacement'),
			$background = $('.nav-panel-background');


		/*
		$slider.find('li').find('.lazy').ripples({
			dropRadius: 20,
			perturbance: 0.03,
			resolution: 256,
			interactive: true,
			//crossOrigin: ''
		});
		*/


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var state = 'is-closed';


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set($menu.children(), {autoAlpha: 0, x: -25});
		Tween.set($social.children(), {autoAlpha: 0, y: 25});

		Tween.set($overlayFade, {autoAlpha: 0});
		Tween.set($particleGrid, {autoAlpha: 0, scale: 1.12});
		Tween.set($grayscaleDisplacement, {autoAlpha: 0});
		Tween.set($background.children(), {scaleX: 0});


		// TIMELINE
		var tl = new Timeline({paused: true, onStart: isOpening, onReverseComplete: isClosed});
			tl.staggerTo($background.children(), 1, {scaleX: 1, ease: Expo.easeInOut}, 0.2)

			  .staggerTo($menu.children(), 1, {autoAlpha: 1, x: 0, className: '+=nav-panel-menu-reveal', ease: Expo.easeOut}, 0.075, 'group-01-=0.25')
			  .staggerTo($social.children(), 1, {autoAlpha: 1, y: 0, ease: Expo.easeOut}, 0.05, 'group-01-=0.25')

			  .to($overlayFade, 1, {autoAlpha: 1, ease: Expo.easeOut}, 'group-01-=0.25')

			  .to($particleGrid, 1, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, 'group-01-=0.25')

			  .to($grayscaleDisplacement, 1, {autoAlpha: 1, ease: Expo.easeOut}, 'group-01+=0.25')

			  .addCallback(isOpen);


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		// TOGGLE
		$menuToggle.on('click touchstart touchmove', function(e) {

			e.preventDefault();
			controller();

		});


		// LINKS
		$menu.find('li').find('a').on('mouseover', function() {

			//Tween.to($grayscaleDisplacement.children(), 1, {autoAlpha: 0.25, ease: Expo.easeOut});

		}).on('mouseout mouseleave', function() {

			//Tween.to($grayscaleDisplacement.children(), 1, {autoAlpha: 1, ease: Expo.easeOut});

		});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		// CONTROLLER
		function controller() {

			if ( state === 'is-opening' || state === 'is-open' ) {

				tl.reverse().timeScale(1.75);

			} else if ( state === 'is-closing' || state === 'is-closed' ) {

				tl.play().timeScale(1.5);

			}

			if ( tl.reversed() ) {

				isClosing();

			}

		}


		// EVENTS
		function isOpening() {

			$navbar.addClass('is-open');
			$navPanel.addClass('is-opening');
			//$navPanel.scrollTop(0);
			scroll.lock();

			state = 'is-opening';
			console.log('Nav Panel ' + state);

			quotes.init.playPause();

		}


		function isOpen() {

			$navPanel.addClass('is-open');
			$$('.is-animating').find('*').addClass('animate-pause');

			state = 'is-open';
			console.log('Nav Panel ' + state);

			listSeparator.init();

		}


		function isClosing() {

			$$('.is-animating').find('*').removeClass('animate-pause');

			state = 'is-closing';
			console.log('Nav Panel ' + state);
			
		}


		function isClosed() {

			$navbar.removeClass('is-open');
			$navPanel.removeClass('is-opening is-open');
			scroll.unlock();

			state = 'is-closed';
			console.log('Nav Panel ' + state);

			quotes.init.playPause();

		}


		/* -------------------------------------------------- */
		/* SWUP API
		/* -------------------------------------------------- */

		document.addEventListener('swup:animationOutStart', function() {

			if( $navPanel.hasClass('is-open') ) {

				controller();

			}

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init
		//controller: controller,
		//$navPanel: $navPanel

	};


}(jQuery, window, document));
