import React from 'react';
import { observer } from 'mobx-react';
import { Col, ListGroup, Row } from 'reactstrap';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Icon from 'react-fontawesome';
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
          <Col xs={2} sm={3} >
            <ListGroup flush>
              <ListGroupNav to="/">
                <Icon name="home" fixedWidth /> <span className="d-none d-sm-inline">Home</span>
              </ListGroupNav>
              <ListGroupNav to="/about">
                <Icon name="info-circle" fixedWidth /> <span className="d-none d-sm-inline">About</span>
              </ListGroupNav>
            </ListGroup>
          </Col>
          <Col xs={10} sm={9} className="p-3">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Col>
        </Row>
      </div>
    );
  }
}
