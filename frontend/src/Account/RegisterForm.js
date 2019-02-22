import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      birthday: "",
      email: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(target);
  }
  handleSubmit(event) {
    event.preventDefault();
    // const data = new FormData(event.target);
    fetch('/register', {
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
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Last name:
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange} />
           <label>
          Email address:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Birthday:
          <input
            name="birthday"
            type="text"
            value={this.state.birthday}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </label>
        </label>
        <Button variant="primary" type="submit">
        Submit
  </Button>
      </form>
    );
  }
}
export default RegisterForm;