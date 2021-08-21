import { generateComment } from './comment.js';
import { getRandomPositiveFloat, getRandomInt, getRandomArrayElement, getRandomArray, getRandomDate } from './../utils/utils.js';

const titlePosterPairs = {
  'Made for each other': 'made-for-each-other.png',
  'Popeye meets sinbad': 'popeye-meets-sinbad.png',
  'Sagebrush trail': 'sagebrush-trail.jpg',
  'Santa claus conquers the martians': 'santa-claus-conquers-the-martians.jpg',
  'The dance of life': 'the-dance-of-life.jpg',
  'The great flamarion': 'the-great-flamarion.jpg',
  'The man with the golden arm': 'the-man-with-the-golden-arm.jpg',
};

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const countries = [
  'USA',
  'USSR',
  'Great Britain',
  'Germany',
  'Brazil',
  'Mexico',
  'Japan',
  'Russia',
];

const genres = [
  'Comedy',
  'Horror',
  'Cartoon',
  'Family',
  'Action',
  'Suspence',
  'Drama',
  'Musical',
  'Sci-fi',
  'Biography',
];

const actors = [
  'Tom Hanks',
  'Morgan Freeman',
  'Quentin Tarantino',
  'Leonardo DiCaprio',
  'Michael Caine',
  'Robert De Niro',
  'Al Pacino',
  'Gary Oldman',
  'Matt Damon',
  'Deni Deniro',
  'Pol Okenfold',
];

const getAgeRatings = ['6+', '12+', '14+', '18+'];

const getTitleAndPoster = () => {
  const keys = Object.keys(titlePosterPairs);
  const randomKey = getRandomInt(0, keys.length - 1);

  return [keys[randomKey], `images/posters/${titlePosterPairs[keys[randomKey]]}`];
};

const getDescription = () => {
  const temp = getRandomArray(getRandomInt(1, 5), descriptions);

  return temp.join(' ');
};

export const generateFilm = () => {
  const [title, poster] = getTitleAndPoster();
  const comments = new Array(getRandomInt(0, 5)).fill().map(() => generateComment());
  const alreadyWatched = Boolean(getRandomInt(0, 1));
  let watchingDate = null;

  if (alreadyWatched) {
    watchingDate = getRandomDate(-7, -12, -2);
  } else {
    // ХэЗэ...
  }

  return {
    title: title,
    alternativeTitle: `${title} alternative title`,
    totalRating: getRandomPositiveFloat(0, 10, 1),
    poster,
    ageRating: getRandomArrayElement(getAgeRatings),
    director: getRandomArrayElement(actors),
    writers: getRandomArray(getRandomInt(1, 3), actors),
    actors: getRandomArray(getRandomInt(1, 8), actors),
    release: {
      date: getRandomDate(-7, -12, -75),
      country: getRandomArrayElement(countries),
    },
    runtime: getRandomInt(20, 280),
    genre: getRandomArray(getRandomInt(1, 3), genres),
    description: getDescription(),
    watchlist: Boolean(getRandomInt(0, 1)),
    alreadyWatched: alreadyWatched,
    watchingDate,
    favorite: Boolean(getRandomInt(0, 1)),
    comments,
  };
};
