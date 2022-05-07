import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Greenboard</p>
              <p style={{fontSize: '36px'}} className="mb-4 font-weight-normal line-height-1_4">The <span className="text-primary font-weight-medium">future</span> of education</p>
              <p className="text-muted mb-4 pb-2">Greenboard is an all-in-one suite of EdTech tools that empowers educators, learners, and administrators</p>
              <a href="https://www.youtube.com/watch?v=IwZ9oNKTXA8" rel="noopener noreferrer" target="_blank" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;