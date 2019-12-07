import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import browserHistory from './browserHistory';
import App from './components/App.tsx';

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
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
