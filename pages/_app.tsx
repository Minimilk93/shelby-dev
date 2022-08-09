import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      <Loading loading={loading} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
