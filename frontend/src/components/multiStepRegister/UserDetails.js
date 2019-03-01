import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { MDBContainer, MDBCol, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

function valid(name)
{
    if (name.length === 0)
        return 1;
}

class UserDetails extends Component{

    saveAndContinue = (e) => {
        if (valid(this.props.values.lastName) || valid(this.props.values.firstName)) {
               return <h1>Name can't be empty</h1>
        }
        else {
        e.preventDefault()
        this.props.nextStep()
        }
    }
    
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
                {/* <h1 className="ui centered">Enter User Details</h1>
                <Form.Field>
                    <label>First Name</label>
                    <input
                    name="firstName"
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                    name="lastName"
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <Button onClick={this.back}>Back</Button> 
                <Button onClick={this.saveAndContinue}>Save And Continue </Button> */}

         <MDBContainer align="center">
        <MDBCol md="6">
          {/* <MDBCard> */}
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Entrez votre prenom et nom</strong>
                </h3>
              </div>
              <MDBInput
                label="firstName"
                name="firstName"
                placeholder='First name'
                onChange={this.props.handleChange('firstName')}
                defaultValue={values.firstName}
              />
            <MDBInput
                label="lastName"
                name="lastName"
                placeholder='Last name'
                onChange={this.props.handleChange('lastName')}
                defaultValue={values.firstName}
              />

             <MDBBtn onClick={this.back} color="primary" rounded>Back</MDBBtn> 
             <MDBBtn onClick={this.saveAndContinue} color="primary" rounded>Save And Continue</MDBBtn>
            </MDBCardBody>
          {/* </MDBCard> */}
        </MDBCol>
        </MDBContainer>

        </Form>
        )
    }
}

export default UserDetails;