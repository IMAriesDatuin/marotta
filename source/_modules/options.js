/* -------------------------------------------------- */
/* OPTIONS
/* -------------------------------------------------- */

// THROTTLE / DEBOUNCE INTERVAL
var interval = {	
	delay: 1,
	update: 66,
	trailing: true,
	leading: true
};


// ELEMENTS
var $win = $(window),
	$doc = $(document),
	$html = $('html'),
	$body = $('body'),
	$main = $('main');


// ANIMATION ENGINE
var Tween = TweenMax,
	Timeline = TimelineMax;
