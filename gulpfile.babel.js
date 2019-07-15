/* -------------------------------------------------- */
/* MODULES
/* -------------------------------------------------- */

// CORE
import gulp from 'gulp'; // Core Gulp module.


// SPLIT TASKS (REGISTER)
//import register from 'gulp-hub'; // Split tasks into multiple chunks or modules.
//const hub = new register(['tasks/*.js']); /* Load some files into the registry. */
//gulp.registry(hub); /* Tell gulp to use the tasks just loaded. */


// STREAMING
import cache from 'gulp-cached'; // Keep track and cache tasks in memory that run through the stream.
import changed from 'gulp-changed'; // Keep track and cache tasks in memory that run through the stream.


// UTILITIES
import _if from 'gulp-if'; // Allows for conditional operators (if, &&, ||, ==, ===, <, >) in pipe streams.
import beep from 'beepbeep'; // Audio cue on event.
import bump from 'gulp-bump'; // Version tracking used in conjunction with semver.
import deleteAssets from 'del'; // Delete files and directories.
import deleteEmpty from 'delete-empty'; // Delete empty directories.
import fileSync from 'fs'; // Read, sync and parse JSON files.
import open from 'gulp-open'; // Access and open files in a browser.
import path from 'path'; // Resolves pathing issues.
import prompt from 'gulp-prompt'; // Allow user inputs.
import removeCode from 'gulp-remove-code'; // Remove sections of code from files based on conditions.
import rename from 'gulp-rename'; // Rename directories and file names.
import replaceJSON from 'gulp-json-replace'; // Replaces strings from JSON data.
import replaceString from 'gulp-replace'; // Find and replace string or text.
import rev from 'gulp-rev'; // File revisioning.
import revRewrite from 'gulp-rev-rewrite'; // Rewrite occurrences of file names which have been renamed by gulp-rev.
import revDelete from 'gulp-rev-delete-original'; // Delete the original file rewritten by gulp-rev or gulp-rev-all.
import revFormat from 'gulp-rev-format'; // Formatting options for revisioned files.
import semver from 'semver'; // Semantic versioning.
import shell from 'gulp-exec'; // Run shell commands in pipeline.
import sourcemaps from 'gulp-sourcemaps'; // Generate JS or CSS sourcemaps.
import util from 'gulp-util'; // For logging tasks and process streams.
import zip from 'gulp-zip'; // ZIP compress files.


// SERVER
import awsPublish from 'gulp-awspublish'; // Push files to AWS S3 Bucket.
import awsSDK from 'aws-sdk'; // Official AWS SDK for JavaScript, available for browsers and mobile devices, or Node.js backends.
import browserSync from 'browser-sync'; browserSync.create(); // Sync and update changes for local development.
import browserSyncHTMLInjector from 'bs-html-injector'; // Plugin to update (inject) HTML changes similar to CSS injection.
import ftp from 'vinyl-ftp'; // Deploy to server.
import git from 'gulp-git'; // Push files to Github.


// HTML
import a11y from 'gulp-a11y'; // Performs an accessibility audit.
import accessibility from 'gulp-accessibility'; // Performs an accessibility audit.
import concat from 'gulp-concat'; // Bundle JS and CSS files.var critical = require('critical').stream;
import htmlMinify from 'gulp-htmlmin'; // Minify HTML files.
import htmlReplace from 'gulp-html-replace'; // Replace build blocks in HTML files.
import inject from 'gulp-inject'; // Inject JS and CSS files.
import noopener from 'gulp-noopener'; // Inserts 'rel=noopener' to links that open in a new window.
import panini from 'panini'; // Foundation Handlebars templating engine.
import favicon from 'gulp-real-favicon'; // Generate favicons.
import webfontloader from 'inject-webfontloader'; // Inject WebFontLoader.
const critical = require('critical').stream; // Inline critical CSS.


// JS
import babel from 'gulp-babel'; // JavaScript converter and compiler.
import defer from 'gulp-defer'; // Moves render blocking JavaScript and CSS files into a deferred loading section.
import jsLint from 'gulp-jshint'; // Detect errors and potential problems in JavaScript syntax.
import jsMinify from 'gulp-uglify'; // Minify JS files.
import modernizr from 'gulp-modernizr'; // Implement modernizr for fallback scripts.


// CSS
import cleanCSS from 'gulp-clean-css'; // Minify CSS files.
import postCSS from 'gulp-postcss'; // CSS Pre and post processer.
import postCSSAutoprefixer from 'autoprefixer'; // Adds vendor prefixes using data from caniuse.com.
import postCSSCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors'; // Combine similar CSS selectors.
import postCSSMediaQueries from 'css-mqpacker'; // Combine and re-order media queries.
import purgecss from 'gulp-purgecss'; // Removes unused CSS in production files. Note: This will enable ':hover' states on touch devices.
import scss from 'gulp-sass'; // Compile SASS files.
import sassCompiler from 'node-sass'; // SASS Compiler.
import scssGlob from 'gulp-sass-glob'; // Glob imports for SASS.
import scssLint from 'gulp-sass-lint'; // Detect errors and potential problems in SCSS syntax.


// ASSET
import imageMinify from 'gulp-imagemin'; // Compress raster image assets.
import raster from 'gulp-raster'; // Raster (JPG, PNG) SVG assets.
import svgMinify from 'gulp-svgmin'; //Compress SVG assets.
import webp from 'gulp-webp'; // Convert image assets to WebP format.


// CACHE / CRAWLING / TRACKING
import fullstory from 'inject-fullstory'; // Inject FullStory tracking.
import serviceworker from 'inject-serviceworker'; // Inject Service Worker.
import ga from 'gulp-ga'; // Inject Google Analytics.
import generateSitemap from 'gulp-sitemap'; // Generate a sitemap.
import gtm from 'gulp-gtm'; // Inject Google Tag Manager.
import robotstxt from 'gulp-robots'; // Generate robots.txt.
import workbox from 'workbox-build'; // Integrate Service Worker to leverage precache features.


/* -------------------------------------------------- */
/* IMPORTS
/* -------------------------------------------------- */

// VARIABLES
import {files, system, config, framework, pkg, paths, jsMinifyOptions, postCSSPlugins, purgeCSSOptions, cleanCSSOptions, htmlMinifyOptions, svgMinifyOptions, appIconsOptions} from './tasks/variables';


/* -------------------------------------------------- */
/* MODE
/* -------------------------------------------------- */

// VARIABLES
let production = config.compiler.production,
	serverStatus;


// PRODUCTION SWITCH
export const mode = (done) => {

	production = false;

	if (production === false) {

		console.log(`Mode: Development`);

	} else {

		console.log(`Mode: Production`);

	}

	return done();

}


// SERVER SWITCH
if ( fileSync.existsSync(files.server) ) {

	serverStatus = true;
	//console.log( files.server + ' exists. Server status: ' + serverStatus );

} else {

	serverStatus = false;
	//console.log( files.server + ' does not exists. Server status: ' + serverStatus );

	serverconfig();

}


/* -------------------------------------------------- */
/* JSON
/* -------------------------------------------------- */

