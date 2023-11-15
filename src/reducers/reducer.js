import { ADD_COLOR, INCREMENT_COUNT } from '../actions/index';

// elementos fijos
const initialState = {
  colors: [
    { id: 1, color: '#ff0000', count: 0 },
    { id: 2, color: '#00ff00', count: 0 },
    { id: 3, color: '#0000ff', count: 0 },
  ],
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors, { id: Date.now(), color: action.payload, count: 0 }],
      };
    case INCREMENT_COUNT:
      return {
        ...state,
        colors: state.colors.map((color) =>
          color.id === action.payload ? { ...color, count: color.count + 1 } : color
        ),
      };
    default:
      return state;
  }
};

export default colorReducer;