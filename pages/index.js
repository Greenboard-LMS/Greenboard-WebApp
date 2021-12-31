import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greenboard</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GreenboardLMS" />
        <meta name="twitter:title" content="Greenboard | The future of education" />
        <meta name="twitter:description" content="Greenboard is Borum's innovative new learning management system offering assignments, assessments, math editing, collaboration, communication, grading, and any extensions you'd like in an all-in-one workspace for schools" />
        <meta name="twitter:image" content="https://classroom.borumtech.com/favicon/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://classroom.borumtech.com">Greenboard</a>
        </h1>

        <p className={styles.description}>
          We are currently in rapid development and will be launching in September 2022!
        </p>

        {/* <Image width={128} height={96} src="/favicon/favicon.png" /> */}
        <img width="128" height="96" src="/favicon/favicon.png" />

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

      <footer className={styles.footer}>
        <div className="copyright">
          <p>&copy; 2021-{new Date().getFullYear()} Borum Tech. All rights reserved.</p>
        </div>
        {/* <div className={styles.socialIcons}>
          <SocialIcon target="_blank" rel="noreferrer noopener" url="https://twitter.com/GreenboardLMS" />
          <SocialIcon target="_blank" rel="noreferrer noopener" url="https://github.com/Greenboard-LMS/Greenboard-WebApp" />
        </div> */}

      </footer>
    </div>
  )
}
