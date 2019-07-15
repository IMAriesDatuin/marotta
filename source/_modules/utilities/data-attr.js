/* -------------------------------------------------- */
/* DATA HELPERS
/* -------------------------------------------------- */

var dataAttr = (function dataAttr($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('dataAttr', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var options = {
		backgroundColorDataAttrName: 'background-color',
		colorDataAttrName: 'color',
		imageDataAttrName: 'image',
		pageDataAttrName: 'page'

	};


	/* -------------------------------------------------- */
	/* COLOR
	/* -------------------------------------------------- */

	// BACKGROUND
	function backgroundColor() {

		var $element = document.querySelectorAll('[data-' + options.backgroundColorDataAttrName + ']');

		for (var i = 0; i < $element.length; i++) {
			 var attribute = $element[i].getAttribute('data-' + options.backgroundColorDataAttrName);
			 $element[i].style.backgroundColor = attribute;
		}
		console.log(attribute);

	}


	// TEXT
	function color() {

		var $element = document.querySelectorAll('[data-' + options.colorDataAttrName + ']');

		for (var i = 0; i < $element.length; i++) {
			 var attribute = $element[i].getAttribute('data-' + options.colorDataAttrName);
			 $element[i].style.color = attribute;
		}
		console.log(attribute);

	}


	/* -------------------------------------------------- */
	/* IMAGE
	/* -------------------------------------------------- */

	function image() {

		var $element = document.querySelectorAll('[data-' + options.imageDataAttrName + ']');

		if (Modernizr.webp) {

			console.log('WebP supported.');

			for (var i = 0; i < $element.length; i++) {
				 var url = $element[i].getAttribute('data-' + options.imageDataAttrName).replace(/jpg|png/ig, "webp");
				 $element[i].style.backgroundImage = 'url(' + url + ')';
			}
			console.log(url);

			//img.src = img.getAttribute('data-webp');

		} else {

			console.log('WebP is not supported.');
			
			for (var i = 0; i < $element.length; i++) {
				 var url = $element[i].getAttribute('data-' + options.imageDataAttrName).replace(/webp/ig, 'png');
				 $element[i].style.backgroundImage = 'url(' + url + ')';
			}
			console.log(url);

			//img.src = img.getAttribute('data-jpg');

		}

	}


	/* -------------------------------------------------- */
	/* PAGE
	/* -------------------------------------------------- */

	function page() {

		/*
		var $element = document.querySelectorAll('[data-' + options.pageDataAttrName + ']');
		
		for (var i = 0; i < $element.length; i++) {
			var attribute = $element[i].getAttribute("data-page");
		}
		console.log(attribute);
		*/

		
		var $page = $('[data-page]').not('main');
		var href = window.location.pathname.split('/').pop();

		if(location.pathname === '/') { // Check if url is at root location.

			$page.attr('data-' + options.pageDataAttrName, 'index');

		} else {

			$page.attr('data-' + options.pageDataAttrName, href);

		}
		
	}

	
	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		backgroundColor: backgroundColor,
		color: color,
		image: image,
		page: page

	};


}(jQuery, window, document));
