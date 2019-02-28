import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { MDBContainer, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

class Bio extends Component {

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
 <MDBContainer>
        <MDBCol md="18">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Entrez votre Bio</strong>
                </h3>
              </div>
              <MDBInput
                label="Bio"
                name="Bio"
                type="Bio"
                placeholder='Bio'
                // onChange={this.props.handleChange('Bio')}
                // defaultValue={values.Bio}
              />
             <MDBBtn onClick={this.back} color="primary" rounded>Back</MDBBtn> 
             <MDBBtn onClick={this.saveAndContinue} color="primary" rounded>Save And Continue</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </MDBContainer>


            </Form>
        )
    }
}

export default Bio;