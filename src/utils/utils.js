import dayjs from 'dayjs';
import { MAX_LENGTH_TEXT } from './../utils/const.js';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomPositiveFloat = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
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
  const dayGap = getRandomInt(daySpread, 0);
  const monthGap = getRandomInt(monthSpread, 0);
  const yearGap = getRandomInt(yearSpread, 0);

  return dayjs().add(dayGap, 'day').add(monthGap, 'month').add(yearGap, 'year').toString();
};

export const getFirstElement = (arr) => arr[0];
export const getCardClassName = (variable) => variable ? 'film-card__controls-item film-card__controls-item--active' : 'film-card__controls-item';
export const getPopupClassName = (variable) => variable ? 'film-details__control-button film-details__control-button--active' : 'film-details__control-button';
export const getSliceText = (text) => {
  let newText = text.slice(0, MAX_LENGTH_TEXT);
  if (text.length > newText.length) {
    newText += '...';
  }
  return newText;
};
