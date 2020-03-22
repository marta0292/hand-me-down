import React from 'react';
import './scss/main.scss';
import Home from "./components/Home/Home";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;