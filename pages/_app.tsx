import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserContextProvider } from '../context/userContext';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if ("serviceWorker" in navigator && typeof window !== 'undefined') {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    <div className='select-none'>
      <Head>
        <title>WEIMFIA</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="images/manifest/icon-192x192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=no"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
        <meta name="theme-color" content="#FFF"></meta>
        <meta name="description" content="A blog for sharing useless knowledge."></meta>
      </Head>
        <UserContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </UserContextProvider>
    </div>
  )
}

export default MyApp;
