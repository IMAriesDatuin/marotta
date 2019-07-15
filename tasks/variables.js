/* -------------------------------------------------- */
/* MODULES
/* -------------------------------------------------- */

// SYSTEM
var os = require('os');


// UTILITIES
import fileSync from 'fs'; // Read, sync and parse JSON files.
import location from 'path'; // Resolves pathing issues.


// CSS
import postCSS from 'gulp-postcss'; // CSS Pre and post processer.
import postCSSAutoprefixer from 'autoprefixer'; // Adds vendor prefixes using data from caniuse.com.
import postCSSCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors'; // Combine similar CSS selectors.
import postCSSMediaQueries from 'css-mqpacker'; // Combine and re-order media queries.


/* -------------------------------------------------- */
/* FILES
/* -------------------------------------------------- */

export const files = {	
						config: 'config.json',
						package: 'package.json',
						framework: 'framework.json',
						revmanifest: 'rev.json',
						server: 'server.json',
						favicon: 'favicon.json'

};

export const config = JSON.parse(fileSync.readFileSync(files.config));
export const framework = JSON.parse(fileSync.readFileSync(files.framework));
export const pkg = JSON.parse(fileSync.readFileSync(files.package)); // Expose 'package.json' just in case when need to only read (not write) from it.
//export const revmanifest = JSON.parse(fileSync.readFileSync(files.revmanifest));


/* -------------------------------------------------- */
/* SYSTEM
/* -------------------------------------------------- */

export const system = {	
						myOS: os.platform(),
						myOSVersion: os.release(),
						beepWhenDone: config.compiler.beepWhenDone,
						backup: config.compiler.backup

};


/* -------------------------------------------------- */
/* PATHS
/* -------------------------------------------------- */

export const paths = {	
						joinPath: location.join,
						resolvePath: location.resolve,
						relativePath: location.relative,
						rootPath: location.resolve(),

						source: config.paths.source,

						frameworkJS: framework.source,
						vendorsJS: config.js.vendors.source,
						appJS: config.js.app.source,
						//libsJS: config.js.libs.source,
						css: config.css.source,

						build: config.paths.build,
						scripts: config.paths.scripts,
						assets: config.paths.assets,
						webfonts: config.paths.webfonts,

						temp: '_temp/'

};


/* -------------------------------------------------- */
/* JS
/* -------------------------------------------------- */

export const jsMinifyOptions = {
								compress: {	dead_code: config.optimizations.js.removeDeadCode, // Controls unused code (true).
											drop_console: config.optimizations.js.dropConsole, // Controls console log (true).
											passes: 2
								},
								ie8: config.optimizations.js.ie8Support, // Controls support for IE8 (false).
								keep_fnames: config.optimizations.js.keepfnames, // Prevent discarding or mangling of function names. Useful for code relying on Function.prototype.name (false).
								mangle: config.optimizations.js.mangle, // Controls top level variable and function name mangling and to drop unused variables and functions (false).
								toplevel: config.optimizations.js.toplevel, // Controls top level variable and function name mangling and to drop unused variables and functions (false).
								//unsafe: true,
								//unsafe_comps: true,
								//unsafe_Function: true,
								//unsafe_math: true,
								//unsafe_proto: true,
								//unsafe_regexp: true,
								//unsafe_undefined: true,
								warnings: true

};


/* -------------------------------------------------- */
/* CSS
/* -------------------------------------------------- */

// PLUGINS
export const postCSSPlugins = [
								postCSSAutoprefixer({
														add: config.optimizations.css.autoprefix, // Controls use of Visual Cascade, if CSS is uncompressed (true).
														cascade: config.optimizations.css.cascade, // Controls adding prefixes (true).
														flexbox: config.optimizations.css.flexbox, // Controls prefixes for flexbox properties. With 'no-2009' value Autoprefixer will add prefixes only for final and IE versions of specification (true).
														grid: config.optimizations.css.grid, // Controls IE prefixes for Grid Layout properties (true).
														remove: config.optimizations.css.removeOutdatedPrefixes, // Controls outdated prefixes (true).
														supports: config.optimizations.css.supports,
														support: config.optimizations.css.support,
														//stats: true // Custom usage statistics for > 10% in my stats browsers query.
													}),

								postCSSCombineDuplicatedSelectors({ removeDuplicatedProperties: config.optimizations.css.removeDuplicatedProperties }),
								postCSSMediaQueries({ sort: true })

							];


// PURGE
export const purgeCSSOptions = {
								content: [paths.build + '**/*.{html,php}',
										  paths.build + '**/*.js'],
								css: [paths.build + '**/*.css'],
								//whitelistPatterns: [config.optimizations.css.whitelist],
								//whitelistPatternsChildren: [config.optimizations.css.whitelist]

};


