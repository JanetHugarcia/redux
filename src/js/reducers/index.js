/*
  Los reducers son funciones puras que aceptan dos parámetros,
  el estado actual y el action.
  Retorna el siguiente estado
*/

import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

const prove = {
  prop1: 'prop1',
  prop2: 'prop2',
  prop3: 'prop3',
};

console.log(prove.prop1, 'propiedad1');

export default rootReducer;
