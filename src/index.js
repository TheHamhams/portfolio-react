import React from 'react';
import ReactDOM from 'react-dom/';
import './index.css';
import { Home, NavBar, Work } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
  
  <Router>
    <Switch>

      <Route exact path='/'>
        <NavBar />
        <Home />
      </Route>

      <Route exact path='/work'>
        <NavBar />
        <Work />
      </Route>

    </Switch>
  </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


