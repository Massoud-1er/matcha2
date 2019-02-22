import Carousel from 'react-bootstrap/Carousel'
import React from 'react';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
      console.log(props);
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("" + this.props.photo1)}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("" + this.props.photo2)}
              alt="Third slide"
            />
  
            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("" + this.props.photo3)}              
              alt="Third slide"
            />
  
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              {/* <p> */}
                {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
              {/* </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

  export default ControlledCarousel;
