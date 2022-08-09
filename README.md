# Resources Saver &nbsp;<img src="https://raw.githubusercontent.com/Alex313031/Resources-Saver/main/icon.svg" width="48">

### Chromium Extension for one click downloading of all webpage resources files while keeping folder structures.

Install on Chromium based browsers from here > https://chrome.google.com/webstore/detail/resources-saver/nlfcijlhljpenllloeheihmhoobeefpc

It is a fork of > https://github.com/up209d/ResourcesSaverExt

- 2.1.1: Update icon and update to manifest v3 - Alex313031

- 2.0.0: Fix styles and descriptions - Alex313031

- 0.1.9: Add download list - This and all previous versions were made by [up209d](https://github.com/up209d/)

- 0.1.8: fixed zip file uncompressing with missing path issue in Window

- 0.1.7: fixed Url to Path converting bug

- 0.1.6: Convert all async getContent to sync getContent before filtering and downloading

- 0.1.5:
    + Add Resource Collector for XHRs in case XHR getContent doesn't work later on - [@ccinelli](https://github.com/ccinelli)
    + Add timeout 5s for getContent as in some case the getContent function take forever to run callback
    + Resolve the filenames of XHRs request as some XHRs point to same url with different query string (filename filename-[hash] filename-[hash] ...)
    + Add "Keep all No Content files" option

- 0.1.4: Change download file name into corresponding domain name instead of 'all.zip'

- 0.1.3: Downloading issue potential fix

- 0.1.2: File extension detector bug fixes.

- 0.1.1: Beautify([js-beautify](https://github.com/beautify-web/js-beautify)) JS,HTML,CSS code before fetching.

- 0.1.0: Unicode file path/name compatibility.

- 0.0.9: Add a compressing option that fetch all resources from browser-cache, compress([zip.js](https://gildas-lormeau.github.io/zip.js/)) & download at once. Thanks to [@shanligang](https://github.com/shanligang) for great idea/contribution!

- 0.0.8: Continue download on Chrome runtime error, bug fixes, violating path fixes.

- 0.0.7: Violating path fixes.

- 0.0.6: Bug fixes.

- 0.0.5: Improve stabitility. Bug fixes.

- 0.0.4: Including download for assests by XHR requests.

- 0.0.3: Bug Fixes.

- 0.0.2: Extension now re-fetchs resource contents from browser-cache in order to improve speed & stability.

- 0.0.1: Download all webpages by re-dowloading them from resource-urls.

### Screenshots

![alt text](https://raw.githubusercontent.com/Alex313031/Resources-Saver/main/screenshot.png?raw=true)

Outputs results with the same folder structure as online sources:

![alt text](https://raw.githubusercontent.com/Alex313031/Resources-Saver/main/screenshot2.png?raw=true)
