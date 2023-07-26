
import './fourth.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Col, Row } from 'react-bootstrap'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Photo from '../../src/Screenshot 2023-07-26 115014.png';
import Image from '../../src/Screenshot 2023-07-26 115934.png';
import BioGraphyImage from '../../src/Screenshot 2023-07-26 123839.png';
import AdminImage from '../../src/Screenshot 2023-07-26 125838.png';



const Fourth = () => {
    AOS.init();
  return (
    
    <div className='study-sec'>
      <div>
        <h1 className='projectportfolio'>Project Portfolio</h1>
        <h6>Here are some examples of my work</h6>
       <div className='firstsection'>
       <Row>
        <Col className='animation1' data-aos="fade-right"><h3>Recipe Book</h3>
        
        <p>The Recipe Book with Shopping List and User Authentication project aims to provide a user-friendly and personalized experience for individuals passionate about cooking and trying out new recipes.Users can create accounts by registering with their email address and password.Each recipe will be displayed with its name, image URL, description and a list of ingredients.Users can add ingredients from selected recipes to their shopping list.The application will be built with a responsive design to ensure usability on various devices, including desktops, tablets, and smartphones.
</p>
        <button id='description'><a href='https://deluxe-syrniki-ec2e0c.netlify.app'>View Project</a><NavigateNextIcon/> </button>
        </Col>
        
        <Col data-aos="fade-left"><img  className='recipebook' src={Photo} alt='school'/></Col>
      
      </Row>
       </div>
      <div className='secondsection'> <Row>
        <Col className='animation1' data-aos="fade-right"><img  className='sch1'   src={Image} alt='school'/></Col>
        <Col className='animation1' data-aos="fade-left">
        <h3>Social Media Dashboard</h3>
        <p>The Social Media Dashboard with Restful API Integration project provides an opportunity to build a feature-rich and interactive social media platform. With dynamic content fetched from a Restful API, users can experience the look and feel of a real social media application. The sidebar, feed bar, right bar, and navbar components create a familiar layout that users can easily navigate, engage with posts, and explore different sections of the dashboard. </p>
        <button id='description1'><a href='https://chipper-vacherin-8d5736.netlify.app'>View Project</a><NavigateNextIcon/> </button>
        </Col>
      </Row></div>

      <div className='Thirdsection'>
       <Row>
        <Col className='animation3' data-aos="fade-right"><h3>Biography Page</h3>
        
        <p>The Recipe Book with Shopping List and User Authentication project aims to provide a user-friendly and personalized experience for individuals passionate about cooking and trying out new recipes.Users can create accounts by registering with their email address and password.Each recipe will be displayed with its name, image URL, description and a list of ingredients.Users can add ingredients from selected recipes to their shopping list.The application will be built with a responsive design to ensure usability on various devices, including desktops, tablets, and smartphones.
</p>
        <button id='description2'><a href='https://capable-kashata-b6728f.netlify.app'>View Project</a><NavigateNextIcon/> </button>
        </Col>
        
        <Col data-aos="fade-left"><img  className='biography' src={BioGraphyImage} alt='biographypage'/></Col>
      
      </Row>
       </div>
      
       <div className='fourthsection'> <Row>
        <Col className='animation4' data-aos="fade-right"><img  className='adminImage'   src={AdminImage} alt='school'/></Col>
        <Col className='animation4' data-aos="fade-left">
        <h3>Admin Dashboard</h3>
        <p>This project serves as a foundation for creating a sophisticated and user-friendly admin interface tailored to the specific needs of the organization or application it supports. </p>
        <button id='description4'><a href='https://gregarious-sable-2262e4.netlify.app'>View Project</a><NavigateNextIcon/> </button>
        </Col>
      </Row></div>

      </div>
    </div>
  )
}

export default Fourth
