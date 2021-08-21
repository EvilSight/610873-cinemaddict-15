export const createSiteSortTemplate = (currentActiveSort) => (
  `<ul class="sort">
    <li><a href="#" class="sort__button class = "${currentSort === 'default' ? 'active' : ''}"">Sort by default</a></li>
    <li><a href="#" class="sort__button class = "${currentSort === 'default' ? 'active' : ''}"">Sort by date</a></li>
    <li><a href="#" class="sort__button class = "${currentSort === 'default' ? 'active' : ''}"sort__button--active">Sort by rating</a></li>
  </ul>`
);
