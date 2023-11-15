//importar createStore de la biblkioteca de redux
import { createStore } from 'redux';
//importar
import colorReducer from '../reducers/reducer';

const store = createStore(colorReducer);

export default store;