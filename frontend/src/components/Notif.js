import React, { Component } from 'react';
// import { render } from "react-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Hometest from "./Hometest";

const options = {
  timeout: 3000,
  position: positions.TOP_CENTER
};

const Appi = () => (
  <Provider template={AlertTemplate} {...options}>
    <Hometest />
  </Provider>
);

class Notif extends Component {
  render() {
  return (
    <Appi />, 
    document.getElementById("root")
    );
  }
}

export default Notif;