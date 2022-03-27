import Image from 'next/image';
import Layout from "../components/Layout.js";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Greenboard">
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://classroom.borumtech.com">Greenboard</a>
        </h1>

        <p className={styles.description}>
          We are currently in rapid development and will be launching in September 2022!
        </p>

        <Image height={72} width={96} src="/favicon/favicon.png" />

        <div className={styles.grid}>
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/Greenboard-LMS/Greenboard-WebApp" className={styles.card}>
            <h3>Open Source &rarr;</h3>
            <p>Be one of the first to help with the early development stages on GitHub</p>
          </a>
          <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/GreenboardLMS" className={styles.card}>
            <h3>Follow for updates</h3>
            <p>Stay up to date with the latest features and announcements</p>
          </a>
        </div>
      </main>
    </Layout>
  )
}