// REVISION MANIFEST
export const revconfig = (done) => {

	if ( production && config.versioning.scripts.allow ) {

		const json = {


		}, data = JSON.stringify(json, null, '\t');


		// Check if configuration file exists.
		if ( !fileSync.existsSync(files.revmanifest) ) {

			console.log(`Cound not find a manifest file. One will be created for you.\nFile generated and saved to: ${paths.rootPath} '\\' ${files.revmanifest}`);

			fileSync.writeFile(files.revmanifest, data, 'utf8', function() {

				console.log(`The manifest file is used to store revised file name references.`);

			});

			return done();

		} else {

			console.log(`A manifest file already exists.`);

			return done();

		}

	} else {

		console.log(`Versioning is disabled for this build. Bypassing task.`);

		return done();

	}

}


// SEVER CONFIGURATION
export const serverconfig = (done) => {

	const json = {

				'aws': {
					'upload': false,
					'dist': ['./your-production-folder'],
					'region': 'us-west-1',
					'bucket': 'your.bucket.com',
					'accessKeyId': '',
					'secretAccessKey': '',
					'cachecontrol': 'max-age=315360000, no-transform, public',
					'cache': false,
					'sync': true,
					'gzip': true,
					'signatureVersion': 'v3',
					'confirm': true
				},

				'git': {
					'upload': true,
					'dist': ['./your-production-folder'],
					'promise': 'github.com/username/repo',
					'repo': 'https://github.com/username/repo.git',
					'origin': 'origin',
					'branch': 'master',
					'user': 'Username',
					'password': 'Password',
					'message': ['Initial commit.'],
					'timeOffset': 1000,
					'quiet': false,
					'confirm': true
				},

				'ftp': {
					'upload': false,
					'dist': ['./your-production-folder'],
					'host': '',
					'path': './remote-path',
					'path': 'dev/build',
					'user': 'Username',
					'password': 'Password',
					'secure': false,
					'parallel': 10,
					'maxConnections': 5,
					'timeOffset': 0,
					'idleTimeout': 100,
					'reload': true,
					'confirm': true
				}

	}, data = JSON.stringify(json, null, '\t');


	// Check if configuration file exists.
	if ( !fileSync.existsSync(files.server) ) {

		console.log(`Cound not find a server configuration file. One will be created for you.\nFile generated and saved to: ${paths.rootPath} '\\' ${files.server}`);

		fileSync.writeFile(files.server, data, 'utf8', function() {

			console.log(`Use this file for your server info and run gulp deploy.`);

			return gulp.src(files.server)
					   .pipe(open());

		});

	} else {

		console.log(`You already have an existing server configuration file found in: ${paths.rootPath}`);

		return done();

	}

}


/* -------------------------------------------------- */
/* ANALYTICS / TRACKING
/* -------------------------------------------------- */

// FULLSTORY
export const injectfullstory = (done) => {

	if ( production && config.tracking.fullstory.allow ) {

		console.log(`Injecting FullStory...`);
	
		return gulp.src( paths.build + '**/*.{html,php}' )
				   .pipe(fullstory({id: config.tracking.fullstory.id}))
				   .pipe(gulp.dest( paths.build ));

	} else {

		return done();

	}

}


// GOOGLE ANALYTICS
export const injectga = (done) => {

	if ( production && config.tracking.ga.allow ) {

		console.log(`Injecting Google Analytics...`);
	
		return gulp.src( paths.build + '**/*.{html,php}' )
				   .pipe(ga({
							 url: config.tracking.ga.url,
							 uid: config.tracking.ga.id,
							 anonymizeIp: config.tracking.ga.anonymizeIp,
							 bounceTime: config.tracking.ga.bounceTime,
							 demographics: config.tracking.ga.demographics,
							 linkAttribution: config.tracking.ga.linkAttribution,
							 minify: config.tracking.ga.minify,
							 nonceTag: config.tracking.ga.nonceTag,
							 require: config.tracking.ga.require,
							 sendPageView: config.tracking.ga.sendPageView,
							 tag: config.tracking.ga.tagPlacement
				   }))
				   .pipe(gulp.dest( paths.build ));

	} else {

		return done();

	}

}


// GOOGLE TAG MANAGER
export const injectgtm = (done) => {

	if ( production && config.tracking.gtm.allow ) {

		console.log(`Injecting Google Tag Manager...`);
	
		return gulp.src( paths.build + '**/*.{html,php}' )
				   .pipe(gtm({containerId: config.tracking.gtm.id}))
				   .pipe(gulp.dest( paths.build ));

	} else {

		return done();

	}

}


/* -------------------------------------------------- */
/* METADATA TAGS
/* -------------------------------------------------- */

// METADATA
export const meta = () => {
	
	console.log(`Injecting site information...`);
	
	const stringIdentifier = '--',
		  today = new Date(),
		  yyyy = today.getFullYear();

	return gulp.src([paths.build + '**/*.{html,php}'])

					.pipe(replaceString(stringIdentifier + 'language', config.site.language))
					.pipe(replaceString(stringIdentifier + 'name', config.site.name))
					.pipe(replaceString(stringIdentifier + 'shortName', config.site.shortName))
					.pipe(replaceString(stringIdentifier + 'url', config.site.url))
					.pipe(replaceString(stringIdentifier + 'startURL', config.site.startURL))
					.pipe(replaceString(stringIdentifier + 'display', config.site.display))
					.pipe(replaceString(stringIdentifier + 'description', config.site.description))

					.pipe(replaceString(stringIdentifier + 'email', config.site.contact.email))
					.pipe(replaceString(stringIdentifier + 'phone', config.site.contact.phone))
					.pipe(replaceString(stringIdentifier + 'fax', config.site.contact.fax))
					.pipe(replaceString(stringIdentifier + 'address', config.site.contact.address))

					.pipe(replaceString(stringIdentifier + 'googleSiteVerification', config.site.verification.google))
					.pipe(replaceString(stringIdentifier + 'msSiteVerification', config.site.verification.ms))

					.pipe(replaceString(stringIdentifier + 'faviconDefault', config.site.icons.path + config.site.icons.favicon.default))
					.pipe(replaceString(stringIdentifier + 'faviconSmall', config.site.icons.path + config.site.icons.favicon.small))
					.pipe(replaceString(stringIdentifier + 'faviconLarge', config.site.icons.path + config.site.icons.favicon.large))

					.pipe(replaceString(stringIdentifier + 'iconiOS', config.site.icons.path + config.site.icons.apple.default))
					.pipe(replaceString(stringIdentifier + 'safariPinnedTab', config.site.icons.path + config.site.icons.apple.safariPinnedTab))

					.pipe(replaceString(stringIdentifier + 'iconAndroidSmall', config.site.icons.path + config.site.icons.android.small))
					.pipe(replaceString(stringIdentifier + 'iconAndroidLarge', config.site.icons.path + config.site.icons.android.large))

					.pipe(replaceString(stringIdentifier + 'iconTileSmall', config.site.icons.path + config.site.icons.ms.small))
					.pipe(replaceString(stringIdentifier + 'iconTileMedium', config.site.icons.path + config.site.icons.ms.medium))
					.pipe(replaceString(stringIdentifier + 'iconTileLarge', config.site.icons.path + config.site.icons.ms.large))
					.pipe(replaceString(stringIdentifier + 'iconTileWide', config.site.icons.path + config.site.icons.ms.wide))

					.pipe(replaceString(stringIdentifier + 'imageProfile', config.site.icons.path + config.site.social.profile))
					.pipe(replaceString(stringIdentifier + 'imageCover', config.site.icons.path + config.site.social.cover))

					.pipe(replaceString(stringIdentifier + 'initialScale', config.site.viewport.initialScale))
					.pipe(replaceString(stringIdentifier + 'minimumScale', config.site.viewport.minimumScale))
					.pipe(replaceString(stringIdentifier + 'shrinkToFit', config.site.viewport.shrinkToFit))
					.pipe(replaceString(stringIdentifier + 'userScalable', config.site.viewport.userScalable))
					.pipe(replaceString(stringIdentifier + 'viewportFit', config.site.viewport.viewportFit))

					.pipe(replaceString(stringIdentifier + 'themeColor', config.site.colors.theme))
					.pipe(replaceString(stringIdentifier + 'backgroundColor', config.site.colors.background))

					.pipe(replaceString(stringIdentifier + 'fbLocale', config.site.facebook.locale))
					.pipe(replaceString(stringIdentifier + 'fbLocaleAlt', config.site.facebook.localeAlt))
					.pipe(replaceString(stringIdentifier + 'fbType', config.site.facebook.type))
					.pipe(replaceString(stringIdentifier + 'fbWidth', config.site.facebook.imageWidth))
					.pipe(replaceString(stringIdentifier + 'fbHeight', config.site.facebook.imageHeight))

					.pipe(replaceString(stringIdentifier + 'twitterHandle', config.site.twitter.handle))
					.pipe(replaceString(stringIdentifier + 'twitterCard', config.site.twitter.card))

					.pipe(replaceString(stringIdentifier + 'webAppCapable', config.site.webAppCapable))
					.pipe(replaceString(stringIdentifier + 'handheldFriendly', config.site.handheldFriendly))

					.pipe(replaceString(stringIdentifier + 'iTunesAppID', config.site.iTunesAppID))
					.pipe(replaceString(stringIdentifier + 'playAppID', config.site.playAppID))

					.pipe(replaceString(stringIdentifier + 'year', yyyy ))

			   .pipe(gulp.dest( paths.build ));
	
}


