import React from 'react';
import {Card, Button} from 'react-bootstrap'

function CArd() {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require("./jennifer.jpg")} />
  <Card.Body>
    <Card.Title>Jennifer</Card.Title>
    <Card.Text>
      Salut, je m'appelle Jennifer, j'adore la science et l'ecologie !
    </Card.Text>
    <Button variant="primary">voir le profil</Button>
  </Card.Body>
</Card>
    );
}

export default CArd;