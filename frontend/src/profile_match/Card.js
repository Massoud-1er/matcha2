import React from 'react';
import {Card} from 'react-bootstrap';
import ModalBox from './ModalBox';

function CArd(props) {

          return (
        <Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={require("" + props.photo1)} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.desc}
    </Card.Text>
      <ModalBox {...props}/>
  </Card.Body>
</Card>
    );
}

export default CArd;