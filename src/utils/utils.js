import dayjs from 'dayjs';
import MAX_LENGTH_TEXT from 'const.js';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomPositiveFloat = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

export const getRandomArray = (length, dataSource) => {
  const temp = [];

  for(let index = 0; index < length; index++) {
    temp.push(getRandomArrayElement(dataSource));
  }

  return temp;
};

export const getRandomDate = (daySpread = -7, monthSpread = -12, yearSpread = -1) => {
  const dayGap = getRandomInteger(daySpread, 0);
  const monthGap = getRandomInteger(monthSpread, 0);
  const yearGap = getRandomInteger(yearSpread, 0);

  return dayjs().add(dayGap, 'day').add(monthGap, 'month').add(yearGap, 'year').toString();
};

export const getFirstElement = (arr) => arr[0];
export const getClassName = (variable) => variable ? 'film-card__controls-item film-card__controls-item--active' : 'film-card__controls-item';
export const getSliceText = (text) => {
  let newText = text.slice(0, MAX_LENGTH_TEXT);
  if (text.length > newText.length) {
    newText += '...';
  }
  return newText;
};
