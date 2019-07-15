/* -------------------------------------------------- */
/* CURSOR
/* -------------------------------------------------- */

var cursor = (function cursor($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('cursor', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		// Cursor components
		var $cursor = $('.cursor'),
			$cursorCore = $('.cursor-core'),
			$cursorTrail = $('.cursor-trail'),
			$cursorCircular = $('.cursor-circular');


		// Interactive elements
		var $cursorPrevious = $('.previous'),
			$cursorNext = $('.next'),
			$cursorElements = $('a, button, .button, .cursor-hover, .dot'),
			$cursorIgnore = $('.no-cursor');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var active = false;


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set($cursorCircular.find('.cursor-circular-wavelength'), {autoAlpha: 0, rotation: '0', svgOrigin:'40 40'});


		// TIMELINE
		var tlCursorCircularWavelength = new Timeline({paused: true});
			tlCursorCircularWavelength.to([$cursorCircular.find('.cursor-circular-foreground'),$cursorCircular.find('.cursor-circular-background')], 0.1, {autoAlpha: 0, ease: Expo.easeOut}, 'group-01')
									  .to($cursorCircular.find('.cursor-circular-wavelength'), 0.1, {autoAlpha: 1, directionalRotation: '360_cw', ease: Expo.easeOut}, 'group-01')
									  .to($cursorCircular.find('.cursor-circular-wavelength'), 0.1, {autoAlpha: 0, directionalRotation: '0_cw', ease: Expo.easeOut}, 'group-02')
									  .to([$cursorCircular.find('.cursor-circular-foreground'),$cursorCircular.find('.cursor-circular-background')], 0.1, {autoAlpha: 1, ease: Expo.easeOut}, 'group-02');

		function drawSVG() {
			
			//console.log(_.random(180, 360));
			Tween.to($cursorCircular.find('.cursor-circular-foreground'), 0.75, {drawSVG: '100%', ease: Expo.easeInOut, delay: 0.25, overwrite: 'true'});
		}

		function resetSVG() {
			Tween.to($cursorCircular.find('.cursor-circular-foreground'), 0.75, {drawSVG: (window.scrollY / ( $doc.height() - $win.height() ) * 100) + '%', ease: Expo.easeInOut, delay: 0, overwrite: 'true'});
		}


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		// DEFAULT
		$html.on('mousedown', function() {
			
			$cursor.addClass('is-down');

			tlCursorCircularWavelength.restart();
			//drawSVG();

		}).on('mouseleave mouseup', function() {

			$cursor.removeClass('is-down');

			//tlCursorCircularWavelength.reverse();
			//resetSVG();

		});


		// ELEMENT INERACTION (HOVER, CLICK, MOUSEENTER, MOUSEDOWN, MOUSELEAVE, ETC...)
		$cursorElements.not($cursorIgnore).on('mouseenter', function() {

			$cursor.addClass('is-hovering');
			drawSVG();

		}).on('mousedown', function() {
			
			$cursor.addClass('is-down');
			tlCursorCircularWavelength.play(0);

		}).on('mouseleave', function() {

			$cursor.removeClass('is-hovering is-down');
			resetSVG();

		});


		// PREVIOUS / NEXT
		$cursorPrevious.each(function() {

			var $self = $(this);

			$self.on('mouseenter', function() {

				$cursor.addClass('is-previous is-hovering');

			}).on('mouseleave mouseout mouseup', function() {

				$cursor.removeClass('is-previous is-hovering');

			});

		});

		$cursorNext.each(function() {

			var $self = $(this);

			$self.on('mouseenter', function() {

				$cursor.addClass('is-next is-hovering');

			}).on('mouseleave mouseout mouseup', function() {

				$cursor.removeClass('is-next is-hovering');

			});

		});


		// IGNORE CURSOR INTERACTION
		$cursorIgnore.on('mouseover', function() {

			$cursor.addClass('no-cursor');

		}).on('mousedown', function() {
			
			$cursor.addClass('no-cursor');

		}).on('mouseout mouseup', function() {

			$cursor.removeClass('no-cursor');

		}).on('mouseleave mouseup', function() {

			$cursor.removeClass('no-cursor');

		});


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('mousemove', _.throttle( function(e) { 

			var mouseX = e.clientX,
				mouseY = e.clientY;

			function mousemove() {

				if (!active) {

					//cursor.style.opacity = 1;
					Tween.set(cursor, {autoAlpha: 1});
					active = true;

				}

				//cursor.css({top: mouseY, left: mouseX});
				Tween.to($cursor, 0.25, { css: {top: mouseY, left: mouseX} });

				if(!isEdge || !isExplorer) {
					Tween.to($cursorCircular, 0.08, { css: {top: e.clientY, left: e.clientX} });
				}

			}

			raf(mousemove);

		}, 0, { leading: interval.leading, trailing: interval.trailing } ));


		$win.on('mouseover', function(e) {

			//Tween.to($cursor, 0.5, {opacity: 0, ease: Expo.easeInOut});
			active = false;

		}).on('mouseenter', function(e) {

			Tween.to($cursor, 0.5, {autoAlpha: 1, ease: Expo.easeInOut});

		}).on('mouseleave', function(e) {

			Tween.to($cursor, 0.5, {autoAlpha: 0, ease: Expo.easeInOut});

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
