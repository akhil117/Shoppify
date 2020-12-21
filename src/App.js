import './App.css';
import Login from './containers/Login'
import Booking from "./containers/Bookings";
import Event from './containers/Events'
import React from 'react';
import MainNavigation from './components/Nav'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route exact path="/auth" component={Login} />
              <Route path="/events" component={Event} />
              <Route path="/bookings" component={Booking} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
