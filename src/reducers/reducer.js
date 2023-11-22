import { ADD_COLOR, INCREMENT_COUNT, DRAG_START, DROP_BOT, DROP_TOP } from '../actions/index';

// elementos fijos
const initialState = {
  colors: [
    { id: 1, color: '#93cee7', count: 0 },
    { id: 2, color: '#e38742', count: 0 },
    { id: 3, color: '#0000ff', count: 0 },
  ],
  topList: [], 
  botList: [],
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        ...state,
        colors: [
          ...state.colors,
          { id: Date.now(), color: action.payload, count: 0 },
        ],
      };
    case INCREMENT_COUNT:
      return {
        ...state,
        colors: state.colors.map((color) =>
          color.id === action.payload ? { ...color, count: color.count + 1 } : color
        ),
      };
      case DRAG_START:
        return state; // No cambia el estado durante el arrastre
      case DROP_TOP:
        return {
          ...state,
          topList: [...state.topList, action.payload],
          botList: state.botList.filter((item) => item.id !== action.payload.id),
        };
      case DROP_BOT:
        return {
          ...state,
          botList: Array.isArray(state.botList) ? [...state.botList, action.payload] : [action.payload],
          topList: Array.isArray(state.topList) ? state.topList.filter((item) => item.id !== action.payload.id) : [],
        };
    default:
      return state;
  }
};

export default colorReducer;