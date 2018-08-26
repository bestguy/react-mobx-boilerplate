import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import Icon from 'react-fontawesome';

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

ListGroupNav.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
};

@withRouter
export default class Sidebar extends React.Component {
  render() {
    return (
      <ListGroup flush>
        <ListGroupNav to="/">
          <Icon name="home" fixedWidth /> <span className="d-none d-sm-inline">Home</span>
        </ListGroupNav>
        <ListGroupNav to="/about">
          <Icon name="info-circle" fixedWidth /> <span className="d-none d-sm-inline">About</span>
        </ListGroupNav>
      </ListGroup>
    );
  }
}
