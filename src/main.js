import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import App from './App.js';

const browserHistory = createBrowserHistory();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routerStore);
const stores = {
  routing: routerStore,
};

render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept();
}
