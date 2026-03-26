import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <div id="home" className="d-flex align-items-center" style={{ minHeight: '90vh', background: 'linear-gradient(to right, #0d1b2a, #1b263b)', color: 'white' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h4 className="text-info mb-3">Hello, I'm {portfolioData.hero.name}</h4>
            <h1 className="display-3 fw-bold mb-4">{portfolioData.hero.title}</h1>
            <p className="lead mb-5" style={{ color: '#a0a0a0' }}>{portfolioData.hero.tagline}</p>
            
            <a href="#projects" className="btn btn-primary-custom me-3">View Projects</a>
            
           
            <a 
              href="RituSaxena.pdf" 
              download="Ritu_Saxena_Resume.pdf" 
              className="btn btn-outline-light"
            >
              Download Resume <i className="fa fa-download ms-2"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;