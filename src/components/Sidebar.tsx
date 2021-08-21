import React, { ReactNode, FunctionComponent } from 'react';
import { ListGroup } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import Icon from 'react-fontawesome';

type Props = {
  children?: ReactNode;
  to: string;
};

const ListGroupNav = ({ children, to }: Props) => (
  <NavLink
    to={to}
    exact
    className="list-group-item"
    activeClassName="active"
  >
    {children}
  </NavLink>
);

const Sidebar = () => (
  <ListGroup flush>
    <ListGroupNav to="/">
      <Icon name="home" fixedWidth /> <span className="d-none d-sm-inline">Home</span>
    </ListGroupNav>
    <ListGroupNav to="/about">
      <Icon name="info-circle" fixedWidth /> <span className="d-none d-sm-inline">About</span>
    </ListGroupNav>
  </ListGroup>
);

export default withRouter(Sidebar);
