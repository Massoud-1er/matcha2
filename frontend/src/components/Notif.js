import React from 'react';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import NotifAlert from './Hometest';

const options = {
  timeout: 3000,
  position: positions.TOP_CENTER
};

const Notif = () => (
  <Provider template={AlertTemplate} {...options}>
    <NotifAlert />
  </Provider>
);

export default Notif;