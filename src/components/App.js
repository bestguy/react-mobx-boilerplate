import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Route, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import Icon from 'react-fontawesome';
import classnames from 'classnames';
import About from './About';
import Home from './Home';
import Sidebar from './Sidebar';
import './App.scss';
import store from '../stores/UserStore.ts';

@withRouter
@observer
export default class App extends React.Component {
  @observable open = false;

  async componentDidMount() {
    const user = await store.getUser(123);
    console.log(user);
  }

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
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </section>
        <div id="backdrop" className="modal-backdrop show" onClick={() => this.open = !this.open} />
      </div>
    );
  }
}
