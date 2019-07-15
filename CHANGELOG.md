# Changelog

## [1.0.2 preview] - 2019-26-04
### Added
- Video posters will now appear when video is paused or done playing.
- Compiler: Added `whitelist` to `config.json` under `optimizations > css`.

### Changed
- Playlist should no longer appear when the video is paused or done playing.

### Fixed
- Fixed missing classes for video elements.
- Video posters should now properly display over video source content.
- Dragging area should no longer affect click to play on video elements. 





## [1.0.1 preview] - 2019-25-04
### Added
- Added posters for video content.
- Added previous and next hit areas for select carousels.

### Changed
- General layout adjustements to some components and pages.
- Tweaked and adjusted page transitions and slightly increased the speed for intro and outro.
- Slightly increased the speed of the fullscreen menu on forward and reverse animation.
- General animation adjustments to speed and timing.
- Updated the logo.

### Fixed
- General layout fixes to some components and pages.
- SplitText should no longer throw an error if a text element it is animating does not exist in the DOM.
- Removed unused event listeners.
- Fixed carousel components not resizing accordingly when app has fully loaded.
- Fixed layout and responsive issues.





## [1.0.0] - 2019-03-04
### Added
- Added `compiler` category options in `config.json`.
- Added `cacheBuild` option in `config.json`.
- Added `rememberFiles` option in `config.json`.
- Added `beep` option in `config.json`.
- Added `backup` option in `config.json`.
- Added `webfont` option in `config.json`.
- Added `criticalcss` options in `config.json`.
- Improved and extended `site` options in `config.json`.
- `backup` task added to compiler.
- `appicons` task added to compiler.
- Compiler will now `beep` when done.
- `appicons` task will create favicons and app icons from a single master image generated from [https://realfavicongenerator.net](https://realfavicongenerator.net).
- Revised CHANGELOG.md added by [@AriesDatuin](https://github.com/ariesdatuin).

### Changed
- Merged options from `metadata.json` to `site` in `config.json`.
- Moved `production` option under `compiler` in `config.json`.
- Moved `preview` option under `compiler` in `config.json`.
- Improved `criticalcss` task.
- Improved `meta` task.
- Core/base files separated from `config.json` to `framework.json`.
- Framework assets and modules are now compiled separately and merged with `combinejs` task.
- Improved `clean` task.
- Moved variables to a separate file in `tasks/variables.js`.

### Fixed
- HTML minification should no longer result in mangled HTML when compiling elements with `data-attributes`.
- Fixed rare occurence where `criticalcss` task would inline entire CSS.
- `lintjs` task should no longer verify third-party JS plugins and libs.
- `lintjs` task should no longer verify SCSS assets.
- Compiler should no longer hang when optimizing SVG assets with no `width` and `height` defined.
- General housekeeping and improvements to compiler.

### Removed
- `metadata.json` is removed and no longer used.
- `sprite` task no longer supported.
- Removed `browserconfig.xml`.
- Removed `manifest.json`.
- Removed unnecessary tasks and modules.
