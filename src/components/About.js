import React from 'react';
import Icon from 'react-fontawesome';

export default () => (
  <div>
    <h1 className="border-dark border-bottom p-2">
      <Icon name="info-circle" className="text-info" /> About
    </h1>
    <p>
      This is a boilerplate sample for React 16, Mobx 5, Bootstrap 4, and react-router 4.
    </p>
  </div>
);
