import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './MainNavigation.css';
import * as actions from '../../store/actions/index'


const MainNavigation = props => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

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
            (
              <React.Fragment>
                <li>
                  <NavLink to="/bookings">Bookings</NavLink>
                </li>

                <li>
                  <button onClick={() => dispatch(actions.logout())}>Logout</button>
                </li>
              </React.Fragment>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;