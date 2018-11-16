/*
    Cada action debe tener un type que describa cómo cambiar al estado.
    Envolverlo en una funcion es una buena practica: action creator
*/
import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article,
});
