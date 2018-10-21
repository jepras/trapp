import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import { fetchAllTodos } from './actions/index';

import App from './components/App';

// Connect store with reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllTodos());

ReactDOM.render(
  <BrowserRouter>
    {/* Wrap app in reducer */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
