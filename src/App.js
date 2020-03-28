import React from 'react';
import './scss/main.scss';
import Home from "./components/Home";
import Login from "./components/Login";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/logowanie" component={Login}/>
            <Route exact path="/rejestracja" component={Register}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;