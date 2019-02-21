import React from 'react';
import { Button } from 'react-bootstrap'

class Register extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: ''
      }
    }
  
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    onSubmit = (e) => {
      e.preventDefault();
      // get form data out of state
      const { first_name, last_name, password, email, phone } = this.state;
  
      fetch('http://localhost:4000/api/users/register' , {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then((result) => result.json())
      .then((info) => { console.log(info); 
    })
  }
        render() {
          const { classes } = this.props;
          const { first_name, last_name, password, email, phone } = this.state;
          return (
            <div className="session">
            <h1>Create your Account</h1>
              <div className="register-form">
                <form method='POST' action='http://localhost:4000/api/users/register'>
                  <TextField label="First Name" name="first_name" />
                  <br/>
                  <TextField label="Last Name" name="last_name" />
                  <br/>
                  <TextField label="Email" name="email" />
                  <br/>
                  <TextField label="Password" name="password" />
                  <br/>    
                  <TextField label="Phone #" name="phone" />
                  <Button type='Submit' variant="contained" color="primary">
                    Register
                  </Button>
                </form>
              </div>
            </div>
          );
        }
      }
  
      export default Register;