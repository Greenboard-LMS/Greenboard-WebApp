import Layout from "../components/Layout";
import Feature from "../components/Feature";
import { Container, Row, Col } from "reactstrap";

export default function Services(props) {
    const services = [
        { title: "Greenboard Tally", desc: "Our modern, state-of-the-art grading system" },
        { title: "Greenboard Study", desc: "A study tool for students like no other" },
        { title: "Greenboard", desc: "Our flagship classroom app" },
        { title: "Greenboard Assess", desc: "A cheat-proof assessment tool bringing testing into the 21st century" },
        { title: "GoGreen", desc: "Switch from your current learning management system with the click of a button" },
    ]

    return (
        <Layout pageTitle="Services | Greenboard">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark"><span className="text-warning">Services</span></h3>
                            <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        services.map((service, key) =>
                            <Col key={key} lg={4} md={6}>
                                <div>
                                    <div className="mb-5">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                                    <p className="text-muted mb-4">{service.desc}</p>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </Layout>
    );
}