import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" style={{ backgroundColor: '#0d1b2a', color: 'white' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center mb-4">
            <h2 className="fw-bold">Let's Work Together</h2>
            <p className="text-muted">Open for Data Analyst and BI opportunities.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control as="textarea" rows={4} placeholder="Project Details or Inquiry" />
              </Form.Group>
              <Button variant="info" className="w-100 fw-bold" type="submit">Send Message</Button>
            </Form>
            <div className="text-center mt-5">
              <a href="https://www.linkedin.com/in/ritu-saxena-78325334b" className="text-white me-4 fs-3"><i className="fa fa-linkedin"></i></a>
              <a href="https://github.com/InsightWithRitu" className="text-white me-4 fs-3"><i className="fa fa-github"></i></a>
              <a href="ritu2saxena@gmail.com" className="text-white fs-3"><i className="fa fa-envelope"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;