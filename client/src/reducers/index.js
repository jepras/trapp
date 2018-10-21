import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityFilter from './visibilityFilter';
import authReducer from './authReducer';

export default combineReducers({
  todos: todoReducer,
  auth: authReducer,
  visibilityFilter
});
