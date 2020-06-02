/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/InitType1.js":
/*!**************************!*\
  !*** ./src/InitType1.js ***!
  \**************************/
/*! exports provided: initListenersType1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initListenersType1\", function() { return initListenersType1; });\nfunction initListenersType1(\r\n  zad11Id,\r\n  zad111Id,\r\n  zad112Id,\r\n  zad113Id,\r\n  Zad12Id,\r\n  Odp12Id\r\n) {\r\n  const zad11 = document.querySelector(zad11Id);\r\n\r\n  zad11.addEventListener(\"click\", () => {\r\n    const checkbox1 = document.querySelector(zad111Id);\r\n    const checkbox2 = document.querySelector(zad112Id);\r\n    const checkbox3 = document.querySelector(zad113Id);\r\n\r\n    const greenMarks = document.querySelectorAll(\".mark-check-green\");\r\n    const redMarks = document.querySelectorAll(\".mark-check-red\");\r\n\r\n    greenMarks.forEach((greenMark) => {\r\n      if (!greenMark.classList.contains(\"inactive\"))\r\n        greenMark.classList.add(\"inactive\");\r\n    });\r\n\r\n    redMarks.forEach((redMark) => {\r\n      if (!redMark.classList.contains(\"inactive\"))\r\n        redMark.classList.add(\"inactive\");\r\n    });\r\n\r\n    if (checkbox1.checked) {\r\n      greenMarks[0].classList.remove(\"inactive\");\r\n    } else {\r\n      redMarks[0].classList.remove(\"inactive\");\r\n    }\r\n\r\n    if (checkbox2.checked) {\r\n      redMarks[1].classList.remove(\"inactive\");\r\n    } else {\r\n      greenMarks[1].classList.remove(\"inactive\");\r\n    }\r\n\r\n    if (checkbox3.checked) {\r\n      redMarks[2].classList.remove(\"inactive\");\r\n    } else {\r\n      greenMarks[2].classList.remove(\"inactive\");\r\n    }\r\n  });\r\n\r\n  const zad12 = document.querySelector(Zad12Id);\r\n\r\n  zad12.addEventListener(\"click\", () => {\r\n    const odp12 = document.querySelector(Odp12Id);\r\n    if (odp12.classList.contains(\"inactive\"))\r\n      odp12.classList.remove(\"inactive\");\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/InitType1.js?");

/***/ }),

/***/ "./src/Zadanie1.js":
/*!*************************!*\
  !*** ./src/Zadanie1.js ***!
  \*************************/
