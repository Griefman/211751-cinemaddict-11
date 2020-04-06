import {createFilmsBoardTemplate} from "./components/board.js";
import {createFilmCardTemplate} from "./components/board-card.js";
import {createMostCommentedCardTemplate} from "./components/film-card-commented.js";
import {createTopRatedCardTemplate} from "./components/film-card-toprated.js";
import {createAmountFilmsTemplate} from "./components/films-amount.js";
import {createListFilmsTemplate} from "./components/films-list.js";
import {createMostCommentedTemplate} from "./components/films-list-commented.js";
import {createTopRatedTemplate} from "./components/films-list-toprated.js";
import {createShowMoreButtonTemplate} from "./components/load-more-button.js";
import {createSiteMenuTemplate} from "./components/navigation.js";
import {createSortTemplate} from "./components/sort.js";
import {createUseRateTemplate} from "./components/user-rate.js";

const CARD_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
// const body = document.querySelector(`body`);
const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, createUseRateTemplate(), `beforeend`);


const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmsBoardTemplate(), `beforeend`);

const filmsBoard = siteMainElement.querySelector(`.films`);
render(filmsBoard, createListFilmsTemplate(), `beforeend`);

const filmsListContainer = filmsBoard.querySelector(`.films-list__container`);
for (let i = 0; i < CARD_COUNT; i++) {
  render(filmsListContainer, createFilmCardTemplate(), `beforeend`);
}
render(filmsListContainer, createShowMoreButtonTemplate(), `beforeend`);

render(filmsBoard, createTopRatedTemplate(), `beforeend`);

const topRateContainer = filmsBoard.querySelector(`.films-list--extra .films-list__container`);

for (let i = 0; i < 2; i++) {
  render(topRateContainer, createTopRatedCardTemplate(), `beforeend`);
}

render(filmsBoard, createMostCommentedTemplate(), `beforeend`);
const mostCommentedContainer = document.querySelector(`.films-list--extra:nth-last-child(1)  .films-list__container`);

for (let i = 0; i < 2; i++) {
  render(mostCommentedContainer, createMostCommentedCardTemplate(), `beforeend`);
}

const footerStatistic = document.querySelector(`.footer__statistics`);
render(footerStatistic, createAmountFilmsTemplate(), `beforeend`);
// render(body, createFilmDetailsTemplate(), `beforeend`);
