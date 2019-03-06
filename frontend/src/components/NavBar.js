import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import './HomePageStyle.css';
// import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {
    render () {
        return (
      <div className="theNav">
      <ul className="navb">
        <li><Link className="theLink" to={'/contact'}>Contact</Link></li>
        <li><Link className="theLink" to={'/about'}>About</Link></li>
        <li><Link className="theLink" to={'/Profile'}>Profile</Link></li>
        <li><Link className="theLink" to={'/Browse'}>Browse</Link></li>
     
        <li className="theLink" to={'/Browse'}>
          <img className="profilPic" src="https://www.boutique-majama.fr/Files/23099/Img/01/Tete-d-entrainement-de-maquillage-MEHRON-big.jpg"></img>
            <ul className="sub">
              <li><a href="">
                  <img className="profilPicBig" src="https://www.boutique-majama.fr/Files/23099/Img/01/Tete-d-entrainement-de-maquillage-MEHRON-big.jpg"></img>
                  <br/>
                  voir mon profil
                </a></li>
              <li><a href="">Se deconnecter</a></li>
            </ul>
          </li> 
        </ul>
      </div>
      );
    }
}

export default NavBar;