/*! exports provided: getHTMLZad1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHTMLZad1\", function() { return getHTMLZad1; });\nlet zad1DOM =\r\n  '<div class=\"zadanie\" style=\"grid-template-rows: 200px 2fr 2fr\";>' +\r\n  '        <div class=\"zadanie_hero\">' +\r\n  \"         <h2>Zadanie 1: Kulki w butli</h2>\" +\r\n  \"        </div>\" +\r\n  '        <div class=\"zadanie_tresc\">' +\r\n  \"          <p>Spójrz na załączony film</p>\" +\r\n  \"          <p>\" +\r\n  \"            1. Przy zjawiskach które mogą, wyjaśniać zachowania kulek\" +\r\n  \"            dopisz P (Prawda), w przeciwnym wypadku dopisz F (Fałsz)\" +\r\n  \"          </p>\" +\r\n  '          <div class=\"zadanie1_odp\">' +\r\n  \"            <p>- Różnice w gęstości cieczy w butelce </p>\" +\r\n  '            <input type=\"checkbox\" id=\"Zad111\" />' +\r\n  '            <i class=\"fas fa-check mark-check-green inactive\"></i>' +\r\n  '            <i class=\"fas fa-times mark-check-red inactive\"></i>' +\r\n  \"          </div>\" +\r\n  '          <div class=\"zadanie1_odp\">' +\r\n  \"            <p>- Dużo większa gęstość kulek niebieskich od białych </p>\" +\r\n  '            <input type=\"checkbox\" id=\"Zad112\" />' +\r\n  '            <i class=\"fas fa-check mark-check-green inactive\"></i>' +\r\n  '            <i class=\"fas fa-times mark-check-red inactive\"></i>' +\r\n  \"          </div>\" +\r\n  '          <div class=\"zadanie1_odp\">' +\r\n  \"            <p>- Dyfuzja cząsteczek cieczy</p>\" +\r\n  '            <input type=\"checkbox\" id=\"Zad113\" />' +\r\n  '            <i class=\"fas fa-check mark-check-green inactive\"></i>' +\r\n  '            <i class=\"fas fa-times mark-check-red inactive\"></i>' +\r\n  \"          </div>\" +\r\n  '          <div class=\"zadanie_odpowiedz\">' +\r\n  '            <button id=\"Zad11\">Sprawdź</button>' +\r\n  \"          </div>\" +\r\n  \"          <p>\" +\r\n  \"            2. Zaproponuj co może być przyczyną takiego zachowania kulek.\" +\r\n  \"            Uzasadnij odpowiedź.\" +\r\n  \"          </p>\" +\r\n  \"          <p>\" +\r\n  \"            Pytanie podpowiedź: Czy w butelce mogą znajdować się dwie\" +\r\n  \"            różne ciecze?\" +\r\n  \"          </p>\" +\r\n  '          <div class=\"zadanie_odpowiedz\">' +\r\n  '            <button id=\"Zad12\">Odpowiedź</button>' +\r\n  '            <p id=\"Odp12\" class=\"inactive\">' +\r\n  \"              Odpowiedź - To wszystko wina sędziego\" +\r\n  \"            </p>\" +\r\n  \"          </div>\" +\r\n  \"        </div>\" +\r\n  '        <div class=\"zadanie_film\">' +\r\n  '          <div id=\"video1\" class=\"embeded\"></div>' +\r\n  \"        </div>\" +\r\n  \" </div>\";\r\n\r\nfunction getHTMLZad1() {\r\n  return zad1DOM;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/Zadanie1.js?");

/***/ }),

/***/ "./src/Zadanie2.js":
/*!*************************!*\
  !*** ./src/Zadanie2.js ***!
  \*************************/