// APP ICONS
export const appicons = (done) => {

	console.log(`Generating app icons...`);

	favicon.generateFavicon(appIconsOptions, function() {

			return done();

	});

}


/* -------------------------------------------------- */
/* WEB FONT LOADER
/* -------------------------------------------------- */

export const injectwebfontloader = () => {

		console.log(`Injecting WebFontLoader...`);
	
		return gulp.src( paths.build + '**/*.{html,php}' )
				   .pipe(_if( config.fonts.allow, webfontloader({source: config.fonts.source,
																 families: config.fonts.families,
																 id: config.fonts.id,
																 api: config.fonts.api,
																 urls: config.fonts.urls,
																 text: config.fonts.text,
																 version: config.fonts.version,
																 loadAllFonts: config.fonts.loadAllFonts,
																 classes: config.fonts.classes,
																 events: config.fonts.events,
																 context: config.fonts.context,
																 timeout: config.fonts.timeout,
																 //script: config.fonts.script
				   												}))
				   )
				   .pipe(gulp.dest( paths.build ));

}


/* -------------------------------------------------- */
/* ROBOTS
/* -------------------------------------------------- */

export const robots = () => {

	console.log(`Generating robots.txt...`);

	return gulp.src([paths.build + '**/*.{html,php}'])
			   .pipe(robotstxt({
			   				 useragent: config.robots.useragent,
			   				 //allow: config.robots.allow,
			   				 disallow: config.robots.disallow,
			   				 sitemap: config.site.url + '/sitemap.xml'
			   }))
			   .pipe(gulp.dest( paths.build ));

}


/* -------------------------------------------------- */
/* SITEMAP
/* -------------------------------------------------- */

export const sitemap = () => {

	console.log(`Generating sitemap...`);

	return gulp.src([paths.build + '**/*.{html,php}'])
			   .pipe(generateSitemap( {siteUrl: config.site.url} ))
			   .pipe(gulp.dest( paths.build ));

}


/* -------------------------------------------------- */
/* SERVICE WORKER
/* -------------------------------------------------- */

export const sw = (done) => {

	if ( production && config.site.serviceworker ) {

		console.log(`Generating and injecting Service Worker...`);

		gulp.src( paths.build + '**/*.{html,php}' )
			.pipe(serviceworker({}))
			.pipe(gulp.dest( paths.build ));


		return workbox.generateSW({
								   globDirectory: paths.build,
								   globPatterns: ['**/*.{css,eot,gif,html,jp2,jpg,jpeg,js,jxr,mp4,mpeg,ogg,ogv,otf,php,png,svg,ttf,webm,webp,woff,woff2}'],
			
								   runtimeCaching: [{
													 urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
													 handler: 'cacheFirst',
													 options: {
													 		   cacheName: 'font-cache',
													 		   expiration: { maxEntries: 10 },
													 },
								   					}],
								   swDest: `${paths.build}/sw.js`,
								   clientsClaim: true,
								   skipWaiting: true
								  })
					  .then(({warnings}) => {

						for (const warning of warnings) {

							console.warn(warning);

						}

						console.info('Service worker generation completed.');

					  }).catch((error) => {

						console.warn('Service worker generation failed:', error);

					  });

	} else {

		console.log(`Service Worker not in use.`);

		return done();

	}

}


/* -------------------------------------------------- */
/* JS
/* -------------------------------------------------- */

// VARS
const partials = { partialFramework: framework.bundle + '.js', partialVendors: config.js.vendors.bundle + '.js', partialApp: config.js.app.bundle + '.js' };


// LINT
export const lintjs = () => {

	console.log('Verifying JS files...');

	return gulp.src( config.js.app.files.map( function(base) { return paths.source + paths.appJS + base } ), {allowEmpty: true} )
			   .pipe(_if( config.compiler.cacheBuild, cache('lintjs') ))
			   .pipe(_if( config.js.lint, jsLint() ))
			   .pipe(_if( config.js.lint, jsLint.reporter('default', { verbose: true } ) ))
			   .pipe(_if( config.optimizations.js.modernizr, modernizr('modernizr.js') ))
			   .pipe(gulp.dest( paths.build + paths.temp ));

}


// FRAMEWORK
export const frameworkjs = () => {

	console.log(`Preparing framework JS files...`);

	return gulp.src( framework.files.map( function(base) { return paths.frameworkJS + base } ), {allowEmpty: true} )
			   .pipe(_if( !production && config.compiler.cacheBuild, cache('frameworkjs') ))
			   .pipe(_if( !production && config.compiler.rememberFiles, changed(paths.build + paths.scripts) ))
			   .pipe(concat(partials.partialFramework))
			   .pipe(gulp.dest( paths.build + paths.scripts ));

}


