import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Passwd from './Password';
import Confirmation from './Confirmation';
import Success from './Success';
import Mail from './Mail'
import Birthdate from './Birthdate';





// FICHIER NON UTILISÉ



class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        birthdate: '',
        passwd: ''
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
    
    render(){
        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        switch(step) {
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
            return <Passwd 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
        />
        case 5:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 6:
            return <Success />
        default:
            return <h1>oups</h1>
            
        }
    }
}

export default MainForm;