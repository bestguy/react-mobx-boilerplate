import React, { lazy, Suspense } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Route, withRouter } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import Icon from 'react-fontawesome';
import classnames from 'classnames';
import Sidebar from './Sidebar';
import './App.scss';

const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

@withRouter
@observer
export default class App extends React.Component {
  @observable open = false;

  render() {
    const className = classnames({ open: this.open });
    return (
      <div className={className}>
        <aside id="sidebar" className="bg-secondary">
          <Sidebar />
        </aside>
        <Button id="menu" outline size="sm" className="border-0" onClick={() => this.open = !this.open}>
          <Icon name="bars" size="2x" />
        </Button>
        <section id="main" className="p-5">
          <Suspense
            fallback={<h1><Spinner color="primary" /> Loading</h1>}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Suspense>
        </section>
        <div id="backdrop" className="modal-backdrop show" onClick={() => this.open = !this.open} />
      </div>
    );
  }
}
