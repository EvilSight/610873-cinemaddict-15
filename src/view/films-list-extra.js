import { createElement } from '../utils/utils.js';

const createFilmListExtraTemplate = (filmListExtra) => (
  `<section class="films-list films-list--extra">
    <h2 class="films-list__title">${filmListExtra.title}</h2>
      <div class="films-list__container"></div>
    </section>`
);

export default class FilmsListExtra {
  constructor(filmListExtra) {
    this._filmListExtra = filmListExtra;
    this._element = null;
  }

  getTemplate() {
    return createFilmListExtraTemplate(this._filmListExtra);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
