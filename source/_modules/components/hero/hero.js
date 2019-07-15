/* -------------------------------------------------- */
/* HERO
/* -------------------------------------------------- */

var hero = (function hero($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('hero', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.hero');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */



		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		/*
		function textRotator($element, text) {

			$($element).html(text);

		}
		*/

		if ( $('.quotes').length ) {

			quotes.init('.quote');
			
		}


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		var tl = new Timeline({paused: true});
			tl
			  .staggerFromTo($element.find('ul').children(), 1, {autoAlpha: 0, y: 25},
																{autoAlpha: 1, y: 0, ease: Expo.easeInOut}, 0.05);


			tl.delay(1).play();



		//Tween.set($element.children(), {autoAlpha: 0});

		// HEADING
		/*
		if( $element.find('.hero-copy').find('h1').length ) {


			textRotator($element.find('.hero-copy').find('h1'), "Hi, I'm<br>Sam");


			var mySplitText = new SplitText($element.find('.hero-copy').find('h1'), {type: 'words', wordsClass: 'text-whiteout', reduceWhiteSpace: true}), 
				$mySplitText = mySplitText.words;


			var tl = new Timeline({paused: false, delay: 2, onComplete: restoreText});
				tl
				  .staggerTo($mySplitText, 1, {className: '+=text-whiteout-reveal', ease: Expo.easeOut}, 0.05)
				  .staggerTo($mySplitText, 1, {className: '-=text-whiteout-reveal', delay: 3, ease: Expo.easeOut}, -0.05)
				  
				  .staggerTo($mySplitText, 1, {className: '+=text-whiteout-reveal', delay: 1, onStart: textRotator, onStartParams: [$element.find('.hero-copy').find('h1'), "Test"], ease: Expo.easeOut}, 0.05);



					//.staggerFromTo($mySplitText, 1, {autoAlpha: 0, y: $element.find('.hero-copy').height() * 0.2, scaleY: 0.75, transformOrigin: 'bottom center' },
												 // {autoAlpha: 1, y: 0, scaleY: 1, ease: Expo.easeOut}, 0.05, '-=0');

		}
		*/

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
