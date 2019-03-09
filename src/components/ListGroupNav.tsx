import React, { FunctionComponent } from 'react';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  children?: ReactNode;
  to: string;
};

const ListGroupNav: FunctionComponent<Props> = ({ children, to }) => (
  <NavLink to={to} exact className="list-group-item" activeClassName="active">
    {children}
  </NavLink>
);

export default ListGroupNav;
