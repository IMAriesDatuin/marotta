/* -------------------------------------------------- */
/* GET INFO
/* -------------------------------------------------- */

//removeIf(production)
var get = (function get() {

	'use strict';

	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var name,
		version,
		author;


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */


	// Returns the module / plugin info.
	function info(name, version, author) {

		console.log('Init: ' +  name + ', Ver: ' + version + ', Author: ' + author);

	};


	// Check if scrolling area is 'html' or 'body'.
	console.log(document.scrollingElement || document.documentElement);


	// Returns the stats of the current device.
	console.log(performance.memory);


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		info: info,
		name: name,
		version: version,
		author: author

	};


}());
//endRemoveIf(production)
