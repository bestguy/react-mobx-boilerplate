import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import Icon from 'react-fontawesome';
import classnames from 'classnames';
import AboutPage from './AboutPage';
import Home from './Home';
import Sidebar from './Sidebar';
import './App.scss';

const App = () => {
  const [open, setOpen] = useState(false);

  const className = classnames({ open });
  return (
    <div className={className}>
      <aside id="sidebar" className="bg-secondary">
        <Sidebar />
      </aside>
      <Button id="menu" outline size="sm" className="border-0" onClick={() => setOpen(!open)}>
        <Icon name="bars" size="2x" />
      </Button>
      <section id="main" className="p-5">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
      </section>
      <div id="backdrop" className="modal-backdrop show" onClick={() => setOpen(!open)} />
    </div>
  );
};

export default withRouter(App);
