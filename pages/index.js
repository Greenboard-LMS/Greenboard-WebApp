import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greenboard</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://classroom.borumtech.com">Greenboard</a>
        </h1>

        <p className={styles.description}>
          We are currently in rapid development and will be launching in June 2021!
        </p>

        <Image width={128} height={96} src="/favicon/favicon.png" />

        <div className={styles.grid}>
          <a href="https://github.com/Borumer/Greenboard" className={styles.card}>
            <h3>Open Source &rarr;</h3>
            <p>Be one of the first to help with the early development stages on GitHub</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>All rights reserved &copy; 2021 </p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