// CORE
export const vendorsjs = () => {

	console.log(`Preparing vendors JS files...`);

	return gulp.src( config.js.vendors.files.map( function(base) { return paths.source + paths.vendorsJS + base } ), {allowEmpty: true} )
			   .pipe(_if( !production && config.compiler.cacheBuild, cache('vendorsjs') ))
			   .pipe(_if( !production && config.compiler.rememberFiles, changed(paths.build + paths.scripts) ))
			   .pipe(removeCode({removeUnusedCode: true}))
			   .pipe(concat(partials.partialVendors))
			   .pipe(gulp.dest( paths.build + paths.scripts ));

}


// MAIN
export const appjs = () => {

	console.log(`Preparing main JS files...`);

	return gulp.src( config.js.app.files.map( function(base) { return paths.source + paths.appJS + base } ), {allowEmpty: true} )
			   .pipe(_if( !production && config.compiler.cacheBuild, cache('appjs') ))
			   .pipe(_if( !production && config.compiler.rememberFiles, changed(paths.build + paths.scripts) ))
			   .pipe(removeCode({removeUnusedCode: true}))
			   .pipe(concat(partials.partialApp))
			   .pipe(gulp.dest( paths.build + paths.scripts ));

}


// COMBINE VENDORS
export const combinevendorsjs = () => {

	console.log(`Compiling ${config.js.vendorsBundle}.js...`);

	return gulp.src([paths.build + paths.temp + 'modernizr.js',
					 paths.build + paths.scripts + partials.partialFramework,
					 paths.build + paths.scripts + partials.partialVendors], {allowEmpty: true} )


				// JS transpiler / compiler.
				//.pipe(babel(['@babel/preset-env']))


				// Generate sourcemaps.
				.pipe(_if( config.js.sourcemaps, sourcemaps.init() ))
				.pipe(concat(config.js.vendorsBundle + '.js'))


				// Initialize 'gulp-rev' module.
				.pipe(_if( production && config.versioning.scripts.allow, rev() ))
				.pipe(_if( production && config.versioning.scripts.allow, revFormat({prefix: config.versioning.scripts.prefix,
																					suffix: config.versioning.scripts.suffix,
																					lastExt: false
																					})
				))


				// Output sourcemaps.
				.pipe(_if( config.js.sourcemaps, sourcemaps.write('maps') ))
				.pipe(gulp.dest( paths.build + paths.scripts ))


				// Create a manifest to reference revised assets with hashed names.
				.pipe(_if( production && config.versioning.scripts.allow, revDelete() ))
				.pipe(_if( production && config.versioning.scripts.allow, revRewrite() ))
				.pipe(_if( production && config.versioning.scripts.allow, rev.manifest(files.revmanifest, { base: paths.build + paths.scripts, merge: true}) ))


				// Output assets.
				.pipe(gulp.dest( paths.build + paths.scripts ))


				// Clean up temporary assets.
				/*
				.on('end', function () {

					console.log(`Cleaning...`);

					return deleteAssets([paths.build + paths.scripts + partials.partialFramework,
										 paths.build + paths.scripts + partials.partialVendors
										], { allowEmpty: true });

				});
				*/

}


// COMBINE APP
export const combineappjs = () => {

	console.log(`Compiling ${config.js.appBundle}.js...`);

	return gulp.src([paths.build + paths.scripts + partials.partialApp], {allowEmpty: true} )


				// JS transpiler / compiler.
				//.pipe(babel(['@babel/preset-env']))


				// Generate sourcemaps.
				.pipe(_if( config.js.sourcemaps, sourcemaps.init() ))
				.pipe(concat(config.js.appBundle + '.js'))


				// Initialize 'gulp-rev' module.
				.pipe(_if( production && config.versioning.scripts.allow, rev() ))
				.pipe(_if( production && config.versioning.scripts.allow, revFormat({prefix: config.versioning.scripts.prefix,
																					suffix: config.versioning.scripts.suffix,
																					lastExt: false
																					})
				))


				// Output sourcemaps.
				.pipe(_if( config.js.sourcemaps, sourcemaps.write('maps') ))
				.pipe(gulp.dest( paths.build + paths.scripts ))


				// Create a manifest to reference revised assets with hashed names.
				.pipe(_if( production && config.versioning.scripts.allow, revDelete() ))
				.pipe(_if( production && config.versioning.scripts.allow, revRewrite() ))
				.pipe(_if( production && config.versioning.scripts.allow, rev.manifest(files.revmanifest, { base: paths.build + paths.scripts, merge: true}) ))


				// Output assets.
				.pipe(gulp.dest( paths.build + paths.scripts ))


				// Clean up temporary assets.
				.on('end', function () {

					console.log(`Cleaning...`);

					return deleteAssets([paths.build + paths.scripts + partials.partialFramework,
										 paths.build + paths.scripts + partials.partialVendors,
										 paths.build + paths.scripts + partials.partialApp
											], { allowEmpty: true });

				});

}


// VENDORS
export const libsjs = (done) => {

	if ( config.js.libs.allow ) {

		console.log(`Compiling ${config.js.libs.bundle}.js...`);

		return gulp.src( paths.source + config.js.libs.files, {allowEmpty: true} )
				   .pipe(_if( !production && config.compiler.cacheBuild, cache('vendors') ))
				   .pipe(_if( !production && config.compiler.rememberFiles, changed(paths.build + paths.scripts) ))


				   // Generate sourcemaps.
				   .pipe(_if( config.js.sourcemaps, sourcemaps.init() ))
				   .pipe(concat(config.js.libs.bundle + '.js'))


				   // Initialize 'gulp-rev' module.
				   .pipe(_if( production && config.versioning.scripts.allow, rev() ))
				   .pipe(_if( production && config.versioning.scripts.allow, revFormat({prefix: config.versioning.scripts.prefix,
																						suffix: config.versioning.scripts.suffix,
																						lastExt: false
																					   })
				   ))


				   // Output sourcemaps.
				   .pipe(_if( config.js.sourcemaps, sourcemaps.write('maps') ))
				   .pipe(gulp.dest( paths.build + paths.scripts ))


				    // Create a manifest to reference revised assets with hashed names.
				   .pipe(_if( production && config.versioning.scripts.allow, revDelete() ))
				   .pipe(_if( production && config.versioning.scripts.allow, revRewrite() ))
				   .pipe(_if( production && config.versioning.scripts.allow, rev.manifest(files.revmanifest, { base: paths.build + paths.scripts, merge: true}) ))


				   // Output assets.
				   .pipe(gulp.dest( paths.build + paths.scripts ));

	} else {

		console.log(`Vendors disabled for this build. Bypassing task.`);

		return done();

	}

}


/* -------------------------------------------------- */
/* CSS
/* -------------------------------------------------- */

