// postReducer.

import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  TOGGLE_TODO
} from '../actions/types';

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload.id);
    case FETCH_TODO:
      return action.todos;

    // Toggle todo for show completeness
    case TOGGLE_TODO:
      return state.map((todo, id) => {
        if (id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });

    default:
      return state;
  }
}
