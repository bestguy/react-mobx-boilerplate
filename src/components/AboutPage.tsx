import React, { FunctionComponent } from 'react';
import Icon from 'react-fontawesome';

const AboutPage: FunctionComponent = () => (
  <div>
    <h1 className="border-dark border-bottom p-2" data-testid="page-header">
      <Icon name="info-circle" className="text-info" /> About
    </h1>
    <p>
      This is a boilerplate sample for React 16 hooks, TypeScript 3, Mobx 5, Bootstrap 4, and react-router 4.
    </p>
  </div>
);

export default AboutPage;