/*! exports provided: getHTMLZad2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHTMLZad2\", function() { return getHTMLZad2; });\nlet zad2DOM =\r\n  '<div class=\"zadanie\" style=\"grid-template-rows: 200px auto;\">' +\r\n  '        <div class=\"zadanie_hero\">' +\r\n  \"          <h2>Zadanie 2: Pociąg</h2>\" +\r\n  \"        </div>\" +\r\n  '        <div class=\"zadanie_tresc\">' +\r\n  \"          <p>\" +\r\n  \"            <span\" +\r\n  \"              >Jedziemy pociągiem, który porusza się ruchem jednostajnym,\" +\r\n  \"              prostoliniowym i puszczamy w nim swobodnie piłkę tenisową.</span\" +\r\n  \"            >\" +\r\n  \"          </p>\" +\r\n  \"          <p>\" +\r\n  \"            <span><span> </span></span>\" +\r\n  \"          </p>\" +\r\n  \"          <p>\" +\r\n  \"            <span\" +\r\n  \"              >1. Czy w układzie peronu, równoległego do pociągu, tor\" +\r\n  \"              ruchu piłki będzie inny niż w układzie pociągu?</span\" +\r\n  \"            >\" +\r\n  \"          </p>\" +\r\n  '          <div class=\"zadanie1_odp\">' +\r\n  \"            <p>\" +\r\n  \"              a) Nie, we wszystkich układach tor piłki będzie taki sam.\" +\r\n  \"            </p>\" +\r\n  '            <input type=\"checkbox\" id=\"Zad211\" />' +\r\n  '            <i class=\"fas fa-check mark-check-green inactive\"></i>' +\r\n  '            <i class=\"fas fa-times mark-check-red inactive\"></i>' +\r\n  \"          </div>\" +\r\n  '          <div class=\"zadanie1_odp\">' +\r\n  \"            <p>\" +\r\n  \"              b) Tak, w układzie peronu pociąg porusza się, dlatego tor piłki\" +\r\n  \"              będzie zakrzywiony.\" +\r\n  \"            </p>\" +\r\n  '            <input type=\"checkbox\" id=\"Zad212\" />' +\r\n  '            <i class=\"fas fa-check mark-check-green inactive\"></i>' +\r\n  '            <i class=\"fas fa-times mark-check-red inactive\"></i>' +\r\n  \"          </div>\" +\r\n  '          <div class=\"zadanie1_odp\">' +\r\n  \"            <p>\" +\r\n  \"              c) Tak, w układzie peronu tor piłki będzie linią prostą.\" +\r\n  \"            </p>\" +\r\n  '            <input type=\"checkbox\" id=\"Zad213\" />' +\r\n  '            <i class=\"fas fa-check mark-check-green inactive\"></i>' +\r\n  '            <i class=\"fas fa-times mark-check-red inactive\"></i>' +\r\n  \"          </div>\" +\r\n  '          <div class=\"zadanie_odpowiedz\">' +\r\n  '            <button id=\"Zad21\">Sprawdź</button>' +\r\n  \"          </div>\" +\r\n  \"          <p>\" +\r\n  \"            <span><span> </span></span>\" +\r\n  \"          </p>\" +\r\n  \"          <p>\" +\r\n  \"            2. Podskakujemy w pociągu, ale lądujemy w tym samym miejscu w\" +\r\n  \"            przedziale, z którego wyskoczyliśmy. Dlaczego tak się stało,\" +\r\n  \"            skoro pociąg jedzie?\" +\r\n  \"          </p>\" +\r\n  '          <div class=\"zadanie_odpowiedz\">' +\r\n  '            <button id=\"Zad22\">Odpowiedź</button>' +\r\n  '            <p id=\"Odp22\" class=\"inactive\">' +\r\n  \"              Odpowiedź - To wszystko wina sędziego\" +\r\n  \"            </p>\" +\r\n  \"          </div>\" +\r\n  \"        </div>\";\r\n\r\nfunction getHTMLZad2() {\r\n  return zad2DOM;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/Zadanie2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Zadanie1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zadanie1 */ \"./src/Zadanie1.js\");\n/* harmony import */ var _Zadanie2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Zadanie2 */ \"./src/Zadanie2.js\");\n/* harmony import */ var _scriptAppend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scriptAppend */ \"./src/scriptAppend.js\");\n/* harmony import */ var _InitType1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InitType1 */ \"./src/InitType1.js\");\n\r\n\r\n\r\n\r\n\r\nconst container = document.querySelector(\".container\");\r\nconst spisZadan = document.querySelector(\"#spis-zadan\");\r\n\r\nlet spisZadanDOM =\r\n  '<div class=\"list-zadania\">' +\r\n  \"        <ul>\" +\r\n  '          <li><button class=\"list-item-zadanie\">Zadanie 1</button></li>' +\r\n  '         <li><button class=\"list-item-zadanie\">Zadanie 2</button></li>' +\r\n  \"          <li>Zadanie 3</li>\" +\r\n  \"          <li>Zadanie 4</li>\" +\r\n  \"          <li>Zadanie 5</li>\" +\r\n  \"          <li>Zadanie 6</li>\" +\r\n  \"          <li>Zadanie 7</li>\" +\r\n  \"          <li>Zadanie 8</li>\" +\r\n  \"          <li>Zadanie 9</li>\" +\r\n  \"          <li>Zadanie 10</li>\" +\r\n  \"          <li>Zadanie 11</li>\" +\r\n  \"          <li>Zadanie 12</li>\" +\r\n  \"          <li>Zadanie 13</li>\" +\r\n  \"          <li>Zadanie 14</li>\" +\r\n  \"          <li>Zadanie 15</li>\" +\r\n  \"        </ul>\" +\r\n  \"      </div>\";\r\n\r\ncontainer.insertAdjacentHTML(\"beforeend\", spisZadanDOM);\r\ninitList();\r\n\r\nspisZadan.addEventListener(\"click\", () => {\r\n  while (container.hasChildNodes()) container.firstChild.remove();\r\n  Object(_scriptAppend__WEBPACK_IMPORTED_MODULE_2__[\"removeScripts\"])();\r\n  container.insertAdjacentHTML(\"beforeend\", spisZadanDOM);\r\n  initList();\r\n});\r\n\r\nfunction initList() {\r\n  const zadaniaList = document.querySelectorAll(\".list-item-zadanie\");\r\n\r\n  zadaniaList[0].addEventListener(\"click\", () => {\r\n    while (container.hasChildNodes()) container.firstChild.remove();\r\n    let zadanie = Object(_Zadanie1__WEBPACK_IMPORTED_MODULE_0__[\"getHTMLZad1\"])();\r\n    container.insertAdjacentHTML(\"beforeend\", zadanie);\r\n    Object(_InitType1__WEBPACK_IMPORTED_MODULE_3__[\"initListenersType1\"])(\r\n      \"#Zad11\",\r\n      \"#Zad111\",\r\n      \"#Zad112\",\r\n      \"#Zad113\",\r\n      \"#Zad12\",\r\n      \"#Odp12\"\r\n    );\r\n    Object(_scriptAppend__WEBPACK_IMPORTED_MODULE_2__[\"appendScripts\"])();\r\n  });\r\n\r\n  zadaniaList[1].addEventListener(\"click\", () => {\r\n    while (container.hasChildNodes()) container.firstChild.remove();\r\n    let zadanie = Object(_Zadanie2__WEBPACK_IMPORTED_MODULE_1__[\"getHTMLZad2\"])();\r\n    container.insertAdjacentHTML(\"beforeend\", zadanie);\r\n    Object(_InitType1__WEBPACK_IMPORTED_MODULE_3__[\"initListenersType1\"])(\r\n      \"#Zad21\",\r\n      \"#Zad211\",\r\n      \"#Zad212\",\r\n      \"#Zad213\",\r\n      \"#Zad22\",\r\n      \"#Odp22\"\r\n    );\r\n    Object(_scriptAppend__WEBPACK_IMPORTED_MODULE_2__[\"appendScripts\"])();\r\n  });\r\n}\r\n\r\ninitList();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scriptAppend.js":
/*!*****************************!*\
  !*** ./src/scriptAppend.js ***!
  \*****************************/
