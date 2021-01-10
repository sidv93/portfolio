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

      {/* PWA tags */}
      <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons.apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/iconsfavicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/assets/icons/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Component {...pageProps} />
  </ThemeContextProvider>
}

export default MyApp
