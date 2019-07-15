/* -------------------------------------------------- */
/* DEFER
/* -------------------------------------------------- */

function deferMedia() {

	var $element = document.getElementsByTagName('iframe');

	for (var i = 0; i < $element.length; i++) {

		if ($element[i].getAttribute('data-src')) {

			$element[i].setAttribute('src',$element[i].getAttribute('data-src'));

		}

	}
		
}

window.onload = deferMedia;
