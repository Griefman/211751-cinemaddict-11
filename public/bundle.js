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

/***/ "./src/components/board-card.js":
/*!**************************************!*\
  !*** ./src/components/board-card.js ***!
  \**************************************/
/*! exports provided: createFilmCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCardTemplate", function() { return createFilmCardTemplate; });
// Шаблон Карточки фильма
// вставлять в .films-list__container
const createFilmCardTemplate = () => {
  return (
    `        <article class="film-card">
          <h3 class="film-card__title">The Dance of Life</h3>
          <p class="film-card__rating">8.3</p>
          <p class="film-card__info">
            <span class="film-card__year">1929</span>
            <span class="film-card__duration">1h 55m</span>
            <span class="film-card__genre">Musical</span>
          </p>
          <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
          <a class="film-card__comments">5 comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`
  );
};


/***/ }),

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/*! exports provided: createFilmsBoardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsBoardTemplate", function() { return createFilmsBoardTemplate; });
// Шаблон Доски фильмов
const createFilmsBoardTemplate = () => {
  return (
    `<section class="films">
    </section>`
  );
};


/***/ }),

/***/ "./src/components/film-card-commented.js":
/*!***********************************************!*\
  !*** ./src/components/film-card-commented.js ***!
  \***********************************************/
/*! exports provided: createMostCommentedCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMostCommentedCardTemplate", function() { return createMostCommentedCardTemplate; });
// Шаблон карточки фильма Most Commented
// вставлять в .film-list_container 2-го films-list--extra
const createMostCommentedCardTemplate = () => {
  return (
    `
<article class="film-card">
            <h3 class="film-card__title">Santa Claus Conquers the Martians</h3>
            <p class="film-card__rating">2.3</p>
            <p class="film-card__info">
              <span class="film-card__year">1964</span>
              <span class="film-card__duration">1h 21m</span>
              <span class="film-card__genre">Comedy</span>
            </p>
            <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" class="film-card__poster">
            <p class="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>
            <a class="film-card__comments">465 comments</a>
            <form class="film-card__controls">
              <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
              <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
              <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
            </form>
          </article>
    `
  );
};


/***/ }),

/***/ "./src/components/film-card-toprated.js":
/*!**********************************************!*\
  !*** ./src/components/film-card-toprated.js ***!
  \**********************************************/
/*! exports provided: createTopRatedCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopRatedCardTemplate", function() { return createTopRatedCardTemplate; });
// Шаблон карточки фильма Top Rated
// вставлять в .film-list_container 1-го films-list--extra
const createTopRatedCardTemplate = () => {
  return (
    `
    <article class="film-card">
  <h3 class="film-card__title">The Man with the Golden Arm</h3>
<p class="film-card__rating">9.0</p>
  <p class="film-card__info">
  <span class="film-card__year">1955</span>
  <span class="film-card__duration">1h 59m</span>
<span class="film-card__genre">Drama</span>
  </p>
  <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
<a class="film-card__comments">18 comments</a>
<form class="film-card__controls">
  <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
<button class="film-card__controls-item button film-card__controls-item--mark-as-watched  film-card__controls-item--active">Mark as watched</button>
  <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
  </form>
  </article>
    `
  );
};


/***/ }),

/***/ "./src/components/films-amount.js":
/*!****************************************!*\
  !*** ./src/components/films-amount.js ***!
  \****************************************/
/*! exports provided: createAmountFilmsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAmountFilmsTemplate", function() { return createAmountFilmsTemplate; });
// Шаблон Количества фильмов в футере
// вставлять в секцию .footer__statistics
const createAmountFilmsTemplate = () => {
  return (
    `
    <p>130 291 movies inside</p>
    `
  );
};


/***/ }),

/***/ "./src/components/films-list-commented.js":
/*!************************************************!*\
  !*** ./src/components/films-list-commented.js ***!
  \************************************************/
/*! exports provided: createMostCommentedTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMostCommentedTemplate", function() { return createMostCommentedTemplate; });
// Шаблон Секции Most Commented с фильмами
// вставлять в .film
const createMostCommentedTemplate = () => {
  return (
    `
    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
      </div>
    </section>
    `
  );
};


/***/ }),

/***/ "./src/components/films-list-toprated.js":
/*!***********************************************!*\
  !*** ./src/components/films-list-toprated.js ***!
  \***********************************************/
/*! exports provided: createTopRatedTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopRatedTemplate", function() { return createTopRatedTemplate; });
// Шаблон Секции TopRated с фильмами
// вставлять в .film
const createTopRatedTemplate = () => {
  return (
    `
      <section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
        <div class="films-list__container">
        </div>
      </section>
    `
  );
};


/***/ }),

/***/ "./src/components/films-list.js":
/*!**************************************!*\
  !*** ./src/components/films-list.js ***!
  \**************************************/
/*! exports provided: createListFilmsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListFilmsTemplate", function() { return createListFilmsTemplate; });
// Шаблон Секции с фильмами
// вставлять в .film
const createListFilmsTemplate = () => {
  return (
    `<section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container">
        </div>
     </section>`
  );
};


/***/ }),

