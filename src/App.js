import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Login}>
          </Route>  
      </BrowserRouter>
    </div>
  );
}

export default App;
