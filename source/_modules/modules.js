/* -------------------------------------------------- */
/* APP
/* -------------------------------------------------- */

var modules = (function modules($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('modules', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CORE (RUN ONCE ONLY)
	/* -------------------------------------------------- */

	function core() {

		$doc.foundation();
		detectBrowser();
		detectDevice();
		detectScreen();
		//musicPlayer.init();
		navPanel.init();
		scroll.lock();
		scrollProgress.init();
		submenu.init();

		Tween.delayedCall(interval.delay, listSeparator.init);


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		//if(!isTouch) {
			//grayscaleDisplacement.init();
		//}

		//if(!isEdge && !isSafari) {
			//filmGrain.init();
		//}

	}


	/* -------------------------------------------------- */
	/* MODULES
	/* -------------------------------------------------- */

	function components() {

		/* -------------------------------------------------- */ 
		/* UTILITIES
		/* -------------------------------------------------- */

		detectTouch();
		dataAttr.backgroundColor();
		dataAttr.color();
		//dataAttr.image();
		dataAttr.page();
		//distortion.init();
		//glitch.init();
		headroom.init();
		io.init();
		lazyLoad.init();
		pageVisibility.init();
		print.init();
		randomProps.position();
		//skewScroll.init();
		//smoothScroll.init('main');
		//stackOrder.init();
		//tilt.init();
		//water.init();

		Tween.delayedCall(interval.delay, onScroll.init);


		/* -------------------------------------------------- */
		/* COMPONENTS
		/* -------------------------------------------------- */

		//component.init();

		hero.init();
		//icon.init();

		commonCarousel.init('.carousel');
		cardCarousel.init('.testimonials-carousel');

		//Tween.delayedCall(interval.delay, parallax.init);

		//pages.init();


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		if(!isTouch) {
			//cursor.init();
			magnetic.init();
		}


		if(isTouch) {
			touchFeedback.init();
			waves.init();
		}


		if(!isMobileScreen) {
			//Tween.delayedCall(interval.delay, onScroll.init);
		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		core: core,
		components: components

	};


}(jQuery, window, document));
