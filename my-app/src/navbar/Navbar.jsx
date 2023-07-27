import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-double-marquee';
import { Link } from 'react-scroll';
import ProfileImage from "../assets/images/photo.jpeg"



function BarMenu() {
  return (
    <div className='body'>
     
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-left" >
          <Nav.Link>
                Home
             </Nav.Link>
            <Nav.Link><Link activeclass="active" smooth spy to="second">
                Work Experience
              </Link></Nav.Link>
            <Nav.Link><Link activeclass="active" smooth spy to="third">
               Education
              </Link></Nav.Link>
            <Nav.Link><Link activeclass="active" smooth spy to="fourth">
               Project Portfolio
              </Link></Nav.Link>
            
              <Nav.Link><Link activeclass="active" smooth spy to="contact">
               Get in Touch
              </Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>


    <div className='profile'>
    <Container >
      <Row>
        <Col className='leftside' ><div className='img'><Image  className='myimage' src={ProfileImage} alt='Profileimage' roundedCircle /></div></Col>
        <Col className='rightside'><p><h1 className='name'>Kiranjeet Kaur</h1>A highly motivated and enthusiastic web developer with expertise in Node.js, Angular, MongoDB, React, and AWS Amplify, aiming to secure an entry-level position in web development. Dedicated to designing user-friendly and cutting-edge web solutions, emphasizing the delivery of top-notch products that precisely cater to client requirements.</p>
        <Button size="lg" variant="success" className='submit'>Hire Me</Button>
        
        <div className='marquee' >
      <Marquee >
        <button>Html</button>
        <button>Css</button>
        <button>javascript</button>
        <button>Angular</button>
        <button>MongoDB</button>
        <button>Mysql</button>
        <button>Aws Amplify</button>
        <button>React</button>
        <button>OOP</button>
      </Marquee>
    </div>
      
        </Col>
        
      </Row>
      
    </Container>
    </div>
</div>
  
  );
}

export default BarMenu;
