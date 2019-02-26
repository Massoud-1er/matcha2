import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class LogoutButton extends Component {
    handleSubmit(event){
    event.preventDefault(); // prevent page transition
    fetch('/logout', { method: 'POST' });
    }
    render(){
        return(
            <Form onClick={this.handleSubmit}>
            <Button variant="primary" type="submit">
              Logout
        </Button>
          </Form>
        )
    }
}

export default LogoutButton;