/* -------------------------------------------------- */
/* VARS
/* -------------------------------------------------- */

// BROWSERS
var isChrome = browserDetect.browser === 'Chrome',
	isExplorer = browserDetect.browser === 'Explorer',
	isEdge = browserDetect.browser === 'MS Edge',
	isFirefox = browserDetect.browser === 'Fireforx',
	isOpera = browserDetect.browser === 'Opera',
	isSafari = browserDetect.browser === 'Safari';


// DEVICES
var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1,
	isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone') > -1,
	isiPad = navigator.userAgent.toLowerCase().indexOf('ipad') > -1,
	isiPod = navigator.userAgent.toLowerCase().indexOf('ipod') > -1,
	
	isMobile = isAndroid || isiPhone || isiPad || isiPod,
	
	isPortrait = window.innerWidth < window.innerHeight,
	isLandscape = window.innerWidth > window.innerHeight,
	
	//orientationPortrait = isMobile && orientation === 0,
	//orientationLandscape = isMobile && orientation === 90,
	
	isDesktop = !isMobile,
	isTouchScreen = isTouch && isDesktop; // Detects any touch-enabled device that is not a mobile device.


// SCREEN SIZES
var isMobileScreen = window.matchMedia('(min-width: 0) and (max-width: 667px)').matches,
	isTabletScreen = window.matchMedia('(min-width: 668px) and (max-width: 768px)').matches,
	isLaptopScreen = window.matchMedia('(min-width: 769px) and (max-width: 1366px)').matches,
	isDesktopScreen = window.matchMedia('(min-width: 2460px)').matches;


// CACHE
var $isiOS = $('.is-ios'),
	$isAndroid = $('.is-android'),
	$isMobile = $('.is-mobile'),
	//$isTablet = $('.is-tablet'),
	$isDesktop = $('.is-desktop');


/* -------------------------------------------------- */
/* TOUCH
/* -------------------------------------------------- */

function detectTouch() {

	if (isTouch) {
		
		console.log('This device is touch enabled and will disable all :hover states.');
		//alert('This device is touch enabled and will disable all :hover states.');

		try {

			// Prevent exception on browsers not supporting DOM 'styleSheet' properly.
			for (var si in document.styleSheets) {

				var styleSheet = document.styleSheets[si];

				if (!styleSheet.rules) continue;

				for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {

					if (!styleSheet.rules[ri].selectorText) continue;

					if (styleSheet.rules[ri].selectorText.match(':hover')) {
						
						styleSheet.deleteRule(ri);

					}

				}

			}

		}

		catch (ex) {

		}

	}

}


/* -------------------------------------------------- */
/* BROWSERS
/* -------------------------------------------------- */

function detectBrowser() {

	console.log('You are using ' + browserDetect.browser + ' with version ' + browserDetect.version);


	/* -------------------------------------------------- */
	/* CHROME
	/* -------------------------------------------------- */

	if (isChrome) {

	}


	/* -------------------------------------------------- */
	/* EDGE / EXPLORER
	/* -------------------------------------------------- */

	if (isEdge) {

	}


	/* -------------------------------------------------- */
	/* EXPLORER
	/* -------------------------------------------------- */

	if (isExplorer) {

	}


	/* -------------------------------------------------- */
	/* FIREFOX
	/* -------------------------------------------------- */

	if (isFirefox) {

	}


	/* -------------------------------------------------- */
	/* OPERA
	/* -------------------------------------------------- */

	if (isOpera) {

	}


	/* -------------------------------------------------- */
	/* SAFARI
	/* -------------------------------------------------- */

	if (isSafari) {

	}

}


/* -------------------------------------------------- */
/* DEVICES
/* -------------------------------------------------- */

function detectDevice() {

	/* -------------------------------------------------- */
	/* ANDROID
	/* -------------------------------------------------- */

	if (isAndroid) {
		
		console.log('Android device detected.');
		
		$isiOS.addClass('hide');
		$isDesktop.addClass('hide');

	}


	/* -------------------------------------------------- */
	/* APPLE
	/* -------------------------------------------------- */

	if ( isiPhone || isiPad || isiPod ) {
		
		console.log('iOS device detected.');
		
		$isAndroid.addClass('hide');
		$isDesktop.addClass('hide');
		
	}


	/* -------------------------------------------------- */
	/* MOBILE
	/* -------------------------------------------------- */

	if (isMobile) {
		
		console.log('Viewing on mobile device.');
		
		$isDesktop.addClass('hide');
		
	} else {
		
		$isMobile.addClass('hide');
		
	}


	/* -------------------------------------------------- */
	/* DESKTOP
	/* -------------------------------------------------- */

	if (isDesktop) {
		
		console.log('Viewing on desktop / laptop.');
		
		$isMobile.addClass('hide');
		
	} else {
		
		$isDesktop.addClass('hide');
		
	}

}


/* -------------------------------------------------- */
/* SCREEN SIZES
/* -------------------------------------------------- */

function detectScreen() {

	/* -------------------------------------------------- */
	/* MOBILE SCREEN (SMALL)
	/* -------------------------------------------------- */

	if (isMobileScreen) {
		
		console.log('Viewing on MOBILE (SMALL) screen: ' + $win.width() + 'px' );

	}


	/* -------------------------------------------------- */
	/* TABLET SCREEN (MEDIUM)
	/* -------------------------------------------------- */

	if (isTabletScreen) {
		
		console.log('Viewing on TABLET (MEDIUM) screen: ' + $win.width() + 'px' );

	}


	/* -------------------------------------------------- */
	/* LAPTOP (LARGE)
	/* -------------------------------------------------- */

	if (isLaptopScreen) {
		
		console.log('Viewing on LAPTOP (LARGE) screen: ' + $win.width() + 'px' );

	}


	/* -------------------------------------------------- */
	/* DESKTOP (EXTRA LARGE)
	/* -------------------------------------------------- */

	if (isDesktopScreen) {
		
		console.log('Viewing on a DESKTOP (X-LARGE) screen: ' + $win.width() + 'px' );

	}

}
