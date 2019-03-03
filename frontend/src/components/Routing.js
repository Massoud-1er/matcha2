import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import Browse from './Browse';
// import Notif from './Notif';
import HomePage from './HomePage';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';


class Routing extends Component {
  render() {
  return (
  <Router path="/" component={Routing} >
  <div>
    <NavBar />
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
    {console.log(this.props)}
  </div>
</Router>
  );
  }
}

export default Routing;