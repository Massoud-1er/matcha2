import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

function validate(firstName, lastName, email, password) {
  const errors = [];

  if (firstName.length === 0 || lastName.length === 0) {
    errors.push("Name can't be empty");
  }
  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain one and only one @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }
  if (password.length < 6) {
    errors.push("Password should be at least 6 characters long");
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
    const value =  target.value;
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
    if (errors.length > 0) {
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
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
      {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))};
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