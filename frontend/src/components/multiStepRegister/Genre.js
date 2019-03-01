import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { MDBContainer, MDBCol,  MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

class Genre extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        // const { values } = this.props;
        return(
            <Form color='green' >
 <MDBContainer  align="center">
        <MDBCol md="5">
          {/* <MDBCard> */}
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Renseignez votre genre</strong>
                </h3>
              </div>
              <MDBInput
                label="Male"
                name="Male"
                type="checkbox" 
                border-radius="500%"
                placeholder='Male'
                // onChange={this.props.handleChange('Genre')}
                // defaultValue={values.Genre}
              />
                <MDBInput
                label="Female"
                name="Female"
                type="checkbox" 
                border-radius="500%"
                placeholder='Female'
                // onChange={this.props.handleChange('Genre')}
                // defaultValue={values.Genre}
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

export default Genre;