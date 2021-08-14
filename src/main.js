import { createSiteNavTemplate } from '../view/site-nav.js';
import { createUserProfileTemplate } from '../view/user-profile.js';
import { createFilmsSortTemplate } from '../view/films-sort.js';
import { createFilmsListTemplate } from '../view/films-list.js';
import { createFilmsListExtraTemplate } from '../view/films-list-extra.js';
import { createFilmsCardTemplate } from '../view/films-card.js';
import { createButtonMoreTemplate } from '../view/button-more.js';
import { createStatisticsTemplate } from '../view/statistics.js';
import { createPopupTemplate } from '../view/popup.js';
import { generateFilm } from './mock/film-card.js';

const FILM_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
render(siteMainElement, createSiteNavTemplate(), 'afterbegin');
render(siteMainElement, createFilmsSortTemplate(), 'beforeend');
render(siteMainElement, createFilmsListTemplate(), 'afterbegin');

const siteHeaderElement = siteMainElement.querySelector('.header');
render(siteHeaderElement, createUserProfileTemplate(), 'beforeend');

const films = document.querySelector('.films');
for (let i = 0; i < 2; i++) {
  render(films, createFilmsListExtraTemplate(), 'beforeend');
}
const filmsList = document.querySelector('.films-list');
render(filmsList, createButtonMoreTemplate(), 'beforeend');

const filmsListContainer = films.querySelector('.films-list__container');
for (let i = 0; i < FILM_COUNT; i++) {
  render(filmsListContainer, createFilmsCardTemplate(), 'beforeend');
}

const filmsListExtra = films.querySelectorAll('.films-list--extra');
filmsListExtra.forEach((item) => {
  const filmsListContainerExtra = item.querySelector('.films-list__container');
  for (let i = 0; i < 2; i++) {
    render(filmsListContainerExtra, createFilmsCardTemplate(), 'beforeend');
  }
});

const sitePopupElement = document.querySelector('.film-details');
render(sitePopupElement, createPopupTemplate(), 'beforeend');

const siteFooterElement = document.querySelector('.footer__statistics');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
render(siteFooterStatisticsElement, createStatisticsTemplate(), 'beforeend');

const getFilmsMock = (amount = 20) => new Array(amount).fill.map(() => generateFilm());

getFilmsMock();
