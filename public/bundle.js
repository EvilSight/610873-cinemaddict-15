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
/* harmony import */ var _view_site_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-nav.js */ "./view/site-nav.js");
/* harmony import */ var _view_user_profile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/user-profile.js */ "./view/user-profile.js");
/* harmony import */ var _view_films_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/films-sort.js */ "./view/films-sort.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/films-list.js */ "./view/films-list.js");
/* harmony import */ var _view_films_list_extra_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/films-list-extra.js */ "./view/films-list-extra.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../view/films-card.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _view_button_more_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/button-more.js */ "./view/button-more.js");
/* harmony import */ var _view_statistics_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/statistics.js */ "./view/statistics.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/popup.js */ "./view/popup.js");




 //смотри коммент ниже при обьявлении const 38строка





const TASK_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
render(siteMainElement, Object(_view_site_nav_js__WEBPACK_IMPORTED_MODULE_0__["createSiteNavTemplate"])(), 'afterbegin');
render(siteMainElement, Object(_view_films_sort_js__WEBPACK_IMPORTED_MODULE_2__["createFilmsSortTemplate"])(), 'beforeend');
render(siteMainElement, Object(_view_films_list_js__WEBPACK_IMPORTED_MODULE_3__["createFilmsListTemplate"])(), 'afterbegin');

const siteHeaderElement = siteMainElement.querySelector('.header');
render(siteHeaderElement, Object(_view_user_profile_js__WEBPACK_IMPORTED_MODULE_1__["createUserProfileTemplate"])(), 'beforeend');

const films = document.querySelector('.films');
for (let i = 0; i < 2; i++) {
  render(films, Object(_view_films_list_extra_js__WEBPACK_IMPORTED_MODULE_4__["createFilmsListExtraTemplate"])() < 'beforeend');
}
const filmsList = document.querySelector('.films-list');
render(filmsList, Object(_view_button_more_js__WEBPACK_IMPORTED_MODULE_6__["createButtonMoreTemplate"])(), 'beforeend');

const filmsListContainer = films.querySelector('.films-list__container');
for (let i = 0; i < TASK_COUNT; i++) {
  render(filmsListContainer, !(function webpackMissingModule() { var e = new Error("Cannot find module '../view/films-card.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), 'beforeend');
}

// const filmsListExtra = films.querySelectorAll('.films-list--extra');
// Потерял мысль по поводу createFilmsListExtraTemplate не понимаю какую функцию или метод нужно использовать далее

const sitePopupElement = document.querySelector('.film-details');
render(sitePopupElement, Object(_view_popup_js__WEBPACK_IMPORTED_MODULE_8__["createPopupTemplate"])(), 'beforeend');

const siteFooterElement = document.querySelector('.footer__statistics');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
render(siteFooterStatisticsElement, Object(_view_statistics_js__WEBPACK_IMPORTED_MODULE_7__["createStatisticsTemplate"])(), 'beforeend');


/***/ }),

/***/ "./view/button-more.js":
/*!*****************************!*\
  !*** ./view/button-more.js ***!
  \*****************************/
/*! exports provided: createButtonMoreTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonMoreTemplate", function() { return createButtonMoreTemplate; });
const createButtonMoreTemplate = () => (
    `<button class="films-list__show-more">Show more</button>`
);

/***/ }),

/***/ "./view/films-list-extra.js":
/*!**********************************!*\
  !*** ./view/films-list-extra.js ***!
  \**********************************/
/*! exports provided: createFilmsListExtraTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListExtraTemplate", function() { return createFilmsListExtraTemplate; });
const createFilmsListExtraTemplate = () => (
    `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container">
    </div>
  </section>`
);

/***/ }),

/***/ "./view/films-list.js":
/*!****************************!*\
  !*** ./view/films-list.js ***!
  \****************************/
/*! exports provided: createFilmsListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListTemplate", function() { return createFilmsListTemplate; });
const createFilmsListTemplate = () => (
    `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>`
);

/***/ }),

/***/ "./view/films-sort.js":
/*!****************************!*\
  !*** ./view/films-sort.js ***!
  \****************************/
/*! exports provided: createFilmsSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsSortTemplate", function() { return createFilmsSortTemplate; });
const createFilmsSortTemplate = () => (
    `<ul class="sort">
    <li><a href="#" class="sort__button">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button sort__button--active">Sort by rating</a></li>
  </ul>`
);

/***/ }),

/***/ "./view/popup.js":
/*!***********************!*\
  !*** ./view/popup.js ***!
  \***********************/
/*! exports provided: createPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopupTemplate", function() { return createPopupTemplate; });
const createPopupTemplate = () => (
    `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">
  
            <p class="film-details__age">18+</p>
          </div>
  
          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">The Great Flamarion</h3>
                <p class="film-details__title-original">Original: The Great Flamarion</p>
              </div>
  
              <div class="film-details__rating">
                <p class="film-details__total-rating">8.9</p>
              </div>
            </div>
  
            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">Anthony Mann</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">30 March 1945</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">1h 18m</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">USA</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  <span class="film-details__genre">Drama</span>
                  <span class="film-details__genre">Film-Noir</span>
                  <span class="film-details__genre">Mystery</span></td>
              </tr>
            </table>
  
            <p class="film-details__film-description">
              The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
            </p>
          </div>
        </div>
  
        <section class="film-details__controls">
          <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
          <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
          <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
        </section>
      </div>
  
      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>
  
          <ul class="film-details__comments-list">
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
              </span>
              <div>
                <p class="film-details__comment-text">Interesting setting and a good cast</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">Tim Macoveev</span>
                  <span class="film-details__comment-day">2019/12/31 23:59</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
              </span>
              <div>
                <p class="film-details__comment-text">Booooooooooring</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
              </span>
              <div>
                <p class="film-details__comment-text">Very very old. Meh</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
              </span>
              <div>
                <p class="film-details__comment-text">Almost two hours? Seriously?</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">Today</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
          </ul>
  
          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label"></div>
  
            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>
  
            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>
  
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>
  
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>
  
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`
);

/***/ }),

/***/ "./view/site-nav.js":
/*!**************************!*\
  !*** ./view/site-nav.js ***!
  \**************************/
/*! exports provided: createSiteNavTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteNavTemplate", function() { return createSiteNavTemplate; });
const createSiteNavTemplate = () => (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">0</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">0</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">0</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

/***/ }),

/***/ "./view/statistics.js":
/*!****************************!*\
  !*** ./view/statistics.js ***!
  \****************************/
/*! exports provided: createStatisticsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStatisticsTemplate", function() { return createStatisticsTemplate; });
const createStatisticsTemplate = () => (
    `<p>130 291 movies inside</p>`
);

/***/ }),

/***/ "./view/user-profile.js":
/*!******************************!*\
  !*** ./view/user-profile.js ***!
  \******************************/
/*! exports provided: createUserProfileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserProfileTemplate", function() { return createUserProfileTemplate; });
const createUserProfileTemplate = () => (
    `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map