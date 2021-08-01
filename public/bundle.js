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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/site-nav.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/user-profile.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/films-sort.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/films-list.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/films-list-extra.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/films-card.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/button-more.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/statistics.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './view/popup.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




 //смотри коммент ниже при обьявлении const 38строка





const TASK_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
render(siteMainElement, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/site-nav.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'afterbegin');
render(siteMainElement, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/films-sort.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'beforeend');
render(siteMainElement, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/films-list.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'afterbegin');

const siteHeaderElement = siteMainElement.querySelector('.header');
render(siteHeaderElement, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/user-profile.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'beforeend');

const films = document.querySelector('.films');
for (let i = 0; i < 2; i++) {
  render(films, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/films-list-extra.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())() < 'beforeend');
}
const filmsList = document.querySelector('.films-list');
render(filmsList, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/button-more.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'beforeend');

const filmsListContainer = films.querySelector('.films-list__container');
for (let i = 0; i < TASK_COUNT; i++) {
  render(filmsListContainer, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/films-card.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'beforeend');
}

// const filmsListExtra = films.querySelectorAll('.films-list--extra');
// Потерял мысль по поводу createFilmsListExtraTemplate не понимаю какую функцию или метод нужно использовать далее

const sitePopupElement = document.querySelector('.film-details');
render(sitePopupElement, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/popup.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'beforeend');

const siteFooterElement = document.querySelector('.footer__statistics');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
render(siteFooterStatisticsElement, !(function webpackMissingModule() { var e = new Error("Cannot find module './view/statistics.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'beforeend');


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map