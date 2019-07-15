/* -------------------------------------------------- */
/* REQUEST ANIMATION FRAME + SET TIMEOUT (FALLBACK)
/* -------------------------------------------------- */

window.raf = (function() {

	return	window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			function( callback ) {
				window.setTimeout(callback, 1000 / 60);

			};

})();


window.cancelRaf = (function() {
	
	return	window.cancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.msCancelAnimationFrame ||
			window.oCancelAnimationFrame ||
			function( callback ) {
				window.setTimeout(callback, 1000 / 60);
			};

})();
