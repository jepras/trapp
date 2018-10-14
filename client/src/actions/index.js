// index.js

import { ADD_TODO, DELETE_TODO, FETCH_TODO } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/tasks';

export const createTodo = ({ name, description, team }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}`, { name, description, team })
      .then(response => {
        dispatch(createTodoSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createTodoSuccess = data => {
  return {
    type: ADD_TODO,
    payload: {
      _id: data._id,
      name: data.name,
      description: data.description,
      team: data.team
    }
  };
};

export const deleteTodoSuccess = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
};

export const deleteTodo = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteTodoSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchTodos = todos => {
  return {
    type: FETCH_TODO,
    todos
  };
};

export const fetchAllTodos = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/all`)
      .then(response => {
        dispatch(fetchTodos(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchTeamTodos = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}?team=${id}`)
      .then(response => {
        dispatch(fetchTodos(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
