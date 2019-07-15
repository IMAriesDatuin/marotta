/* -------------------------------------------------- */
/* SUBMENU
/* -------------------------------------------------- */

var submenu = (function submenu($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('submenu', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $menu = $('.menu'),
			$submenu = $('.submenu'),
			$submenuContent = $('.submenu-content'), 
			$submenuToggle = $('.submenu-toggle');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */




		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		$submenuToggle.on('mouseover', function(e) {

			e.preventDefault();

			//var $self = $(this);
			//$self.closest($submenu).addClass('submenu-is-active');

		});


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {

			rowSelector: '> li', // Selector for identifying which elements in the menu are rows that can trigger the above events. Defaults to "> li".
			submenuSelector: '.no-dropdown', // You may have some menu rows that aren't submenus and therefore shouldn't ever need to "activate." If so, filter submenu rows w/ this selector. Defaults to "*" (all elements).
			submenuDirection: 'right', // Direction the submenu opens relative to the main menu. Can be one of "right", "left", "above", or "below". Defaults to "right".
			tolerance: 75, // Bigger = more tolerant for mouse movement precision when entering subnav.


			activate: function(row) { // Function to call when a row is purposefully activated. Use this to show a submenu's content for the activated row.

				var $row = $(row),
					$submenu = $row.find('.submenu-content'),
					//submenuId = $row.data('submenuId'),
					//$submenu = $('#' + submenuId),

					width = $submenu.outerWidth();


				//console.log($row);
				//console.log('Submenu' + submenuId + ' is active.');

				$submenu.addClass('hover');




				// Show the submenu
				$submenu.css({
					display: 'block',
					top: -1,
					left: width - 3,  // main should overlay submenu
				});


			},


			deactivate: function(row) { // Function to call when a row is deactivated.

				var $row = $(row);
					//submenuId = $row.data('submenuId'),
					//$submenu = $('#' + submenuId);

				//console.log('Submenu' + submenuId + ' is no longer active.');
				//$row.find($submenuContent).children().removeClass('hover');

			},


			enter: function() { // Function to call when mouse enters a menu row. Entering a row does not mean the row has been activated, as the user may be mousing over to a submenu.

				console.log('Mouse entering submenu.');

			},


			exit: function() { // Function to call when mouse exits a menu row.

				console.log('Mouse exiting submenu.');

			},


			// Function to call when mouse exits the entire menu. If this returns
			// true, the current row's deactivation event and callback function
			// will be fired. Otherwise, if this isn't supplied or it returns
			// false, the currently activated row will stay activated when the
			// mouse leaves the menu entirely.
			exitMenu: function() {

				console.log('Submenu is no longer listening to events.');

				//$('.submenu-is-active').removeClass('submenu-is-active');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$menu.menuAim(options);


	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
