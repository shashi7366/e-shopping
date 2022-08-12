import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';


function CarouselComponent() {
  return (
    <div style={{marginTop:'3%'}}>
      <Carousel className='carouselContainer'>
      <Carousel.Item className="carouselItem">
        <img
        
          className="d-block w-100 carouselImage"
          src="images/banner1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
        
          className="d-block w-100 carouselImage"
          src="images/beauty.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100 carouselImage"
          src="images/travel.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselComponent;