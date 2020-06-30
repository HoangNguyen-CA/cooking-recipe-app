import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './store/reducers/index';

import { BrowserRouter as Router } from 'react-router-dom';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

/*
const script = document.createElement('script');
script.async = true;
script.src = 'https://developer.edamam.com/attribution/badge.js';
document.head.appendChild(script);
*/

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
