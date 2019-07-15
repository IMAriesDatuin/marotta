/**
 * Written by Mineo Okuda on 01/03/18.
 *
 * Mineo Okuda - development + design
 * https://willstyle.co.jp
 * https://github.com/min30327
 *
 * MIT license.
 */


/**
 * Written by Mineo Okuda on 01/03/18.
 *
 * Mineo Okuda - development + design
 * https://willstyle.co.jp
 * https://github.com/min30327
 *
 * MIT license.
 */
// First we get the elements we need, the body and our container on which
// we are going to apply a smooth scroll. You will always need a container
// to apply a smooth scroll. You will not be able to apply it directly to
// the body.

/* -------------------------------------------------- */
/* SMOOTH SCROLL
/* -------------------------------------------------- */

var smoothScroll = (function smoothScroll($, window, document, undefined) {

	'use strict';

	function init(element) {

		//removeIf(production)
		get.info('smoothScroll', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $body = document.body,
			$main = document.querySelector(element); // We define variables we will need later. 2 variables to store the scroll position and 2 variables to store the container position.


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var sx = 0,
			sy = 0,
			dx = sx,
			dy = sy; // The trick is to set a height to the body to keep the browser scroll bar.


		/* -------------------------------------------------- */
		/* MAIN
		/* -------------------------------------------------- */

		$body.style.height = $main.clientHeight + 'px'; // Then we fix our container so it won't move when the user scrolls. We will move it ourself with the Linear Interpolation and translations.

		$main.style.position = 'relative';
		$main.style.top = 0;
		$main.style.left = 0; // We bind a scroll event to the window to watch scroll position.

		window.addEventListener('scroll', scroll);


		function scroll() { // Then we start a `requestAnimationFrame` loop.

		  // We only update the scroll position variables.
		  sx = window.pageXOffset;
		  sy = window.pageYOffset;

		}


		window.requestAnimationFrame(render);

		function render() { // This is our Linear Interpolation method.

		  // We calculate our container position by using our Linear Interpolation method.
		  dx = lerp(dx, sx, 0.1);
		  dy = lerp(dy, sy, 0.1);
		  dx = Math.floor(dx * 100) / 100;
		  dy = Math.floor(dy * 100) / 100; // Finally we translate our container to its new positions. Don't forget to add a minus sign because the container needs to move in the opposite direction of the window scroll.

		  $main.style.transform = "translate(-".concat(dx, "px, -").concat(dy, "px)"); // And we loop again.

		  window.requestAnimationFrame(render);

		}


		function lerp(a, b, n) {

			return (1 - n) * a + n * b;

		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
