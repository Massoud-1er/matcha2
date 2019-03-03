import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import './HomePageStyle.css';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {
    render () {
        return (
       <nav className="navbar navbar-dark bg-primary">
      <ul className="navbar-nav">
        <li><Link to={'/contact'} className="navbar navbar-dark bg-primary">Contact</Link></li>
        <li><Link to={'/about'} className="navbar navbar-dark bg-primary">About</Link></li>
        <li><Link to={'/Profile'} className="navbar navbar-dark bg-primary">Profile</Link></li>
        <li><Link to={'/Browse'} className="navbar navbar-dark bg-primary">Browse</Link></li>
      </ul>
       </nav>
      );
    }
}

export default NavBar;