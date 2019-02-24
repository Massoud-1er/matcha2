import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Account from './Account';
import Profile from './Profile';

function NavBar() {
  return (
    <Router>
    <div>
      <h2>Welcome to Matcha</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
        <li><Link to={'/about'} className="nav-link">About</Link></li>
        <li><Link to={'/Account'} className="nav-link">Account</Link></li>
        <li><Link to={'/Profile'} className="nav-link">Profile</Link></li>
      </ul>
      </nav>
      <hr />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/Account' component={Account} />
          <Route path='/Profile' component={Profile} />

      </Switch>
    </div>
  </Router>
  );
}

export default NavBar;