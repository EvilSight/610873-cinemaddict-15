import { createElement } from '../utils/utils.js';

const createButtonMoreTemplate = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export default class LoadMoreButton {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createButtonMoreTemplate();
  }

  getElement() {
    if (!this.element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
