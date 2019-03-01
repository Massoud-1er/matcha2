import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
    render () {
        return (
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
      </nav>);
    }
}

export default NavBar;