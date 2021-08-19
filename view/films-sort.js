export const createSiteSortTemplate = (siteSort) => (
  `<ul class="sort">
    <li><a href="#" class="sort__button">${siteSort} by default</a></li>
    <li><a href="#" class="sort__button">${siteSort} by date</a></li>
    <li><a href="#" class="sort__button sort__button--active">${siteSort} by rating</a></li>
  </ul>`
);