// CLEAN
/*
export const cleanCSSOptions = {
								compatibility: '*',
								rebase: config.optimizations.css.rebase,
								//rebaseTo: './',
								level: {
										1: {
											all: true,
											replaceMultipleZeros: true, // Contols removing redundant zeros; defaults to (true).
											replaceZeroUnits: false, // Controls replacing zero values with units; defaults to (true).
											specialComments: false
										},
										2: {
											mergeAdjacentRules: false, // Controls merging adjacent rules (false). *Note: Might cause unusual results. 
											mergeIntoShorthands: false, // Controls merging properties into shorthands (false). *Note: Might cause unusual results. 
											mergeMedia: false, // Controls merging @media rules (true). *Note: Might cause unusual results.
											mergeNonAdjacentRules: false, // Controls merging non-adjacent rules (true).
											mergeSemantically: false, // Controls semantic merging (false).
											overrideProperties: true, // Controls property overriding based on understandability (true).
											removeEmpty: true, // Controls empty rules and nested blocks (true).
											reduceNonAdjacentRules: true, // Controls non-adjacent rules (true).
											removeDuplicateFontRules: true, // Controls duplicate @font-face (true).
											removeDuplicateMediaBlocks: true, // Controls duplicate @media (true).
											removeDuplicateRules: true, // Controls duplicate rules (true).
											removeUnusedAtRules: false, // Controls unused at rule (false). *Note: Available since 4.1.0.
											restructureRules: false, // Controls rule restructuring (false).
											skipProperties: [] // Controls which properties won't be optimized, defaults to '[]' which means all will be optimized (since 4.1.0).
										}
								}

};
*/


export const cleanCSSOptions = {
								compatibility: '*',
								rebase: config.optimizations.css.rebase,
								//rebaseTo: './',
								level: {
										1: {
											all: true,
											replaceMultipleZeros: true, // Contols removing redundant zeros; defaults to (true).
											replaceZeroUnits: true, // Controls replacing zero values with units; defaults to (true).
											specialComments: false
										},
										2: {
											mergeAdjacentRules: false, // Controls merging adjacent rules (false). *Note: Might cause unusual results. 
											mergeIntoShorthands: false, // Controls merging properties into shorthands (false). *Note: Might cause unusual results. 
											mergeMedia: true, // Controls merging @media rules (true). *Note: Might cause unusual results.
											mergeNonAdjacentRules: true, // Controls merging non-adjacent rules (true).
											mergeSemantically: false, // Controls semantic merging (false).
											overrideProperties: true, // Controls property overriding based on understandability (true).
											removeEmpty: true, // Controls empty rules and nested blocks (true).
											reduceNonAdjacentRules: true, // Controls non-adjacent rules (true).
											removeDuplicateFontRules: true, // Controls duplicate @font-face (true).
											removeDuplicateMediaBlocks: true, // Controls duplicate @media (true).
											removeDuplicateRules: true, // Controls duplicate rules (true).
											removeUnusedAtRules: true, // Controls unused at rule (false). *Note: Available since 4.1.0.
											restructureRules: false, // Controls rule restructuring (false).
											skipProperties: [] // Controls which properties won't be optimized, defaults to '[]' which means all will be optimized (since 4.1.0).
										}
								}

};


/* -------------------------------------------------- */
/* HTML
/* -------------------------------------------------- */

export const htmlMinifyOptions = {
									caseSensitive: true,
									collapseBooleanAttributes: true,
									collapseInlineTagWhitespace: false,
									collapseWhitespace: true,
									conservativeCollapse: false,
									customAttrAssign: [],
									customAttrCollapse: null,
									customAttrSurround: [],
									customEventAttributes: [],
									decodeEntities: false,
									html5: true,
									ignoreCustomComments: [],
									ignoreCustomFragments: [],
									includeAutoGeneratedTags: true,
									keepClosingSlash: false,
									maxLineLength: null,
									minifyCSS: true,
									minifyJS: true,
									minifyURLs: false,
									preserveLineBreaks: false,
									preventAttributeEscaping: false,
									processConditionalComments: false,
									processScripts: [],
									quoteCharacter: '',
									removeAttributeQuotes: false,
									removeComments: true,
									removeEmptyAttributes: false,
									removeEmptyElements: false,
									removeOptionalTags: false,
									removeRedundantAttributes: false,
									removeScriptTypeAttributes: true,
									removeStyleLinkTypeAttributes: true,
									removeTagWhitespace: false,
									sortAttributes: true,
									sortClassName: true,
									trimCustomFragments: false,
									useShortDoctype: true

};


/* -------------------------------------------------- */
/* SVG
/* -------------------------------------------------- */

