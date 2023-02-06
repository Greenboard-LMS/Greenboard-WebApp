import Script from 'next/script';
import Feature from '../components/Feature';
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MailingList from '../components/MailingList';

const Index = () => {
  return (
    <Layout pageTitle="Greenboard - the future of education">
      <Hero />

      <a href="https://www.producthunt.com/posts/greenboard-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-greenboard&#0045;2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=378056&theme=light" alt="Greenboard - an innovative learning management system | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a>


      <MailingList />
    </Layout>
  )
}

export default Index;
