import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store, { history } from './redux/store.js';
import { Provider } from 'react-redux';
import Routes from  './routes'
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
