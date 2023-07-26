import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useCalendlyEventListener, InlineWidget } from "react-calendly";  
import './contact.css'  
import MailIcon from '@mui/icons-material/Mail';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Contact = () => {
    useCalendlyEventListener({
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => console.log(e.data.payload),
      });
  return (
    <div id='body1'>
         <Row>
        <Col ><h1 id='contact'>Get in Touch</h1>
        <p id='p'>Feel free to contact me directly using below contact details or you can fill the contact form as well.
        </p>
        <span id='icon'><MailIcon/>:Kiranjeet2030@gmail.com</span>
        <span id='icon'><ContactMailIcon/>:Brampton, Canada</span>
        
        
        </Col>
        <Col><InlineWidget url="https://calendly.com/kiranjeetkaur" />
        </Col>
      </Row>
       
    
    </div>
  )
}

export default Contact
