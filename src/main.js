import { createSiteProfileTemplate } from './../view/user-profile.js';
import { createSiteNavTemplate } from './../view/site-nav.js';
import { createSiteSortTemplate } from './../view/films-sort';
import { createFilmListTemplate } from './../view/films-list.js';
import { createFilmCardTemplate } from './../view/films-card.js';
import { createFilmListExtraTemplate } from './../view/films-list-extra.js';
import { createButtonMoreTemplate } from './../view/button-more.js';
import { createStatisticsTemplate } from './../view/statistics.js';
import { createPopupTemplate } from './../view/popup.js';

import { cardData } from './mock/data-card.js';
import { RATED_COUNT, FILM_COUNT_PER_STEP, MANY_FILM_TITLES } from './utils/const.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

render(siteHeaderElement, createSiteProfileTemplate(), 'beforeend');
render(siteMainElement, createSiteNavTemplate(cardData), 'beforeend');

const navFilmsElements = document.querySelectorAll('.main-navigation__item');
navFilmsElements.forEach((link) => {
  link.addEventListener('click', () => {
    navFilmsElements.forEach(((btn) => {
      btn.classList.remove('main-navigation__item--active');
    }));
    link.classList.add('main-navigation__item--active');
  });
});

render(siteMainElement, createSiteSortTemplate(), 'beforeend');
render(siteMainElement, createFilmListTemplate(), 'beforeend');

const films = document.querySelector('.films');
const filmsList = document.querySelector('.films-list');
const filmsListContainer = document.querySelector('.films-list__container');

for (let i = 0; i < Math.min(cardData.length, FILM_COUNT_PER_STEP); i++) {
  render(filmsListContainer, createFilmCardTemplate(cardData[i]), 'beforeend');
}

const linkCommentElements = document.querySelectorAll('.film-card__comments');
linkCommentElements.forEach((link, i) => {
  link.addEventListener('click', () => {
    render(siteFooterElement, createPopupTemplate(cardData[i]), 'afterend');
  });
});

if (cardData.length > FILM_COUNT_PER_STEP) {
  let renderedTaskCount = FILM_COUNT_PER_STEP;

  render(filmsList, createButtonMoreTemplate(), 'beforeend');

  const loadMoreButton = document.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    cardData.slice(renderedTaskCount, renderedTaskCount + FILM_COUNT_PER_STEP)
      .forEach((card) => {
        render(filmsListContainer, createFilmCardTemplate(card), 'beforeend');
      });
    renderedTaskCount += FILM_COUNT_PER_STEP;

    if (renderedTaskCount >= cardData.length) {
      loadMoreButton.remove();
    }
  });
}

const titlesExtra = [{ title: 'Top rated' }, { title: 'Most commented' }];
for (let i = 0; i < MANY_FILM_TITLES; i++) {
  render(films, createFilmListExtraTemplate(titlesExtra[i]), 'beforeend');
}

const filmsExtra = document.querySelector('.films');
const filmsExtraList = filmsExtra.querySelectorAll('.films-list--extra');

const ratedFilms = cardData
  .filter((card) => card.filmInfo.totalRating > RATED_COUNT)
  .sort((a, b) => (b.filmInfo.totalRating > a.filmInfo.totalRating) ? 1 : -1)
  .slice(0, MANY_FILM_TITLES);
ratedFilms.forEach((card) => {
  const container = filmsExtraList[0].querySelector('.films-list__container');
  render(container, createFilmCardTemplate(card), 'beforeend');
});

const mostComments = cardData
  .slice()
  .sort((a, b) => b.comments.length - a.comments.length)
  .slice(0, 2);
mostComments.forEach((card) => {
  const container = filmsExtraList[1].querySelector('.films-list__container');
  render(container, createFilmCardTemplate(card), 'beforeend');
});

const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
render(siteFooterStatisticsElement, createStatisticsTemplate(cardData), 'beforeend');
