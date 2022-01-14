import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import Intro from '../components/Intro';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shelby Stanton</title>
        <meta name="description" content="Shelby Stanton personal website" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>

      <main>
        <Hero />
        <Intro />
      </main>

    </div>
  );
};

export default Home;
