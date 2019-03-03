import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { MDBContainer, MDBCol, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

function valid(mail) {
    if (mail.split("").filter(x => x === "@").length !== 1)
        return 1;
    if (mail.indexOf(".") === -1) 
        return 2;
    if (mail.length < 5)
        return 3;
}

class Mail extends Component {

    saveAndContinue = (e) => {
        if (valid(this.props.values.email) === 1)
                return <h1>Email should contain one and only one @</h1>
        else if (valid(this.props.values.email) === 2)
                return <h1>Email should contain at least one dot</h1>
        else if (valid(this.props.values.email) === 3)
                return <h1>Email should be at least 5 charcters long</h1>
        else {
            e.preventDefault();
            this.props.nextStep() 
        }
    }    

    render(){
        const { values } = this.props;
        return(
            <Form  color='green'>
 <MDBContainer align="center">
        <MDBCol md="6">
          {/* <MDBCard> */}
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Inscris-toi !</strong>
                </h3>
              </div>
              <MDBInput
                label="email"
                name="email"
                type="email"
                placeholder='Email Address'
                onChange={this.props.handleChange('email')}
                defaultValue={values.email}
              />
             <MDBBtn onClick={this.saveAndContinue} color="primary" rounded>Save And Continue</MDBBtn>
            </MDBCardBody>
          {/* </MDBCard> */}
        </MDBCol>
    </MDBContainer>

 {/* <Button onClick={this.saveAndContinue}>Save And Continue </Button> */}
            </Form>
        )
    }
}

export default Mail;
