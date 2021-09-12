import ProfileView from './view/user-profile.js';
import NavView from './view/site-nav.js';
import SortView from './view/films-sort.js';
import FilmsListView from './view/films-list.js';
import FilmCardView from './view/films-card.js';
import FilmsListExtraView from './view/films-list-extra.js';
import LoadMoreButtonView from './view/button-more.js';
import StatisticView from './view/statistics.js';
import PopupCardView from './view/popup.js';
import FilmNoCardView from './view/film-no-card.js';

import { cardData } from './mock/data-card.js';
import { RATED_COUNT, FILM_COUNT_PER_STEP, MANY_FILM_TITLES } from './utils/const.js';
import { generateFilter } from './utils/filters.js';

const filters = generateFilter(cardData);

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    document.querySelector('.film-details').remove();
    document.removeEventListener('keydown', onEscKeyDown);
    document.querySelector('body').classList.remove('hide-overflow');
  }
};

const renderFilmCard = (container, data) => {
  const filmCardComponent = new FilmCardView(data);
  const popupCardComponent = new PopupCardView(data);

  const openPopupCard = () => {
    if (document.querySelector('.film-details')) {
      document.querySelector('.film-details').remove();
    }
    siteFooterElement.appendChild(popupCardComponent.getElement());
    document.querySelector('body').classList.add('hide-overflow');
    document.addEventListener('keydown', onEscKeyDown);
  };

  const filmCard = filmCardComponent.getElement();

  filmCard.querySelector('.film-card__poster').addEventListener('click', () => {
    openPopupCard();
  });

  filmCard.querySelector('.film-card__comments').addEventListener('click', () => {
    openPopupCard();
  });

  filmCard.querySelector('.film-card__title').addEventListener('click', () => {
    openPopupCard();
  });

  popupCardComponent.getElement().querySelector('.film-details__close-btn').addEventListener('click', () => {
    document.removeEventListener('keydown', onEscKeyDown);
    document.querySelector('.film-details').remove();
    document.querySelector('body').classList.remove('hide-overflow');
  });

  container.appendChild(filmCardComponent.getElement());
};

const renderFilmsList = (listContainer, data) => {
  listContainer.appendChild(new FilmsListView().getElement());
  const films = document.querySelector('.films');
  const filmsList = films.querySelector('.films-list');
  const filmsListContainer = films.querySelector('.films-list__container');

  if (data.length === 0) {
    filmsList.appendChild(new FilmNoCardView().getElement());
    return;
  }

  for (let i = 0; i < Math.min(data.length, FILM_COUNT_PER_STEP); i++) {
    renderFilmCard(filmsListContainer, data[i]);
  }

  const titleExtra = [{ title: 'Top rated' }, { title: 'Most commented' }];
  for (let i = 0; i < MANY_FILM_TITLES; i++) {
    films.appendChild(new FilmsListExtraView(titleExtra[i]).getElement());
  }

  const filmsExtraList = films.querySelectorAll('.films-list--extra');
  const ratedFilms = data
    .filter((card) => card.filmInfo.totalRating > RATED_COUNT)
    .sort((a, b) => (b.filmInfo.totalRating > a.filmInfo.totalRating) ? 1 : -1)
    .slice(0, 2);
  ratedFilms.forEach((card) => {
    const container = filmsExtraList[0].querySelector('.films-list__container');
    renderFilmCard(container, card);
  });

  const mostComments = data
    .slice()
    .sort((a, b) => b.comments.length - a.comments.length)
    .slice(0, 2);
  mostComments.forEach((card) => {
    const container = filmsExtraList[1].querySelector('.films-list__container');
    renderFilmCard(container, card);
  });

  if (data.length > FILM_COUNT_PER_STEP) {
    let renderedTaskCount = FILM_COUNT_PER_STEP;

    filmsList.appendChild(new LoadMoreButtonView().getElement());

    const loadMoreButton = document.querySelector('.films-list__show-more');

    loadMoreButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      data.slice(renderedTaskCount, renderedTaskCount + FILM_COUNT_PER_STEP)
        .forEach((card) => {
          renderFilmCard(filmsListContainer, card);
        });
      renderedTaskCount += FILM_COUNT_PER_STEP;

      if (renderedTaskCount >= cardData.length) {
        loadMoreButton.remove();
      }
    });
  }
};

siteHeaderElement.appendChild(new ProfileView().getElement());
siteMainElement.appendChild(new NavView(filters).getElement());
siteMainElement.appendChild(new SortView().getElement());
renderFilmsList(siteMainElement, cardData);
siteFooterStatisticsElement.appendChild(new StatisticView(cardData).getElement());
