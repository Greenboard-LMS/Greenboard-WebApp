import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from "reactstrap";
import footer from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      id: 1, title: "Services",
      child: [
        { title: "Greenboard", link: "/services/greenboard" },
        { title: "Greenboard Tally", link: "/services/greenboard-tally" },
        { title: "Greenboard Assess", link: "/services/greenboard-assess" },
        { title: "Greenboard Flash", link: "/services/greenboard-flash" },
        { title: "Greenboard Market", link: "/services/greenboard-market" },
        { title: "GoGreen", link: "/services/gogreen" }
      ]
    },
    {
      id: 2, title: "About Us",
      child: [
        { title: "Contact Us", link: "mailto:greenboard@borumtech.com" },
        { title: "FAQs", link: "/" },
        { title: "Privacy Policy", link: "/" },
      ]
    },
  ];

  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
            <Row>
              <footer className="footer">
                <span>Greenboard</span>
                <div className="copyright">
                  <p>&copy; 2021-{new Date().getFullYear()} Borum Tech. All rights reserved.</p>
                </div>
                <div className={footer.socialIcons}>
                  <SocialIcon target="_blank" rel="noreferrer noopener" url="https://twitter.com/GreenboardLMS" />
                  <SocialIcon target="_blank" rel="noreferrer noopener" url="https://github.com/Greenboard-LMS/Greenboard-WebApp" />
                  <SocialIcon target="_blank" rel="noreferrer noopener" url="https://instagram.com/GreenboardLMS" />
                </div>

              </footer>
            </Row>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><Link href={fLink.link}><a>{fLink.title}</a></Link></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }

              <Col md={4}>
                <h6 className="text-dark mb-3">Our Address</h6>
                <p className="text-muted f-14">279 John R. Junkin Drive, Natchez, MS 39120</p>
                <h6 className="text-muted pb-2">greenboard@borumtech.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2021-{new Date().getFullYear()} © Borum Tech</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;