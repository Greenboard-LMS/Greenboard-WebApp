import { Container } from "reactstrap";
import Layout from "../components/Layout";

export default function GetInvolved(props) {
    return (
        <Layout pageTitle="Get Involved - Greenboard">
            <Container className="deck">
                <a className="card" target="_blank" rel="noreferrer noopener" href="https://github.com/Greenboard-LMS/Greenboard-WebApp">
                    <h3>Open Source &rarr;</h3>
                    <p>Be one of the first to help with the early development stages on GitHub</p>
                </a>
            </Container>

        </Layout>
    );
}