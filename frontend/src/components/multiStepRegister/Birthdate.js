import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { MDBContainer, MDBCol, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

class Birthdate extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
 <MDBContainer align="center">
        <MDBCol md="6">
          {/* <MDBCard> */}
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Entrez votre date de naissance</strong>
                </h3>
              </div>
              <MDBInput
                label="birthdate"
                name="birthdate"
                type="birthdate"
                placeholder='birthdate'
                onChange={this.props.handleChange('birthdate')}
                defaultValue={values.email}
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

export default Birthdate;