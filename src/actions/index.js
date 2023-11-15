export const ADD_COLOR = 'ADD_COLOR';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

export const addColor = (color) => ({
  type: ADD_COLOR,
  payload: color,
});

export const incrementCount = (id) => ({
  type: INCREMENT_COUNT,
  payload: id,
});