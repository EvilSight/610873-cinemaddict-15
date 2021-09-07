import { createElement } from "../src/utils/utils.js";

 const createFilmListTemplate = (films) => (
  `<section class ="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">${films}All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>
  </section>`
);

export default class SiteFilmsList {
  constructor() {
    this._films = films;
    this._element = null;
  }

  getTemplate() {
    return createFilmListTemplate(this._films);
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
