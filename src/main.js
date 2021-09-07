import { SiteProfileView } from './../view/user-profile.js';
import { SiteNavView } from './../view/site-nav.js';
import { SiteSortView } from './../view/films-sort';
import { SiteFilmsListView} from './../view/films-list.js';
import { SiteFilmCardView } from './../view/films-card.js';
import { SiteFilmsListExtraView } from './../view/films-list-extra.js';
import { LoadMoreButtonView } from './../view/button-more.js';
import { SiteStatisticView } from './../view/statistics.js';
import { SitePopupCardView } from './../view/popup.js';

import { cardData } from './mock/data-card.js';
import { RATED_COUNT, FILM_COUNT_PER_STEP, MANY_FILM_TITLES } from './utils/const.js';
import { generateFilter } from './mock/data-card.js';
import { render, renderPosition } from './utils/utils.js';
import { container } from 'webpack';

const filters = generateFilter(cardData);

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

const renderFilmCard = (container, data) => {
  const filmCardComponent = new SiteFilmCardView(data);
  const popupCardComponent = new SitePopupCardView(data);

  const openPopupCard = () => {
    render(siteFooterElement, popupCardComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      document.querySelector('.film-details').remove();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  filmCardComponent.getElement().querySelector('.film-card__comments').addEventListener('click', () => {
    if (document.querySelector('.film-details')) {
      document.querySelector('.film-details').remove();
    }
    openPopupCard();
    document.addEventListener('keydown', onEscKeyDown);
  });

  popupCardComponent.getElement().querySelector('film-details__close-btn').addEventListener('click', () => {
    document.querySelector('.film-details').remove();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(container, filmCardComponent.getElement());
};

render(siteMainElement, new SiteNavView(filters).getElement());
render(siteMainElement, new SiteSortView().getElement());
render(siteMainElement, new SiteFilmsListView().getElement());

const films = document.querySelector('.films');
const filmsList = document.querySelector('.films-list');
const filmsListContainer = document.querySelector('.films-list__container');

for (let i = 0; i < Math.min(cardData.length, FILM_COUNT_PER_STEP); i++) {
  renderFilmCard(filmsListContainer, cardData[i]);
}

const linkCommentElements = document.querySelectorAll('.film-card__comments');
linkCommentElements.forEach((link, i) => {
  link.addEventListener('click', () => {
    render(siteFooterElement, new SitePopupCardView(cardData[i]).getElement(), renderPosition.AFTERBEGIN);
  });
});

if (cardData.length > FILM_COUNT_PER_STEP) {
  let renderedTaskCount = FILM_COUNT_PER_STEP;

  render(filmsList, new LoadMoreButtonView().getElement());

  const loadMoreButton = document.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    cardData.slice(renderedTaskCount, renderedTaskCount + FILM_COUNT_PER_STEP)
      .forEach((card) => {
        renderFilmCard(filmsListContainer, card);
      });
    renderedTaskCount += FILM_COUNT_PER_STEP;

    if (renderedTaskCount >= cardData.length) {
      loadMoreButton.remove();
    }
  });
}

render(siteHeaderElement, new SiteProfileView().getElement());

const titlesExtra = [{ title: 'Top rated' }, { title: 'Most commented' }];
for (let i = 0; i < MANY_FILM_TITLES; i++) {
  render(films, new SiteFilmsListExtraView(titlesExtra[i]).getElement());
}

const filmsExtraList = films.querySelectorAll('.films-list--extra');

const ratedFilms = cardData
  .filter((card) => card.filmInfo.totalRating > RATED_COUNT)
  .sort((a, b) => (b.filmInfo.totalRating > a.filmInfo.totalRating) ? 1 : -1)
  .slice(0, MANY_FILM_TITLES);
ratedFilms.forEach((card) => {
  const container = filmsExtraList[0].querySelector('.films-list__container');
  renderFilmCard(container, card);
});

const mostComments = cardData
  .slice()
  .sort((a, b) => b.comments.length - a.comments.length)
  .slice(0, 2);
mostComments.forEach((card) => {
  const container = filmsExtraList[1].querySelector('.films-list__container');
  render(container, new SiteFilmCardView(card).getElement(), renderPosition.BEFOREEND);
});

const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
renderFilmCard(siteFooterStatisticsElement, new SiteStatisticView(cardData).getElement());
