import './App.css';
import Login from './containers/Login'
import Booking from "./containers/Bookings";
import Event from './containers/Events'
import React, { useEffect } from 'react';
import MainNavigation from './components/Nav';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import * as actions from "./store/actions/index";

const App = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log("MY GLOBAL STATE", auth.token);
  useEffect(() => {
    dispatch(actions.authCheckState())
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className="main-content">
            {!auth.token && <Redirect to="/auth" exact />}
            {auth.token && <Redirect from="/" to="/events" exact />}
            {auth.token && <Redirect from="/auth" to="/events" exact />}
            <Switch>
              {!auth.token &&
                <Route exact path="/auth" component={Login} />
              }
              <Route path="/events" component={Event} />
              {auth.token && <Route path="/bookings" component={Booking} />}

            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
