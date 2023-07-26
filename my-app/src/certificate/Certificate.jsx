import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './certificate.css'
import { Button } from 'react-bootstrap';



const Certificate = () => {
    
  return (
    <div >
        <h1 id='certificate'> Certifications</h1>
        <div id='carousel' >
      <Carousel interval={null}>
      <Carousel.Item>
        <img
        id='image'
          className="d-block w-100"
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-15c95340-8179-46e0-afcc-f6ba9e5c314c.jpg"
          alt="First slide"
        />
       <div className='info'> <h3>Pre-Programming</h3>
        <p>Certification of completion</p>
         <Button variant="primary">Know More</Button></div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id='image'
          className="d-block w-100"
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-15c95340-8179-46e0-afcc-f6ba9e5c314c.jpg"
          alt="Second slide"
        />
        <div className='info'>  <h3>Pre-Programming</h3>
        <p>Certification of completion</p>
         <Button variant="primary">Know More</Button></div>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id='image'
          className="d-block w-100"
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-15c95340-8179-46e0-afcc-f6ba9e5c314c.jpg"
          alt="Third slide"
        />
        <div className='info'> <h3>Pre-Programming</h3>
        <p>Certification of completion</p>
        <Button variant="primary"> <a href='https://www.udemy.com/certificate/UC-15c95340-8179-46e0-afcc-f6ba9e5c314c/'> Know More</a></Button></div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Certificate
