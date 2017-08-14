import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import './main.css';

render(
  <div>
    <App />
  </div>,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept();
}
