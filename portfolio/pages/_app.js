import '../styles/globals.css';
import { ThemeContextProvider } from '../context/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <ThemeContextProvider>
    <Head>
      <title>Siddharth Venkatesh</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" type="image/svg+xml" href="/assets/sid_logo.svg" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={"Siddharth Venkatesh | Fullstack developer"} />

      {/* Google SEO tags */}
      <meta itemProp="name" content="Siddharth Venkatesh" />
      <meta itemProp="description" content="Fullstack developer" />
      <meta itemProp="image" content="/assets/sid_logo.svg" />

      {/* Facebook SEO tags */}
      <meta property="og:image" content={'/assets/sid_logo.svg'} />
      <meta property="og:title" content={"Siddharth Venkatesh"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://sidv.info"} />
      <meta property="og:site_name" content={"Siddharth Venkatesh"} key="ogsitename" />
      <meta property="og:description" content={"Siddharth Venkatesh | Fullstack developer"} />

      {/* Twitter SEO tags */}
      <meta name="twitter:card" content="/assets/profile-picture.jpg" />
      <meta name="twitter:title" content="Siddharth Venkatesh" />
      <meta name="twitter:description" content="Fullstack developer" />
      <meta name="twitter:image" content="/assets/sid_logo.svg" />
    </Head>
    <Component {...pageProps} />
  </ThemeContextProvider>
}

export default MyApp
