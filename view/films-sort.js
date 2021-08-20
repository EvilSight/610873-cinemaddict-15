export const createSiteSortTemplate = (currentActiveSort) => (
  `<ul class="sort">
    <li><a href="#" class="sort__button">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button sort__button--active">${currentActiveSort}Sort by rating</a></li>
  </ul>`
);
