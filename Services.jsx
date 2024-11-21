import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav from react-bootstrap
import { CiMenuBurger } from 'react-icons/ci'; // Import the menu icon

import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useEffect } from "react";

import AOS from "aos";
import bg from './bg_3.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";

import {Routes,Route,Link} from 'react-router-dom';

import Cars from './Cars'
import Blog from './Blog.jsx'
import Contact from './Contact.jsx'
import Pricing from './Pricing.jsx'
import Home from './Home.jsx'
import About  from './About.jsx';
import wedding_car from './wedding-car.svg' 
import bus from './bus.svg'
import car_wash from './car-wash.svg'

const Services = () => {

   useEffect(() => {
    AOS.init({
      // Customize the animation duration
    });
  }, []);

  return (
    <main>
      <div  className="home-section" style={{
      background: `linear-gradient(to top, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 50%), url(${bg})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'top', 
    height: '600px' 
    }}>

        {/* Navbar Start */}
        <div className="nav-bar">
          <div className="navbar-center">
            <Navbar expand="lg">
              <Navbar.Brand className="logo" href="#home">
                <h1>CAR<span>BOOK</span></h1>
              </Navbar.Brand>
              <Navbar.Toggle className="menu" aria-controls="basic-navbar-nav">
                <h3 className="toggle-menu"><CiMenuBurger /></h3>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav id="links" className="me-auto">
                  <Nav.Link className="nav-item active" as={Link} to='/home' >
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to ="/about">About</Nav.Link>
                    <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                    <Nav.Link as={Link} to='/pricing'>Pricing</Nav.Link>
                    <Nav.Link as={Link} to='/cars'>Cars</Nav.Link>
                    <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>

         <Routes>
              <Route path="/home" element={<Home/>}></Route>  
             <Route path="/about" element={<About/>}></Route>      
             <Route path="/services" element={<Services/>}></Route>  
             <Route path="/pricing" element={<Pricing/>}></Route>   
             <Route path="/cars" element={<Cars/>}></Route>  
             <Route path="/blog" element={<Blog/>}></Route>  
             <Route path="/contact" element={<Contact/>}></Route>  
         </Routes>


<div     data-aos="fade-up"
              data-aos-duration="1000" className='about-contents' >
    <p>HOME <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> SERVICES <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> </p>
                <h1>Our Services</h1>
</div>
      </div>


 {/* Our latest product */}

      <div className="latest-product">
        <div className="latest-center">
          <h3 data-aos="fade-up"  data-aos-duration="1000">SERVICES</h3>
          <h1 data-aos="fade-up"  data-aos-duration="1000">Our Latest Services</h1>
          <Container>
            <Row className="mt-5">
              <Col className="product-1 col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="round">
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <img style={{width:'60px',height:'60px',color:'white'}} src={wedding_car}></img>
                  </div>
                </div>
                <h3 className="mt-4">Wedding Ceremony</h3>
                <p className="mt-4 text-center">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </Col>
              <Col className="product-1  col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="round">
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <img style={{width:'60px',height:'60px',color:'white'}} src={bus}></img>
                  </div>
                </div>
                <h3 className="mt-4">City Transfer</h3>
                <p className="mt-4 text-center">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </Col>
              <Col className="product-1  col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="round">
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <img style={{width:'60px',height:'60px',color:'white'}} src={car_wash}></img>
                  </div>
                </div>
                <h3 className="mt-4 ">Airport Transfer</h3>
                <p className="mt-4 text-center">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </Col>
              <Col className="product-1  col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="round">
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <img style={{width:'60px',height:'60px',color:'white'}} src={wedding_car}></img>
                  </div>
                </div>
                <h3 className="mt-4">Whole City Tour</h3>
                <p className="mt-4 text-center">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>


  
    {/* become a driver */}

      <div className="become-driver" style={{marginTop : '50px'}}>
        <Col id="driver-1" className="col-4 "></Col>

        <Col id="driver-2" className="col-8">
          <div className="driver-content">
            <Container>
              <div data-aos="fade-up"  data-aos-duration="1000">
                <h1>Do You Want To Earn With</h1>
                <h1 className="mt-3">Us? So Don't Be Late.</h1>
                <button className="mt-3">Become A Driver</button>
              </div>
            </Container>
          </div>
        </Col>
      </div>
     


  {/* footer*/}

      <div className="footer" style={{position:'relative',top : '0px',marginTop:'450px'}}>
        
        <div className="footer-center">
          <div className="footer-head">
            <div className="footer-heading-1">
              <h1>CAR</h1>
              <span>BOOK</span>
            </div>
            <p className="footer-para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="footer-social-media">
              <h1 data-aos="fade-up"  data-aos-duration="800">
                <FaTwitter />
              </h1>
              <h1 data-aos="fade-up"  data-aos-duration="1000">
                <GrFacebookOption />
              </h1>
              <h1 data-aos="fade-up"  data-aos-duration="1200">
                <BsInstagram />
              </h1>
            </div>
          </div>

          <div className="footer-ifno">
            <h1>Information</h1>

            <p>About</p>
            <p>Services</p>
            <p>Term and Conditions</p>
            <p>Best Price Guarantee</p>
            <p>Privacy & Cookies Policy</p>
          </div>

          <div className="footer-customer">
            <h1>Customer Support</h1>
            <p>FAQ</p>
            <p>Payment Option</p>
            <p>Booking Tips</p>
            <p>How it works</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-question">
            <h1>Have a Questions?</h1>
            <div id="footer-icons" className="d-flex">
              <h2>
                <MdLocationOn />
              </h2>
              <p className="footer-para">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div id="footer-icons" className="d-flex">
              <h2>
                <FaPhone />
              </h2>
              <p> +2 392 3929 210</p>
            </div>

            <div id="footer-icons" className="d-flex">
              <h2>
                <IoMdMail />
              </h2>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
};

export default Services;
