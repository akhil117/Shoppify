import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './MainNavigation.css';

const MainNavigation = props => {
  const auth = useSelector(state => state.auth);

  return (
    <header className="main-navigation">
      <div className="main-navigation__logo">
        <h1>EasyEvent</h1>
      </div>
      <nav className="main-navigation__items">
        <ul>
          {!auth.token &&
            <li>
              <NavLink to="/auth">Authenticate</NavLink>
            </li>
          }
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          {
            auth.token &&
            <li>
              <NavLink to="/bookings">Bookings</NavLink>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;