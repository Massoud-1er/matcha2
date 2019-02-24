import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

function validate(firstName, lastName, email, password) {
  const errors = Array(6).fill("");

  if (firstName.length === 0) {
    errors[0] = "Name can't be empty";
    console.log(errors[0]);
  }
  if (lastName.length === 0) {
    errors[1] = "Name can't be empty";
    console.log(errors[1]);
  }
  if (password.length < 6) {
    errors[2] = "Password should be at least 6 characters long";
    console.log(errors[3]);
  }
  if (email.length < 5) {
    errors[3] = "Email should be at least 5 charcters long";
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors[4] = "Email should contain one and only one @";
  }
  if (email.indexOf(".") === -1) {
    errors[5] = "Email should contain at least one dot";
  }
  return errors;
}

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
      errors: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
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
    const { firstName, lastName, email, password } = this.state;
    const errors = validate(firstName, lastName, email, password);
    console.log(errors);
    if (!(errors.every(n=>n === ""))) {
      this.setState({ errors });
      return;
    }
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
  var geolocation = require('../elements/geolocation');
  console.log(geolocation.getGeolocation());

    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        {errors[0]}
        <label>
          Last name:
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange} />
        </label>
        {errors[1]}
        <label>
          Email address:
          <input type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        {errors[2]}
        <label>
          Birthday:
          <input
            name="birthday"
            type="text"
            value={this.state.birthday}
            onChange={this.handleInputChange} />
        </label>
        {errors[3]}
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} required />
        </label>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </form>
    );
  }
}
export default RegisterForm;