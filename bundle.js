/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"C:\\Users\\USER\\Data\\git\\es6-notes\""); }());


/***/ },
/* 1 */
/***/ function(module, exports) {

	function appendScriptCode(s) {
	  fetch(s.dataset.url)
	    .then(request => request.text())
	    .then(text => {
	      let code = `
	\`\`\` js
	${text}
	\`\`\`
	`;
	      s.parentElement.insertBefore(document.createTextNode(code), s.nextSibling);
	      s.parentElement.removeChild(s);
	    });
	}


	function appendScriptResult(elem) {
	  let text = elem.innerText,
	    ifr = document.createElement('iframe'),
	    result,
	    p;
	  document.body.appendChild(ifr);
	  try {
	    result = ifr.contentWindow.eval(text);
	  } catch(e) {
	    result = e;
	  }

	  result = `
	> ${result}
	`;
	  p = document.createElement('p');
	  p.appendChild(document.createTextNode(result));
	  elem.parentElement.parentElement.insertBefore(p, elem.parentElement.nextSibling);
	  document.body.removeChild(ifr);
	}

	document.addEventListener('readystatechange', () => {
	  let scripts = document.querySelectorAll("[data-url]");
	  Promise.all(Array.from(scripts).map(appendScriptCode))
	    .then(() => {
	        let markDeep = document.createElement('script');
	        markDeep.setAttribute('src','vendor/markdeep.min.js');
	        document.body.appendChild(markDeep);

	        setTimeout(() => {
	          let codes = document.querySelectorAll("code");
	          Array.from(codes).map(appendScriptResult)
	        }, 1000)
	    });
	});


/***/ }
/******/ ]);
