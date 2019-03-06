import React from 'react';
import {Card} from 'react-bootstrap';
import ModalBox from './ModalBox';
import '../components/HomePageStyle.css';

function CArd(props) {
  return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require("" + props.photo[0])} />
  <Card.Body>
    <Card.Title>{props.name + ", " + props.age + " ans"}
    <div class="ring-container">
    <div class="ringring"></div>
    <div class="circle"></div>
    </div>
    </Card.Title>
    <Card.Text>
      {props.desc}
    </Card.Text>
      <ModalBox {...props}/>
  </Card.Body>
</Card>
    );
}

export default CArd;