/* -------------------------------------------------- */
/* RANDOM PROPS
/* -------------------------------------------------- */

var randomProps = (function randomProps($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('randomProps', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var options = {
		positionDataAttrName: 'position',
		min: 0,
		max: 1920

	};


	/* -------------------------------------------------- */
	/* POSITION
	/* -------------------------------------------------- */

	function position() {

		$('[data-random=' + options.positionDataAttrName + ']').each(function() {

			var $self = $(this),
				x = (Math.random() * ( $self.parent().width() )).toFixed(),
				y = (Math.random() * ( $self.parent().height() * 0.5 )).toFixed();

			$self.css({'position' : 'absolute',
						'z-index' : _.random(0, 10),
						'top' : _.random(-10, 25) + 'em',
						'left' : ( _.random(options.min, $self.parent().width()) * 0.4 ) + 'px'
						//'top' : y + 'px',
						//'left' : x + 'px'
					});

		});

	}

	//$win.on('resize', _.throttle(position, 250, { leading: interval.leading, trailing: interval.trailing } ));

	
	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		position: position

	};


}(jQuery, window, document));
