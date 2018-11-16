/*
  createStore es una funcion que acepta un reducer como parámetro. 
  El estado viene de los reducers.
  El estado de la toda la app vive dentro del store
*/
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
const store = createStore(rootReducer);
export default store;
