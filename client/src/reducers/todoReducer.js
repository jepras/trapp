// postReducer.js

import { ADD_TODO, DELETE_TODO, FETCH_TODO } from '../actions/types';

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload.id);
    case FETCH_TODO:
      return action.todos;
    default:
      return state;
  }
}