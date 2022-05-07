import { Col, Container, Row } from "reactstrap";
import Layout from "../components/Layout";
import PricingTier from "../components/PricingTier";
import { clearfix, cta, heading, price } from "./pricing.module.css";

/**
 * Inspired by https://codepen.io/mrsahar/pen/yOVGBQ by Mrsahar
 * Converted to React using reactstrap
 * @param {*} props 
 * @returns 
 */
export default function Pricing(props) {
    return (
        <Layout pageTitle="Pricing - Greenboard">
            <Container>
                <Row style={{marginBottom: '1em'}}>
                    <Col md="12">
                        <div className={`${price} ${heading} ${clearfix}`}>
                            <h1 className={cta}>Choose the plan that's right for your district</h1>
                            <h2 style={{ textAlign: 'center' }} className={cta}>No, we aren't kidding</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="pricing-table">
                    <PricingTier tier="Bronze" planPrice="0.00" features={["GoGreen", "Greenboard (flagship)", "Greenboard Tally"]} />
                    <PricingTier tier="Silver" planPrice="0.10" features={["GoGreen", "Greenboard (flagship)", "Greenboard Tally", "Greenboard Flash"]} />
                    <PricingTier tier="Gold" planPrice="0.20" features={["GoGreen", "Greenboard (flagship)", "Greenboard Tally", "Greenboard Flash", "Greenboard Groups", "Greenboard Market"]} />
                </Row>
            </Container>
        </Layout>
    );
}