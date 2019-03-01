import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Mail from '../components/multiStepRegister/Mail';
import UserDetails from '../components/multiStepRegister/UserDetails';
import Birthdate from '../components/multiStepRegister/Birthdate';
import Password from '../components/multiStepRegister/Password';
import Bio from '../components/multiStepRegister/Bio';
import Genre from '../components/multiStepRegister/Genre';
import LoginForm from './LoginForm';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errors: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (props.chooseForm)
      console.log("de");
  }
  
  nextStep = () => {
      const { step } = this.state
      this.setState({
      step : step + 1
      })
    }
          
  prevStep = () => {
      const { step } = this.state
      this.setState({
      step : step - 1
      })
    }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
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

    const { firstName, lastName, email, password } = this.state;
    console.log(firstName, lastName, email, password);

    fetch('/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    this.nextStep();
    console.log(this.state);
  }
  
  render() {
    const {step} = this.state;
    const { firstName, lastName, email, password} = this.state;
    const values = { firstName, lastName, email, password };
    switch(step) {
      case 0:
          return <LoginForm />
      case 1:
          return <Mail 
          nextStep={this.nextStep} 
          handleChange = {this.handleChange}
          values={values}
          />
      case 2:
          return <UserDetails 
                  nextStep={this.nextStep} 
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 3:
          return <Birthdate 
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange = {this.handleChange}
              values={values}
      />
      case 4:
          return <Bio
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              // handleChange = {this.handleChange}
              values={values}
      />
      case 5:
      return <Genre
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          // handleChange = {this.handleChange}
          values={values}
  />
      case 6:
          return <form onSubmit={this.handleSubmit}>
              <Password
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleSubmit={this.handleSubmit}
              handleChange = {this.handleChange}
              values={values}
              />
               <Button  type="submit">
               Valider
           </Button>
               </form>
      case 7:
          return <h3 align="center">vous avez recu un mail de Confirmation</h3>
      default:
          return <h1>oups</h1>
          
    }
  }
}

export default RegisterForm;