import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import Icon from 'react-fontawesome';
import classnames from 'classnames';
import AboutPage from './AboutPage';
import Home from './Home';
import Sidebar from './Sidebar';

const App = () => {
  const [open, setOpen] = useState(false);

  const className = classnames({ open });
  return (
    <>
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
      <style jsx global>{`
        #sidebar, #main {
          position: fixed;
          top: 0;
          bottom: 0;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        #sidebar {
          left: 0;
          transition: left 300ms ease;
          width: 280px;
          z-index: 1100;
        }

        #main {
          left: 281px;
          right: 0;
        }

        #backdrop {
          display: none;
        }

        #menu {
          display: none;
          position: absolute;
          top: .5rem;
          left: .5rem;
          z-index: 100;
        }

        @media (max-width: 768px) {
          #menu {
            display: inline;
          }
          #sidebar {
            left: -280px;
          }
          #main {
            left: 0;
          }
          .open #backdrop {
            display: block;
          }
          .open #sidebar {
            left: 0px;
          }
        }
      `}</style>
    </>
  );
};

export default withRouter(App);
