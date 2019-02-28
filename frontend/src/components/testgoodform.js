
import React from "react";
import { MDBContainer, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      {/* <MDBRow> */}
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              {/* <MDBBtn color="primary" rounded>Primary</MDBBtn> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      {/* </MDBRow> */}
    </MDBContainer>
  );
};

export default FormPage;