import React from 'react';
import { observer } from 'mobx-react';
import { Col, ListGroup, Row } from 'reactstrap';
import { NavLink, Route, withRouter } from 'react-router-dom';
import About from './About';
import Home from './Home';

const ListGroupNav = ({ children, to }) => (
  <NavLink
    to={to}
    exact
    className="list-group-item"
    activeClassName="active"
  >
    {children}
  </NavLink>
);

@withRouter
@observer
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Row className="no-gutters">
          <Col sm={3} xs={12}>
            <ListGroup flush>
              <ListGroupNav to="/">
                Home
              </ListGroupNav>
              <ListGroupNav to="/about">
                About
              </ListGroupNav>
            </ListGroup>
          </Col>
          <Col sm={9} xs={12} className="p-3">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Col>
        </Row>
      </div>
    );
  }
}