/***/ "./src/components/load-more-button.js":
/*!********************************************!*\
  !*** ./src/components/load-more-button.js ***!
  \********************************************/
/*! exports provided: createShowMoreButtonTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShowMoreButtonTemplate", function() { return createShowMoreButtonTemplate; });
// Шаблон Кнопки Load More в контейнере фильмов
// вставлять в .film-list after .films-list__container
const createShowMoreButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};


/***/ }),

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/*! exports provided: createSiteMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteMenuTemplate", function() { return createSiteMenuTemplate; });
// Шаблон навигации по сайту
const createSiteMenuTemplate = () => {
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};


/***/ }),

/***/ "./src/components/sort.js":
/*!********************************!*\
  !*** ./src/components/sort.js ***!
  \********************************/
/*! exports provided: createSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortTemplate", function() { return createSortTemplate; });
// Шаблон Сортировки
const createSortTemplate = () => {
  return (
    `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
  );
};


/***/ }),

/***/ "./src/components/user-rate.js":
/*!*************************************!*\
  !*** ./src/components/user-rate.js ***!
  \*************************************/
/*! exports provided: createUseRateTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUseRateTemplate", function() { return createUseRateTemplate; });
// Шаблон Звания пользователя
const createUseRateTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
     </section>`
  )
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/board.js */ "./src/components/board.js");
/* harmony import */ var _components_board_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/board-card.js */ "./src/components/board-card.js");
/* harmony import */ var _components_film_card_commented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/film-card-commented.js */ "./src/components/film-card-commented.js");
/* harmony import */ var _components_film_card_toprated_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/film-card-toprated.js */ "./src/components/film-card-toprated.js");
/* harmony import */ var _components_films_amount_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/films-amount.js */ "./src/components/films-amount.js");
/* harmony import */ var _components_films_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/films-list.js */ "./src/components/films-list.js");
/* harmony import */ var _components_films_list_commented_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/films-list-commented.js */ "./src/components/films-list-commented.js");
/* harmony import */ var _components_films_list_toprated_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/films-list-toprated.js */ "./src/components/films-list-toprated.js");
/* harmony import */ var _components_load_more_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/load-more-button.js */ "./src/components/load-more-button.js");
/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation.js */ "./src/components/navigation.js");
/* harmony import */ var _components_sort_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sort.js */ "./src/components/sort.js");
/* harmony import */ var _components_user_rate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-rate.js */ "./src/components/user-rate.js");













const CARD_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const body = document.querySelector(`body`)
const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, Object(_components_user_rate_js__WEBPACK_IMPORTED_MODULE_11__["createUseRateTemplate"])(), `beforeend`);


const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, Object(_components_navigation_js__WEBPACK_IMPORTED_MODULE_9__["createSiteMenuTemplate"])(), `beforeend`);
render(siteMainElement, Object(_components_sort_js__WEBPACK_IMPORTED_MODULE_10__["createSortTemplate"])(), `beforeend`);
render(siteMainElement, Object(_components_board_js__WEBPACK_IMPORTED_MODULE_0__["createFilmsBoardTemplate"])(), `beforeend`);

const filmsBoard =  siteMainElement.querySelector(`.films`);
render(filmsBoard, Object(_components_films_list_js__WEBPACK_IMPORTED_MODULE_5__["createListFilmsTemplate"])(), `beforeend`);

const filmsListContainer = filmsBoard.querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT; i++) {
  render(filmsListContainer, Object(_components_board_card_js__WEBPACK_IMPORTED_MODULE_1__["createFilmCardTemplate"])(), `beforeend`);
}
render(filmsListContainer, Object(_components_load_more_button_js__WEBPACK_IMPORTED_MODULE_8__["createShowMoreButtonTemplate"])(), `beforeend`);



render(filmsBoard, Object(_components_films_list_toprated_js__WEBPACK_IMPORTED_MODULE_7__["createTopRatedTemplate"])(), `beforeend`);

const topRateContainer = filmsBoard.querySelector(`.films-list--extra .films-list__container`);

for (let i = 0; i < 2; i++) {
  render(topRateContainer, Object(_components_film_card_toprated_js__WEBPACK_IMPORTED_MODULE_3__["createTopRatedCardTemplate"])(), `beforeend`);
}

render(filmsBoard, Object(_components_films_list_commented_js__WEBPACK_IMPORTED_MODULE_6__["createMostCommentedTemplate"])(), `beforeend`);
const mostCommentedContainer = document.querySelector(`.films-list--extra:nth-last-child(1)  .films-list__container`);

for (let i = 0; i < 2; i++) {
  render(mostCommentedContainer, Object(_components_film_card_commented_js__WEBPACK_IMPORTED_MODULE_2__["createMostCommentedCardTemplate"])(), `beforeend`);
}

const footerStatistic = document.querySelector(`.footer__statistics`)
render(footerStatistic, Object(_components_films_amount_js__WEBPACK_IMPORTED_MODULE_4__["createAmountFilmsTemplate"])(), `beforeend`);
// render(body, createFilmDetailsTemplate(), `beforeend`);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map