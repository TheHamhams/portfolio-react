import React from 'react';
import ReactDOM from 'react-dom/';
import './index.css';
import { NavBar, Footer, Layout, PDF } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { firebaseConfig } from './firebaseConfig';



ReactDOM.render(
  <React.StrictMode>
  
  <Router>
    <Switch>

      <Route exact path='/'>
        <NavBar />
        <Layout />
        <Footer />
      </Route>

      <Route exact path='/pdf'>
        <NavBar />
        <PDF />
        <Footer />
      </Route>



    </Switch>
  </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


