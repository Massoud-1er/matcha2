import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests: 2,
      firstName: "",
      lastName: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
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
        </label>
      </form>
    );
  }
}
export default RegisterForm;