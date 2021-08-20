export const createFilmListTemplate = (films) => (
  `<section class="films-list">
    <h2 class="films-list__title visually-hidden">${films}All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>`
);
