import React from 'react';
import Head from 'next/head';
import Header from "./Header";
import Footer from './Footer';

export default function Layout (props) {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GreenboardLMS" />
        <meta name="twitter:title" content="Greenboard | The future of education" />
        <meta name="twitter:description" content="Greenboard is Borum's innovative new learning management system offering assignments, assessments, math editing, collaboration, communication, grading, and any extensions you'd like in an all-in-one workspace for schools" />
        <meta name="twitter:image" content="https://classroom.borumtech.com/favicon/favicon.png" />
      </Head>
      <Header />
      <main className="container">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}