// SCSS
export const css = () => {

	console.log(`Compiling ${config.css.bundle}.css...`);

	return gulp.src( paths.source + paths.css + config.css.bundle + '.s+(a|c)ss', { base: null, allowEmpty: true } )
			   .pipe(_if( !production && config.compiler.cacheBuild, cache('css') ))
			   .pipe(_if( !production && config.compiler.rememberFiles, changed(paths.build + paths.scripts) ))


			   // Generate sourcemaps.
			   .pipe(_if( config.css.sourcemaps, sourcemaps.init() ))


			   // Let the scss compiler do its thang.
			   .pipe(_if( config.css.lint, scssLint({
													   options: { formatter: 'stylish', 'merge-default-rules': false },
													   files: { ignore: paths.source + paths.css + 'plugins/**/*' }
			   }) ))
			   .pipe(_if( config.css.lint, scssLint.format() ))
			   .pipe(_if( config.css.lint, scssLint.failOnError() ))
			   .pipe(scssGlob( { ignorePaths: [ ] } ))
			   .pipe(scss({ outputStyle: null, trace: true, verbose: true }).on('error', scss.logError))
			   .pipe(postCSS(postCSSPlugins))


			   // Initialize 'gulp-rev' module.
			   .pipe(_if( production && config.versioning.scripts.allow, rev() ))
			   .pipe(_if( production && config.versioning.scripts.allow, revFormat({prefix: config.versioning.scripts.prefix,
																					suffix: config.versioning.scripts.suffix,
																					lastExt: false
																				   })
			   ))


			   .pipe(_if( config.css.sourcemaps, sourcemaps.write('maps') ))
			   .pipe(gulp.dest( paths.build + paths.scripts ))


			    // Create a manifest to reference revised assets with hashed names.
			   .pipe(_if( production && config.versioning.scripts.allow, revDelete() ))
			   .pipe(_if( production && config.versioning.scripts.allow, revRewrite() ))
			   .pipe(_if( production && config.versioning.scripts.allow, rev.manifest(files.revmanifest, { base: paths.build + paths.scripts, merge: true}) ))


			   // Output assets.
			   .pipe(gulp.dest( paths.build + paths.scripts ))
			   .pipe(browserSync.stream());

}


// TEMPORARY CSS (FOR CRITICALCSS TASK)
export const tempcss = () => {

	console.log(`Compiling a temporary ${config.css.bundle}.css...`);

	return gulp.src( paths.source + paths.css + config.css.bundle + '.s+(a|c)ss', { base: null, allowEmpty: true } )

			   // Let the scss compiler do its thang.
			   .pipe(_if( config.css.lint, scssLint({
													   options: { formatter: 'stylish', 'merge-default-rules': false },
													   files: { ignore: paths.source + paths.css + 'plugins/*/**' }
			   }) ))
			   .pipe(_if( config.css.lint, scssLint.format() ))
			   .pipe(_if( config.css.lint, scssLint.failOnError() ))
			   .pipe(scssGlob( { ignorePaths: [ ] } ))
			   .pipe(scss({ outputStyle: null, trace: true, verbose: true }).on('error', scss.logError))
			   .pipe(postCSS(postCSSPlugins))

			   //.pipe(_if( production && config.optimizations.css.minify, purgecss(purgeCSSOptions) ))
			   //.pipe(_if( production && config.optimizations.css.minify, cleanCSS(cleanCSSOptions) ))

			   .pipe(removeCode({removeUnusedCode: true}))
			   .pipe(gulp.dest( paths.build + paths.temp ));

}


// CRITICAL
export const criticalcss = (done) => {

	if ( config.optimizations.critical.allow ) {

		console.log(`Determining critical styles to inline...`);

		return gulp.src( paths.build + '**/*.{html,php}' )
					.pipe(critical({base: paths.build,
									inline: true,
									//assetPaths: [ paths.build + paths.scripts + '**/*.css' ],
									//css: [ paths.build + paths.scripts + Object.values(revmanifest)[0] ],
									css: [ paths.build + paths.temp + config.css.bundle + '.css' ],

									dimensions: [{width: config.optimizations.critical.width,
												  height: config.optimizations.critical.height
									}],

									extract: config.optimizations.critical.extract,

									target: {css: paths.build + paths.scripts + 'critical.css',
											 uncritical: paths.build + paths.scripts + 'uncritical.css',
											 html: paths.build + 'index-critical.html'},

									//minify: config.optimizations.html.minify,
									timeout: 30000,

									ignore: {atrule: ['@font-face'],
											 rule: [/some-regexp/],
											 decl: (node, value) => /big-image\.png/.test(value)
									}

					}))

					.on('error', function(err) { 
						util.log(util.colors.red(err.message))
					})

					.pipe(gulp.dest( paths.build ));

	} else {

		console.log(`Critical CSS disabled for this build. Bypassing task.`);

		return done();

	}

}


/* -------------------------------------------------- */
/* HTML
/* -------------------------------------------------- */

// MAIN
export const html = () => {

	console.log(`Compiling HTML...`);

	return gulp.src( paths.source + config.html.files )
			   .pipe(panini({
							 layouts: paths.source + config.html.layouts,
							 root: paths.source + config.html.pages,
							 partials: paths.source + config.html.partials,
							 helpers: paths.source + config.html.helpers,
							 data: paths.source + config.html.data
				}))

			   .pipe(htmlReplace({
								  /*
								  base: {
										src: 'https://' + 's3-' + server.aws.region + '.amazonaws.com/' + server.aws.bucket + '/',
										tpl: '<base href="%s">'
								  },
								  */
								  inlinejs: {
										src: gulp.src( paths.source + config.html.inlineScripts + '**/*.js' ),
										tpl: '<script>%s</script>'
								  },

								  inlinecss: {
										src: gulp.src( paths.source + config.html.inlineScripts + '**/*.css' ),
										tpl: '<style>%s</style>'
								  }

			   }, {keepUnassigned: false, keepBlockTags: false, resolvePaths: true} ))
			   .pipe(replaceString('&lt;br&gt;', '<br>'))
			   //.pipe(noopener.warn())
			   .pipe(noopener.overwrite())
			   .pipe(gulp.dest( paths.build ))

}


// ACCESSIBILITY
export const a11ycheck = (done) => {

	if ( config.accessibility.allow ) {

		console.log(`Running accessibility audit...`);

		return gulp.src( paths.build + '**/*.{html,php}', { base: paths.build } )
				   .pipe(a11y())
				   .pipe(a11y.reporter())
				   .pipe(accessibility({ force: true }))
				   .on('error', console.log)
				   .pipe(accessibility.report({ reportType: 'txt' } ))
				   .pipe(rename({ extname: '.txt' } ))
				   .pipe(gulp.dest( 'reports/' ) );

	} else {

		console.log(`Skipping accessibility audit.`);

		return done();

	}

}


// HELPER
export const minify = (done) => {

	console.log(`Minifying...`);

	// JS
	gulp.src( paths.build + '**/*.js', { allowEmpty: true } )
		.pipe(removeCode({production: true}))
		.pipe(_if( production && config.optimizations.js.minify, jsMinify(jsMinifyOptions).on('error', util.log) ))
		.pipe(gulp.dest( paths.build ));


	// CSS
	gulp.src( paths.build + '**/*.css', { allowEmpty: true } )
		.pipe(removeCode({production: true}))
		.pipe(_if( production && config.optimizations.css.minify, purgecss(purgeCSSOptions) ))
		.pipe(_if( production && config.optimizations.css.minify, cleanCSS(cleanCSSOptions) ))
		.pipe(gulp.dest( paths.build ));


	// HTML
	return gulp.src( paths.build + '**/*.{html,php}', { allowEmpty: true } )
			   //.pipe(_if( serverStatus && !server.aws.upload, removeCode({removeBase: true}) ))
			   .pipe(_if( !config.site.verification.allow, removeCode({removeSiteValidation: true}) ))
			   .pipe(_if( !config.site.appBanner, removeCode({removeAppBanner: true}) ))
			   .pipe(_if( !config.js.libs.allow, removeCode({removeLibs: true}) ))

			   .pipe(removeCode({production: true}) )

			   .pipe(_if( production && config.optimizations.html.minify, htmlMinify(htmlMinifyOptions) ))
			   .pipe(gulp.dest( paths.build ));

}