export const svgMinifyOptions = {
								addAttributesToSVGElement: true, // Adds attributes to an outer <svg> element (false).
								addClassesToSVGElement: true, // Add classnames to an outer <svg> element (false).
								cleanupAttrs: config.images.svg.cleanup, // Cleanup attributes from newlines, trailing, and repeating spaces.
								cleanupEnableBackground: config.images.svg.cleanup, // Remove or cleanup enable-background attribute when possible.
								cleanupIDs: config.images.svg.cleanup, // Remove unused and minify used IDs.
								cleanupListOfValues: config.images.svg.cleanup, // Round numeric values in attributes that take a list of numbers (like viewBox or enable-background).
								cleanupNumericValues: config.images.svg.cleanup, // Round numeric values to the fixed precision, remove default px units.
								collapseGroups: config.images.svg.minify, // Collapse useless groups.
								convertColors: true, // Convert colors (from rgb() to #rrggbb, from #rrggbb to #rgb).
								convertPathData: config.images.svg.minify, // Convert Path data to relative or absolute (whichever is shorter), convert one segment to another, trim useless delimiters, smart rounding, and much more.
								convertShapeToPath: config.images.svg.minify, // Convert some basic shapes to <path>.
								convertStyleToAttrs: true, // Convert styles into attributes.
								convertTransform: config.images.svg.minify, // Collapse multiple transforms into one, convert matrices to the short aliases, and much more.

								inlineStyles: true, // Move and merge styles from <style> elements to element style attributes.

								mergePaths: config.images.svg.minify, // Merge multiple Paths into one.
								minifyStyles: config.images.svg.minify, // Minify <style> elements content with CSSO.
								moveElemsAttrsToGroup: true, // Move elements' attributes to their enclosing group.
								moveGroupAttrsToElems: true, // Move some group attributes to the contained elements.

								removeAttrs: true, // Remove attributes by pattern (false).
								removeComments: config.images.svg.minify, // Remove comments.
								removeDimensions: true, // Remove width/height attributes if viewBox is present; opposite to removeViewBox, disable it first (false).
								removeDoctype: config.images.svg.cleanup, // Remove doctype declaration.
								removeDesc: config.images.svg.cleanup, // Remove <desc>.
								removeEditorsNSData: config.images.svg.minify, // Remove editors namespaces, elements, and attributes.
								removeElementsByAttr: config.images.svg.minify, // Remove arbitrary elements by ID or className (false).

								removeEmptyAttrs: config.images.svg.cleanup, // Remove empty attributes.
								removeEmptyContainers: config.images.svg.cleanup, // Remove empty Container elements.
								removeEmptyText: config.images.svg.removeEmptyText, // Remove empty Text elements.
								removeTitle: config.images.svg.removeTitle, // Remove <title>.
								removeHiddenElems: config.images.svg.cleanup, // Remove hidden elements.
								removeMetadata: config.images.svg.removeMetadata, // Remove <metadata>.
								removeNonInheritableGroupAttrs: config.images.svg.minify, // Remove non-inheritable group's 'presentation' attributes.
								removeRasterImages: config.images.svg.removeRaster, // Remove raster images (false).
								removeScriptElement: config.images.svg.removeScript, // Remove <script> elements (false).
								removeStyleElement: config.images.svg.removeStyle, // Remove <style> elements (false).
								removeUnknownsAndDefaults: config.images.svg.minify, // Remove unknown elements content and attributes, remove attrs with default values.
								removeUnusedNS: config.images.svg.cleanup, // Remove unused namespaces declaration.
								removeUselessDefs: config.images.svg.cleanup, // Remove elements of <defs> without id.
								removeUselessStrokeAndFill: config.images.svg.cleanup, // Remove useless stroke and fill attrs.
								removeViewBox: config.images.svg.removeViewBox, // Remove viewBox attribute when possible.
								removeXMLNS: false, // Removes xmlns attribute for inline svg (false).
								removeXMLProcInst: true, // Remove XML processing instructions.

								sortAttrs: true // Sort element attributes for epic readability (false).

};


/* -------------------------------------------------- */
/* APP ICONS
/* -------------------------------------------------- */

export const appIconsOptions = {
								masterPicture: paths.source + config.site.icons.master,
								dest: paths.build,
								iconsPath: config.site.icons.path,
								design: {
									ios: {
										margin: config.site.icons.apple.margin,
										pictureAspect: 'backgroundAndMargin',
										backgroundColor: config.site.colors.background,
										assets: {
											ios6AndPriorIcons: false,
											ios7AndLaterIcons: false,
											precomposedIcons: false,
											declareOnlyDefaultIcon: true
										},
										appName: config.site.shortName
									},
									desktopBrowser: {},
									windows: {
										pictureAspect: 'noChange',
										backgroundColor: config.site.colors.background,
										onConflict: 'override',
										assets: {
											windows80Ie10Tile: false,
											windows10Ie11EdgeTiles: {
												small: false,
												medium: true,
												big: false,
												rectangle: false
											}
										},
										appName: config.site.shortName
									},
									androidChrome: {
										pictureAspect: 'shadow',
										themeColor: config.site.colors.theme,
										manifest: {
											name: config.site.shortName,
											display: config.site.display,
											start_url: config.site.startURL,
											orientation: 'notSet',
											onConflict: 'override',
											declared: true
										},
										assets: {
											legacyIcon: false,
											lowResolutionIcons: false
										}
									},
									safariPinnedTab: {
										pictureAspect: 'silhouette',
										themeColor: config.site.colors.theme
									}
								},
								settings: {
									compression: 5,
									scalingAlgorithm: 'Lanczos',
									errorOnImageTooSmall: false,
									readmeFile: false,
									htmlCodeFile: false,
									usePathAsIs: false
								},
								markupFile: files.favicon

};
