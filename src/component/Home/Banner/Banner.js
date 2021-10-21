import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://www.ayurmade.com/wp-content/uploads/2021/07/333-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <p>Open gate.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <p>Hospital bed</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://www.starcarehospitals.com/images/starcare-redefining-benchmark-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>Operation theater</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;