/* -------------------------------------------------- */
/* FINGERPRINT / VERSIONING / CACHE BUST
/* -------------------------------------------------- */

// ASSETS
export const fingerprintassets = (done) => {

	if ( production && config.versioning.images.allow ) {

		console.log(`Fingerprinting asset files...`);


		// TASK
		return gulp.src([paths.build + paths.assets + '**/*',
						 '!' + paths.build + paths.assets + 'icons/*',
						 '!' + paths.build + paths.assets + 'social/*'])


				    // Initialize 'gulp-rev' module.
				   .pipe(rev())
				   .pipe(revFormat({prefix: config.versioning.images.prefix,
									suffix: config.versioning.images.suffix,
									lastExt: false
					}))
				   .pipe(gulp.dest( paths.build + paths.assets ))


				    // Create a manifest to reference revised assets with hashed with names.
				   .pipe(revDelete())
				   .pipe(revRewrite())
				   .pipe(rev.manifest( files.revmanifest, { base: paths.build + paths.assets, merge: true } )) 
				   .pipe(gulp.dest( paths.build + paths.assets ))


				   // Inject revised assets into HTML.
				   .on('end', function () {

								console.log(`Injecting revisioned asset files...`);

								const manifest = gulp.src( files.revmanifest );

								gulp.src([paths.build + '**/*'])
									.pipe(revRewrite({ manifest }))
									.pipe(gulp.dest( paths.build ));

								});

	} else {

		return done();

	}

}


// INJECT
export const injectscripts = () => {

	console.log(`Injecting scripts...`);

	const stylesheet = "stylesheet";

	const relative = true,
		  removeTags = true,
		  //ignorePath = paths.build + config.html.dialog.files,
		  addRootSlash = false,
		  name = 'inject';

	inject.transform.html.js = filepath => `<script defer src="${filepath}"></script>`;
	inject.transform.html.css = filepath => `<link rel="preload" href="${filepath}" as="style" onload="this.onload=null;this.rel='${stylesheet}'">`;


	return gulp.src(paths.build + '**/*.{html,php}', { base: paths.build } )


			   // APP INJECTION
			   .pipe(inject(

					gulp.src([paths.build + paths.scripts + '**/*.js',
							  paths.build + paths.scripts + '**/*.css',
							  '!' + paths.build + paths.scripts + partials.partialFramework,
							  '!' + paths.build + paths.scripts + partials.partialVendors], {read: false, allowEmpty: true} ), {

							  relative: relative,
							  starttag: '<!-- inject:scripts:{{ext}} -->'} ), {

					}
				
			   ) // END APP INJECTION


			   // LIBS INJECTION
			   .pipe(inject(

					gulp.src([paths.build + paths.scripts + config.js.libs.bundle], {read: false, allowEmpty: true} ), {
							  relative: relative,
							  starttag: '<!-- inject:libs:{{ext}} -->'} ), {
					}
				
			   ) // END LIBS INJECTION


			   //.pipe(defer())	
			   .pipe(gulp.dest( paths.build ));

}


/* -------------------------------------------------- */
/* MOVE FOLDERS AND ASSETS
/* -------------------------------------------------- */

export const move = () => {

	console.log(`Copying directories and files...`);

	return gulp.src([paths.source + '**/.htaccess',
					 paths.source + paths.assets + '**/*',
					 paths.source + paths.webfonts + '**/*',
					 //'!' + paths.source + paths.js,
					 //'!' + paths.source + paths.css,
					 //'!' + paths.source + '_modules/',
					 //'!' + paths.source + '{_*,_*/*,__*/**,**/*.html,**/*.php}',
					 '!' + paths.source + '{**/*.ignore,**/*.ignore.*}'
					 ], { base: paths.source, nodir: true })

				.pipe(_if( !production && config.compiler.cacheBuild, cache('move') ))
				.pipe(_if( !production && config.compiler.rememberFiles, changed(paths.build) ))

				.pipe(gulp.dest( paths.build ))

				.on('end', function () {

					console.log(`Deleting unnecessary directories...`);

					return deleteEmpty.sync( paths.build + '**/*' );

				});

}


/* -------------------------------------------------- */
/* ASSET COMPRESSION
/* -------------------------------------------------- */

export const optimizeassets = () => {

	console.log(`Compressing raster image assets...`);


	// RASTER
	return gulp.src( paths.build + '**/*.{gif,jpg,jpeg,png,svg}', { base: paths.build } )
			   .pipe(_if( production, imageMinify([imageMinify.optipng({optimizationLevel: config.images.raster.quality}),
							   imageMinify.gifsicle({interlaced: config.images.raster.interlaced}),
							   imageMinify.jpegtran({progressive: config.images.raster.progressive}),
							  ], {verbose: true}) )
			   )
			   .pipe(_if( config.images.webp.convert, webp({method: 0,
													   	   quality: config.images.webp.quality,
													   	   alphaQuality: config.images.webp.alphaQuality,
													   	   sharpness: config.images.webp.sharpness,
													   	   filter: 0,
													   	   autoFilter: false,
													   	   lossless: false,
													   	   nearLossless: 100,
													   	   sns: 80})
			   ))
			   
			   .pipe(gulp.dest( paths.build ))


			   	// SVG
			   .on('end', function() {

			   		console.log(`Compressing SVG assets...`);

					return gulp.src( paths.build + '**/*.svg', { base: paths.build } )
							   .pipe(_if( !production && config.compiler.rememberFiles, changed(paths.build) ))

							   .pipe(svgMinify(svgMinifyOptions))
							   .pipe(_if( config.images.svg.convert.allow, raster({ format: config.images.svg.convert.format, scale: config.images.svg.convert.scale }) ))
							   .pipe(_if( config.images.svg.convert.allow, rename({ extname: '.' + config.images.svg.convert.format }) ))

							   .pipe(gulp.dest( paths.build ));

			   });

}


/* -------------------------------------------------- */
/* ZIP ASSETS
/* -------------------------------------------------- */

export const zipassets = (done) => {

	if ( config.zip.allow ) {

		console.log(`Packaging brand assets...`);

		return gulp.src( config.zip.assets.map( function(base) { return paths.build + paths.assets + base } ), {allowEmpty: true} )
				   .pipe(zip( config.site.name + '-brand-assets.zip' ))
				   .pipe(gulp.dest( paths.build ));

	} else {

		console.log(`Skipping asset packaging.`);

		return done();

	}

}


/* -------------------------------------------------- */
/* HOUSEKEEPING
/* -------------------------------------------------- */

