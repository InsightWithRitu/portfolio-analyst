import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg'; // See instructions below

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Profile Image Column */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <div className="profile-img-wrapper">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="img-fluid profile-img" 
              />
            </div>
          </Col>

          {/* Text Content Column */}
          <Col md={7}>
            <h6 className="text-uppercase text-primary fw-bold mb-3 ls-2">About Me</h6>
            <h2 className="fw-bold mb-4">
              Bridging the gap between <span className="text-info">Raw Data</span> and <span className="text-info">Business Decisions</span>.
            </h2>
            
            <p className="lead text-muted mb-4">
              {portfolioData.hero.summary} I am passionate about uncovering the "why" behind the numbers. With a background in both technical implementation and strategic analysis, I don't just build dashboards—I build solutions that drive efficiency.
            </p>

            {/* Micro-Highlights Grid for Scannability */}
            <Row className="mb-4">
              <Col sm={6} className="mb-3">
                <div className="d-flex align-items-center">
                  <div className="icon-box me-3">
                    <i className="fa fa-code text-primary"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Clean Code</h6>
                    <small className="text-muted">Scalable SQL & Python</small>
                  </div>
                </div>
              </Col>
              <Col sm={6} className="mb-3">
                <div className="d-flex align-items-center">
                  <div className="icon-box me-3">
                    <i className="fa fa-line-chart text-primary"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Visual Storytelling</h6>
                    <small className="text-muted">Tableau & Power BI</small>
                  </div>
                </div>
              </Col>
            </Row>

            <a href="#contact" className="btn btn-primary-custom">
              Let's Connect
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;