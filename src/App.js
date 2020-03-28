import React from 'react';
import './scss/main.scss';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from './components/Register';
import Logout from './components/Logout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/logowanie" component={Login}/>
            <Route exact path="/rejestracja" component={Register}/>
            <Route exact path="/wylogowano" component={Logout}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;