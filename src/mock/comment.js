import {
  getRandomPositiveFloat,
  getRandomInt,
  getRandomArrayElement,
  getRandomDate
} from '../utils/utils.js';

const emotes = [
  'smile',
  'puke',
  'angry',
  'sleeping',
];

const getText = () => `Моя оценка ${getRandomPositiveFloat(0, 10, 1)}`;

const getAuthor = () => `Username ${getRandomInt(10, 100)}`;

export const generateComment = () => (
  {
    emote: getRandomArrayElement(emotes),
    date: getRandomDate(),
    author: getAuthor(),
    text: getText(),
  }
);
