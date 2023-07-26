import React from 'react'
import './recommandation.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

const Recommandation = () => {
  return (
    <div id='body'>
      <h1 id='recom'>Recommandations</h1>
      <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
         
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
                alt=''
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4 text-black">Maria Smantha</h4>
            
              <p className="text-black mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid"
                alt=''
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4 text-black">Lisa Cudrow</h4>
              
              <p className="text-black mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Neque cupiditate assumenda in maiores repudi mollitia
                architecto.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle img-fluid"
                alt=''
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4 text-black">John Smith</h4>
             
              <p className="text-black mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Delectus impedit saepe officiis ab aliquam repellat rem unde
                ducimus.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default Recommandation
