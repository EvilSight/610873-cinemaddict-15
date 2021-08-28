export const createSiteSortTemplate = (currentActiveSort) => (
  `<ul class="sort">
    <li><a href="#" class="sort__button ${currentActiveSort === 'default' ? 'sort__button--active' : ''}"">Sort by default</a></li>
    <li><a href="#" class="sort__button ${currentActiveSort === 'date' ? 'sort__button--active' : ''}"">Sort by date</a></li>
    <li><a href="#" class="sort__button ${currentActiveSort === 'rating' ? 'sort__button--active' : ''}">Sort by rating</a></li>
  </ul>`
);
