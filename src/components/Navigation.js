import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <React.Fragment>
      <li className="side-nav__item">
        <NavLink to="/">Homepage</NavLink>
      </li>
      <li className="side-nav__item">
        <NavLink to="/buttons">Buttons Page</NavLink>
      </li>
    </React.Fragment>
  );
};

export default Navigation;
