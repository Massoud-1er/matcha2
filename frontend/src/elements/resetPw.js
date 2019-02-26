import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class ResetPw extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        console.log(event.target);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
        fetch('/reset', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state)
        })
      }

      render() {
      return (
        <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter your email adress" value={this.state.email}
                onChange={this.handleInputChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
      </Button>
        </Form>
        </div>
        );}
}

export default ResetPw;