import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

import zeptoImg from '../assets/zepto.png'; 
import customerImg from '../assets/customer.png';

const projects = [
  {
    id: 1,
    title: "Zepto Supply Chain & Pricing Strategy",
    image: zeptoImg, 
    githubLink: "https://github.com/InsightWithRitu/Zepto_Data_Analysis.git",
    tools: ["SQL", "Tableau", "Data Cleaning", "Logistics Analysis"],
    problem: "Optimizing logistics costs and identifying revenue leakage due to stock-outs in a high-volume quick-commerce dataset of 1,600+ SKUs.",
    insight: "Identified a specific 'High Revenue/High Weight' category driving logistics costs. Found that 'Fruits & Vegetables' are heavily discounted (>15%) compared to other categories.",
    impact: "Mapped ₹224M+ in potential inventory revenue. Flagged high-MRP out-of-stock items for immediate restocking to prevent direct revenue loss."
  },
  {
    id: 2,
    title: "Customer Shopping Behavior Analysis",
    image: customerImg,
    githubLink: "https://github.com/InsightWithRitu/customer_behavior_analysis.git",
    tools: ["Python", "SQL", "Power BI", "Pandas"],
    problem: "Analyzing 3,900 transactions to uncover spending patterns, subscription effectiveness, and product preferences to guide marketing strategies.",
    insight: "Male customers generate significantly more revenue ($157k) than females ($75k). Surprisingly, subscription status does not increase the average transaction value ($59 vs $60).",
    impact: "Segmented user base into 'Loyal' (3,116 users) vs 'New' tiers. Recommended targeted marketing for high-revenue age groups (Young Adults) and reviewed discount policies."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        {/* Heading with Blue Background and White Text */}
        <div className="d-flex justify-content-center mb-5">
            <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--primary-color)' }}>Featured Projects</h2>
            
        </div>

        <Row>
          {projects.map((project) => (
            <Col lg={6} key={project.id} className="mb-5">
              <Card className="project-card h-100 shadow-sm border-0">
                {/* Image Section */}
                <Card.Img 
                    variant="top" 
                    src={project.image} 
                    style={{ height: '220px', objectFit: 'cover' }} 
                    alt={project.title}
                />
                
                <div className="card-header-custom p-3 bg-light text-dark border-bottom">
                  <h5 className="m-0 fw-bold">{project.title}</h5>
                </div>
                
                <Card.Body>
                  <div className="mb-4">
                    {project.tools.map((tool, i) => (
                      <Badge bg="info" className="me-2 text-dark mb-1" key={i}>{tool}</Badge>
                    ))}
                  </div>
                  
                  <div className="mb-3">
                    <h6 className="fw-bold text-primary"><i className="fa fa-question-circle me-2"></i>Problem Statement:</h6>
                    <p className="small text-secondary">{project.problem}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h6 className="fw-bold text-warning text-dark-emphasis"><i className="fa fa-lightbulb-o me-2"></i>Key Insight:</h6>
                    <p className="small text-secondary">{project.insight}</p>
                  </div>

                  <div>
                    <h6 className="fw-bold text-dark"><i className="fa fa-line-chart me-2"></i>Business Impact:</h6>
                    <p className="small text-muted border-start border-4 border-success ps-3 bg-light py-2 rounded-end">
                      {project.impact}
                    </p>
                  </div>
                </Card.Body>
                
                <Card.Footer className="bg-white border-top-0 pb-4 pt-0">
                  <div className="d-flex justify-content-start">
                    {/* View Code Button with Dynamic Link */}
                    <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-dark btn-sm"
                    >
                        <i className="fa fa-github me-1"></i> View Code
                    </a>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;