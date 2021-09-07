import { createElement } from "../src/utils/utils.js";

const createSiteProfileTemplate = (userRating) => (
  `<section class="header__profile profile">
    <p class="profile__rating">${userRating}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
);

export default class SiteProfile {
  constructor() {
    this._userRating = userRating;
    this._element = null;
  }

  getTemplate() {
    return createSiteProfileTemplate(this._userRating);
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
