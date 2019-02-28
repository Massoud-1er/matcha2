import React, { Component } from 'react';
import MainForm from './multiStepRegister/MainForm';
import { Container } from 'semantic-ui-react';

class MultiStep extends Component {

  render() {
    return(
      <Container textAlign='center'>
        <MainForm />
      </Container>
    )
  }
}

export default MultiStep;