export const clear = (done) => {

	console.log(`Clearing ${paths.build} folder...`);
	
	deleteAssets.sync([files.revmanifest,
				 paths.build + paths.temp,
				 paths.build + '**/*',
				 paths.build + '.htaccess'
				 ], { allowEmpty: true });

	//return deleteEmpty.sync( paths.build );

	return done();

}


export const clean = (done) => {

	console.log(`Cleaning up: ${paths.rootPath}`);

	if ( system.myOS === 'win32' ) {

		deleteAssets.sync([files.favicon,
						   files.revmanifest,
						   paths.build + paths.temp,
						   paths.rootPath + '**/.DS_Store',
						   paths.rootPath + '**/._*',
						   '!' + paths.rootPath + 'node_modules/**/*',
						   ], { allowEmpty: true });

		return done();

	} else if ( system.myOS === 'darwin' ) {

		deleteAssets.sync([files.favicon,
						   files.revmanifest,
						   paths.build + paths.temp,
						   //paths.rootPath + '**/.DS_Store',
						   //paths.rootPath + '**/._*',
						   '!' + paths.rootPath + 'node_modules/**/*',
						   ], { allowEmpty: true });

		return done();

	}

	//return deleteEmpty.sync( paths.build );

}


/* -------------------------------------------------- */
/* BROWSERSYNC
/* -------------------------------------------------- */

export const sync = (done) => {

	console.log(`Syncing...`);


	// CONNECT TO LOCALHOST / DEV SERVER
	browserSync.use(browserSyncHTMLInjector);


	// SYNC
	browserSync.init({
					  //files: config.sync.files,
					  server: {
							   baseDir: paths.build,
							   serveStaticOptions: {
													extensions: ['html', 'php'],
							   middleware: function (req, res, next) {
											   res.setHeader('Access-Control-Allow-Origin:', '*');
											   next();
										   }
							   }
					  },
					  notify: config.sync.notify,

					  browser: config.sync.browser, // chrome, firefox, IE, opera, safari
					  host: config.sync.host,
					  https: config.sync.https,
					  localOnly: config.sync.localOnly,
					  online: config.sync.online,
					  port: config.sync.port,

					  cors: config.sync.cors,
					  open: config.sync.open, // external, local, tunnel, ui, false
					  tunnel: config.sync.tunnel,
					  xip: config.sync.xip, // .xip.io

					  codeSync: config.sync.codeSync,
					  injectChanges: config.sync.injectChanges,
					  watch: config.sync.watch,

					  ghostMode: config.sync.ghostMode,

					  reloadDebounce: config.sync.reloadDebounce,
					  reloadDelay: config.sync.reloadDelay,
					  reloadThrottle: config.sync.reloadThrottle,

					  scrollElements: config.sync.scrollElements,
					  scrollElementMapping: config.sync.scrollElementMapping,
					  scrollProportionally: config.sync.scrollProportionally,
					  scrollRestoreTechnique: config.sync.scrollRestoreTechnique,
					  scrollThrottle: config.sync.scrollThrottle,

					  logConnections: config.sync.logConnections,
					  logFileChanges: config.sync.logFileChanges,
					  logLevel: config.sync.logLevel,
					  logPrefix: config.site.url,
					  timestamps: config.sync.timestamps,
					  plugins: [],

					  callbacks: {

							ready: function(err, bs) {

								console.log(`${config.site.url} connected!`);
								//openNewTab = false;

							}

					  }

	});


	// WATCH
	gulp.watch([paths.source + '**/*.js',
				'!' + paths.source + config.html.inlineScripts + '**/*.js'
				]).on('all', gulp.series(lintjs, frameworkjs, vendorsjs, appjs, combinevendorsjs, combineappjs, injectscripts), reload);


	gulp.watch(paths.source + config.js.libs.files).on('all', libsjs, reload);


	gulp.watch([paths.source + '**/*.s+(a|c)ss',
				'!' + paths.source + config.html.inlineScripts + '**/*.css'
				]).on('all', gulp.series(css));


	gulp.watch(paths.source + '**/*.{avi,dmg,doc,eot,exe,gif,jp2,jpg,jpeg,jxr,mid,midi,mp3,mp4,mpeg,mov,ogg,ogv,otf,pdf,png,rar,svg,tiff,ttf,txt,webm,webp,woff,woff2,zip}').on('all', move, zipassets, optimizeassets, reload);
	//gulp.watch(paths.source + paths.assets + '**/*').on('all', move, zipassets, optimizeassets, reload);

	gulp.watch([//credentialsFile,
				//files.config,
				paths.source + config.html.inlineScripts + '**/*.js',
				paths.source + config.html.inlineScripts + '**/*.css',
				paths.source + config.html.files,
				paths.source + '**/*.{html,hbs,handlebars,json,yml}',
				//paths.source + '{_data,_helpers,_layouts,_partials}/**/*.{html,hbs,handlebars,json,yml}'
				//paths.source + '{'+config.html.layouts+','+config.html.partials+','+config.html.helpers+','+config.html.data+'}/**/*.{html,hbs,handlebars,json,yml}'
				]).on('all', gulp.series(html, meta, css, refresh, gulp.series(refresh, html, meta, injectwebfontloader, injectscripts, reload) ));


	gulp.watch([files.config,
				files.framework,
				'gulpfile.babel.js'
				]).on('all', configwarning);

}


/* -------------------------------------------------- */
/* AWS
/* -------------------------------------------------- */

export const awsdeploy = (done) => {

	if ( serverStatus ) {

			const server = JSON.parse(fileSync.readFileSync(files.server));


			if ( server.aws.upload ) {

				console.log('Using AWS.');


				// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
				const publisher = awsPublish.create({
													 region: server.aws.region,
													 params: { Bucket: server.aws.bucket },
													 accessKeyId: server.aws.accessKeyId,
													 secretAccessKey: server.aws.secretAccessKey,
													 //credentials: new awsSDK.SharedIniFileCredentials({ profile: 'aws-profile' }),
								}, {
									cacheFileName: 'aws-cache'
								});

				// Define custom headers
				const headers = { 'Cache-Control': server.aws.cachecontrol };

				return gulp.src( paths.resolvePath(server.aws.dist + '**/*'), { base: paths.resolvePath(server.aws.dist) } )
						   .pipe(_if( server.aws.gzip, awsPublish.gzip({ ext: '.gz' }) )) // GZIP, Set Content-Encoding headers and add .gz extension.
						   .pipe(publisher.publish(headers)) // Publisher will add Content-Length, Content-Type and headers specified above. If not specified it will set x-amz-acl to public-read by default
						   .pipe(_if( server.aws.cache, publisher.cache() )) // Create a cache file to speed up consecutive uploads.
						   .pipe(_if( server.aws.sync, publisher.sync() )) // This will publish and sync bucket files with the one in your public directory.
						   .pipe(awsPublish.reporter( {states: ['cache', 'create', 'delete', 'skip', 'update']} )) // Print upload updates to console.

						   .on('end', function() {

						   		console.log(`Production files will be pushed to: ${server.aws.bucket}`);

						   });

			} else {

				console.log(`Bypassing AWS.`);
				return done();

			}


	} else {

		console.log(`No settings found for AWS. Use the server.config file to configure your AWS settings.`);
		return done();

	}

}


/* -------------------------------------------------- */
/* SERVER
/* -------------------------------------------------- */

