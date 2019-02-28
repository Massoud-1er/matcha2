import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { MDBContainer, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

function valid(password)
{
    if (password.length < 6)
        return 1;
}

class Password extends Component{
    saveAndContinue = (e) => {
        if (valid(this.props.values.password))
            return <h1>Password should be at least 6 characters long</h1>
        else {
            e.preventDefault();
            this.props.nextStep();
        }
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
        <MDBContainer>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Entrez votre mot de passe</strong>
                </h3>
              </div>
              <MDBInput
                label="password"
                name="password"
                type="password"
                placeholder='password'
                onChange={this.props.handleChange('password')}
                defaultValue={values.email}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </MDBContainer>
        </Form>
        )
    }
}

export default Password;