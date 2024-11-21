import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { CiMenuBurger } from 'react-icons/ci';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Routes, Route, Link } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

import bg from './bg_3.jpg';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Services from './Services.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Pricing from './Pricing.jsx';

import './App.css';

const Cars = () => {
  const URL = 'http://localhost:3500/data';
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      {/* Background Section */}
      <div className="home-section" style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 50%), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '600px'
      }}>
        {/* Navbar */}
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
                  <Nav.Link as={Link} to="/home">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/services">Services</Nav.Link>
                  <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                  <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
                  <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>

        {/* Header Content */}
        <div data-aos="fade-up" data-aos-duration="1000" className="about-contents">
          <p>HOME <MdKeyboardArrowRight /> CARS <MdKeyboardArrowRight /></p>
          <h1>Choose Your Cars</h1>
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Cars Section */}
      <div className="cars-section">
        <div className="car-model" style={{ marginTop: '100px' }}>
          <Row id="car">
            {data.map((item, index) => (
              <Col key={index} className="cars mt-5" sm={12} md={6} lg={4}>
                <Card id="cars-cards" data-aos="fade-up" data-aos-duration="900" style={{ width: '22rem', border: 'none' }}>
                  <Card.Img variant="top" style={{height:'250px'}} src={item.image }  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>{item.subname}</p>
                      <p>${item.price || 500} <span>/day</span></p>
                    </Card.Text>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <Button style={{ background: "#1089ff", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Book now</Button>
                      <Button style={{ background: "#01d28e", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Details</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}

          
             <div style={{display:'flex',justifyContent:'center',marginTop:'80px'}}>
             <div className='page-navigate-section'>
               <div className='page-navigate'><MdKeyboardArrowLeft /></div>
               <div  className='page-navigate'>1</div>
               <div  className='page-navigate'>2</div>
               <div  className='page-navigate'>3</div>
               <div  className='page-navigate'>4</div>
               <div  className='page-navigate'>5</div>
               <div  className='page-navigate'><MdKeyboardArrowRight /></div>
          
           </div>
          </div>
        </div>
      </div>

      {/* Footer */}


       <div className="footer" style={{marginTop:'90px'}}>
        
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

export default Cars;
