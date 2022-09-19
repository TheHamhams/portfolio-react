import React from 'react';
import ReactDOM from 'react-dom/';
import './index.css';
import { NavBar, Footer, Layout } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { firebaseConfig } from './firebaseConfig';



ReactDOM.render(
  <React.StrictMode>
  
  <Router>
    <Switch>

      <Route exaxt path='/'>
        <NavBar />
        <Layout />
        <Footer />
      </Route>


    </Switch>
  </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


