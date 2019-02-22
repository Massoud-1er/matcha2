import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ControlledCarousel from './carousel';

class MyVerticallyCenteredModal extends React.Component {
  // constructor(props) {
  //       super(props);
  // }
  render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              jessica, 24 ans
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>j'aime le caca</h4>
            <p>
              moi j'adore manger du caca, si tu partage les memes 
              centres de loisirs que moi, je t'invite a boire un verre
              avec moi, puis on pourra aller chez moi manger nos merdes
              <ControlledCarousel {...this.props}/>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
            <Button variant="danger" size="lg" onClick={this.props.onHide}>Dislike</Button>
            <Button variant="success" size="lg" onClick={this.props.onHide}>Like</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class ModalBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalShow: false };
    }
    render() {
     let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            voir le profil
          </Button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose} {...this.props}
          />
        </ButtonToolbar>
      );
    }
  }

  export default ModalBox;