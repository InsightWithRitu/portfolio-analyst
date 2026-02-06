import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    // FIX 1: expand="lg" is crucial. It tells Bootstrap "Collapse on screens smaller than Large"
    // FIX 2: variant="dark" ensures the hamburger icon and text are White, not black.
    <Navbar 
      expand="lg" 
      variant="dark" 
      className="navbar-custom sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home">RITU<strong>SAXENA</strong></Navbar.Brand>
        
        {/* The Toggle Button (Hamburger) */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        {/* The Collapsible Content */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact" className="btn btn-outline-light ms-lg-2 px-3 mt-2 mt-lg-0">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;