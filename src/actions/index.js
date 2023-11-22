export const ADD_COLOR = 'ADD_COLOR';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DRAG_START = 'DRAG_START';
export const DROP_TOP = 'DROP_TOP';
export const DROP_BOT = 'DROP_BOT';

export const addColor = (color) => ({
  type: ADD_COLOR,
  payload: color,
});

export const incrementCount = (id) => ({
  type: INCREMENT_COUNT,
  payload: id,
});

export const dragStart = (item) => ({
  type: DRAG_START,
  payload: item,
});

export const dropTop = (item) => ({
  type: DROP_TOP,
  payload: item,
});

export const dropBot = (item) => ({
  type: DROP_BOT,
  payload: item,
});