export const ftpdeploy = (done) => {

	if ( serverStatus ) {

		const server = JSON.parse(fileSync.readFileSync( files.server ));


		if ( server.ftp.upload ) {

			console.log(`Using ftp server.`);

			const conn = ftp.create({
									 host: server.ftp.host,
									 //port: server.ftp.port,
									 user: server.ftp.user,
									 password: server.ftp.password,
									 //secure: server.ftp.secure,
									 parallel: server.ftp.parallel,
									 maxConnections: server.ftp.maxConnections,
									 timeOffset: server.ftp.timeOffset,
									 idleTimeout: server.ftp.idleTimeout,
									 reload: server.ftp.reload,

									 log: util.log
			});

			const globs = [paths.build + '.htaccess',
						   paths.build + '**/*'];

			// Using base = '.' will transfer everything to /public_html correctly.
			// Turn off buffering in gulp.src for best performance.

			return gulp.src(globs, { base: paths.resolvePath(config.ftp.dist), buffer: false })
					   //.pipe(conn.newer( paths.build )) // Only upload newer files.
					   .pipe(conn.dest( server.ftp.path ))

					   .on('end', function() {

					   		console.log(`Production files will be pushed to: ${server.ftp.host} '/' ${server.ftp.path}`);

					   });

		} else {

			console.log(`Bypassing FTP.`);
			return done();

		}

	} else {

		console.log(`No settings found for FTP. Use the server.config file to configure your FTP settings.`);
		return done();

	}

}


/* -------------------------------------------------- */
/* HELPERS
/* -------------------------------------------------- */

// RUN TEST / VERSION CHECK
export const version = (done) => {

	console.log(`//////////////////////////////`);
	console.log(`//// IM FRAMEWORK V.1.0.0 ////`);
	console.log(`//////////////////////////////`);
	console.log(`///// IM COMPILER V.1.0.0 ////`);
	console.log(`//////////////////////////////`);

	console.log(`\nOS: ${system.myOS}\nVersion: ${system.myOSVersion}\n`);
	console.log(`\nProject: ${config.site.name}\nVersion: ${config.site.version}\n`);

	return done();

}


// REFRESH
export const refresh = (done) => {

	console.log(`Refreshing...`);

	panini.refresh();

	return done();

}


// RELOAD
export const reload = (done) => {

	console.log(`Reloading...`);

	browserSync.reload();

	return done();

}


// OPEN / PREVIEW PRODUCTION
export const preview = (done) => {

	if ( config.compiler.previewURL ) {

		console.log(`Opening preview: ${config.compiler.previewURL}`);

		return gulp.src( paths.build + config.compiler.previewURL )
				   .pipe(open());

	} else if ( config.compiler.previewURL != null ) {

		console.log(`Preview file not specified in ${files.config}. Bypassing preview.`);

		return done();

	} else {

		return done();

	}

}


// CLEAR CACHE
export const clearcache = (done) => {

	console.log(`Clearing cache...`);

	cache.caches = {};

	return done();

}


// COMPLETED
export const completed = (done) => {

	console.log(`//////////////////////////////`);
	console.log(`////// YOUR PROJECT HAS //////`);
	console.log(`/// SUCCESSFULLY COMPILED! ///`);
	console.log(`//////////////////////////////`);

	if ( system.beepWhenDone ) {

		beep(1)

	}

	return done();

}


// CONFIGURATION WARNING
export const configwarning = () => {

	console.log(`\n\n\n`);
	console.log(`Your gulpfile.babel.js, ${files.config}, and/or ${files.framework} has been modified. You must quit your current development session and run 'gulp test' again in order to load your new tasks and configuration file settings.`);
	console.log(`\n\n\n`);

	//return done();

}


// BACKUP
export const backup = (done) => {

	if ( system.backup ) {

		const today = new Date(),

			  hr = today.getHours(),
			  min = today.getMinutes(),
			  sec = today.getSeconds(),

			  dd = today.getDate(),
			  mm = today.getMonth() + 1, //January is 0!
			  yyyy = today.getFullYear();


		console.log(`Backing up and archiving ${config.site.name} source files...`);

		//const newVer = semver.inc(config.site.version, 'patch');

		return gulp.src(['**/*',
						 '.babelrc',
						 '.gitignore',
						 '**/.gitignore',
						 '**/.git/**/*',
						 '!' + paths.build,
						 '!' + files.revmanifest,
						 '!' + files.server,
						 //'!' + '{*.MD,*.md}',
						 '!' + '_Versions/**/*',
						 '!' + 'node_modules/**/*',
						 //'!' + paths.source + '{_*/**/*,__*/**/*}'
						 ], { base: paths.rootPath, nodir: true })

					//.pipe(zip( config.site.name + '-archive.zip' ))
					//.pipe( bump({ version: newVer }) )

				   .pipe(gulp.dest( '_Versions/' + mm + '.' + dd + '.' + yyyy + '-' + hr + '.' + min + '.' + sec  ))

				   .on('end', function () {

						console.log(`Deleting unnecessary directories...`);

						return deleteEmpty.sync( '_Versions/**/*' );

				   });

	} else {

		console.log(`Backups and archiving disabled for this build. Bypassing task.`);

		return done();

	}

}


/* -------------------------------------------------- */
/* TEST / BUILD / DEPLOY
/* -------------------------------------------------- */

// TEST
gulp.task('test', gulp.series(clearcache, version, mode, backup, clear, html, injectwebfontloader, lintjs, libsjs, frameworkjs, vendorsjs, appjs, combinevendorsjs, combineappjs, css, injectscripts, move, appicons, meta, zipassets, a11ycheck, optimizeassets, clean, sync));


// BUILD
gulp.task('build', gulp.series(version, clear, revconfig, html, injectfullstory, injectga, injectgtm, injectwebfontloader, lintjs, libsjs, frameworkjs, vendorsjs, appjs, combinevendorsjs, combineappjs, css, tempcss, criticalcss, move, zipassets, appicons, meta, a11ycheck, fingerprintassets, injectscripts, optimizeassets, robots, sitemap, clean, minify, sw, preview, completed));


// DEPLOY
//gulp.task('deploy', gulp.series('build', deployinit, awsdeploy, gitdeploy, ftpdeploy));


/* -------------------------------------------------- */
/* TASKS
/* -------------------------------------------------- */

// PARTIAL TESTING
gulp.task('dev', gulp.series(version, clear, revconfig, html, injectwebfontloader, lintjs, libsjs, frameworkjs, vendorsjs, appjs, combinevendorsjs, combineappjs, css, tempcss, criticalcss, move, appicons, meta, a11ycheck, fingerprintassets, injectscripts, optimizeassets, minify, clean, completed));


// SCRIPTS
gulp.task('devjs', gulp.series(clear, lintjs, libsjs, frameworkjs, vendorsjs, appjs, combinevendorsjs, combineappjs));
gulp.task('devcss', gulp.series(clear, css));
gulp.task('scripts', gulp.series(clear, lintjs, libsjs, frameworkjs, vendorsjs, appjs, combinevendorsjs, combineappjs, css));


// ASSETS
gulp.task('images', gulp.series(move, zipassets, optimizeassets, clean));
