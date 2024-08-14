// src/NavigationBar.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


  
const NavigationBar = () => {
 
  return (
    <Navbar bg="blue" expand="lg">
      <Navbar.Brand href="/">CropConnect</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/signup" >Sign Up</Nav.Link>
          <Nav.Link href="/signin"  >Sign In</Nav.Link >  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
