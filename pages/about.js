import Layout from "../components/Layout";
import Image from "next/image";
import { team } from "./about.module.css";

export default function Team(props) {
    return (
        <Layout pageTitle="About Us">
            <section className={team}>
                <h1>Our Team</h1>
                <div>
                    <figure>
                        <Image src="/images/team/varun_singh.png" alt="Creator" width={100} height={100} />
                        <figcaption>
                            <p>Varun Singh</p>
                            <p>Creator</p>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </Layout>
    );
}