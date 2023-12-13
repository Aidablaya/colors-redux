import { ADD_COLOR, INCREMENT_COUNT, DRAG_START, DROP_BOT, DROP_TOP, DELETE_ITEM } from '../actions/index';

// elementos fijos
const initialState = {
  colors: [
    { id: 1, color: '#010221', count: 0 },
    { id: 2, color: '#0A7373', count: 0 },
    { id: 3, color: '#B7BF99', count: 0 },
    { id: 3, color: '#EDAA25', count: 0 },
    { id: 3, color: '#C43302', count: 0 }
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
        const newItem = { ...action.payload, id: Date.now() };
        return {
          ...state,
          botList: Array.isArray(state.botList) ? [...state.botList, newItem] : [newItem],
          topList: Array.isArray(state.topList) ? state.topList.filter((item) => item.id !== action.payload.id) : [],
        };
      case DELETE_ITEM:
        const { id, list } = action.payload;
        return {
          ...state,
          [list]: state[list].filter((item) => item.id !== id),
        };
    default:
      return state;
  }
};

export default colorReducer;