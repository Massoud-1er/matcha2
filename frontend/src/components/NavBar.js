import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import Browse from './Browse';
import Appi from './Notif';
import HomePage from './HomePage';
import Register from './Register';
import Login from './Login';

function NavBar() {
  return (
    <Router>
    <div>
      <Appi />
      <h2>Welcome to Matcha</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
        <li><Link to={'/about'} className="nav-link">About</Link></li>
        <li><Link to={'/Profile'} className="nav-link">Profile</Link></li>
        <li><Link to={'/Browse'} className="nav-link">Browse</Link></li>
        <li><Link to={'/HomePage'} className="nav-link">HomePage</Link></li>
        <li><Link to={'/register'} className="nav-link">Register</Link></li>
        <li><Link to={'/login'} className="nav-link">Login</Link></li>

      </ul>
      </nav>
      <hr />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/Profile' component={Profile} />
          <Route path='/Browse' component={Browse} />
          <Route path='/HomePage' component={HomePage} />
          <Route path='/Register' component={Register} />
          <Route path='/Login' component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default NavBar;