/*! exports provided: appendScripts, removeScripts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendScripts\", function() { return appendScripts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeScripts\", function() { return removeScripts; });\nfunction appendScripts() {\r\n  let my_awesome_script = document.createElement(\"script\");\r\n  let my_awesome_script2 = document.createElement(\"script\");\r\n  let my_awesome_script3 = document.createElement(\"script\");\r\n\r\n  my_awesome_script.setAttribute(\"src\", \"video.js\");\r\n  my_awesome_script.id = \"script1\";\r\n  my_awesome_script2.setAttribute(\r\n    \"src\",\r\n    \"https://s.ytimg.com/yts/jsbin/www-widgetapi-vflLp9fFF/www-widgetapi.js\"\r\n  );\r\n  my_awesome_script2.id = \"www-widgetapi-script\";\r\n  my_awesome_script2.type = \"text/javascript\";\r\n  my_awesome_script2.async = \"\";\r\n  my_awesome_script3.setAttribute(\"src\", \"https://www.youtube.com/player_api\");\r\n  my_awesome_script3.id = \"script3\";\r\n\r\n  document.body.appendChild(my_awesome_script2);\r\n  document.body.appendChild(my_awesome_script3);\r\n  document.body.appendChild(my_awesome_script);\r\n}\r\n\r\nfunction removeScripts() {\r\n  let my_awesome_script = document.querySelector(\"#script1\");\r\n  let my_awesome_script3 = document.querySelector(\"#script3\");\r\n  let my_awesome_script2 = document.querySelector(\"#www-widgetapi-script\");\r\n\r\n  my_awesome_script.remove();\r\n  my_awesome_script3.remove();\r\n  my_awesome_script2.remove();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/scriptAppend.js?");

/***/ })

/******/ });