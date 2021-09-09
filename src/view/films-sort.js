import { createElement } from '../utils/utils.js';

const createSiteSortTemplate = (currentActiveSort) => (
  `<ul class="sort">
    <li><a href="#" class="sort__button ${currentActiveSort === 'default' ? 'sort__button--active' : ''}"">Sort by default</a></li>
    <li><a href="#" class="sort__button ${currentActiveSort === 'date' ? 'sort__button--active' : ''}"">Sort by date</a></li>
    <li><a href="#" class="sort__button ${currentActiveSort === 'rating' ? 'sort__button--active' : ''}">Sort by rating</a></li>
  </ul>`
);

export default class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteSortTemplate();
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
