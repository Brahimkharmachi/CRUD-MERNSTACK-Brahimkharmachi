import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./carousselss.css"


function Caroussells() {
    
    return (
    
    <Carousel className='caroussel'>
      <Carousel.Item>
      <img className="d-block w-100" src='./Carousselc1.jpg'  alt='c1'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


export default Caroussells