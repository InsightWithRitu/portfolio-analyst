import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="bg-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--primary-color)' }}>Technical Skills</h2>
        <Row>
          {portfolioData.skills.map((skillSet, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <Card.Body>
                  <div className="mb-3">
                    <i className={`fa ${index === 0 ? 'fa-database' : index === 1 ? 'fa-bar-chart' : 'fa-code'} fa-3x text-info`}></i>
                  </div>
                  <Card.Title className="fw-bold mb-3">{skillSet.category}</Card.Title>
                  <ul className="list-unstyled">
                    {skillSet.tools.map((tool, i) => (
                      <li key={i} className="mb-2 text-muted">{tool}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;