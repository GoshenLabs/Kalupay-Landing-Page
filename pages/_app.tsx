import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Head from "next/head";
import "/styles/global.css";
import { extendTheme } from '@chakra-ui/react'
import Announcement from '../components/Announcement';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'black.400',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: 'false',
    cssVarPrefix: 'ck',
  },
})




function MyApp({ Component, pageProps }: AppProps) {
  return (
   
      <ChakraProvider theme={theme}>
      <CSSReset />
        <Head>
          <title>
            Kalupay - Affordable and Inclusive Payment Solutions.
          </title>
          <meta
            name="description"
            content="Affordable and Inclusive Payment Solutions."
          />
          <meta
            property="og:title"
            content="Kalupay - Affordable and Inclusive Payment Solutions."
          />
          <meta
            property="og:description"
            content="Affordable and Inclusive Payment Solutions."
          />
          <meta property="og:image" content="/metadata.png" />
          <meta property="og:url" content="https://kalupay.app" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Kalupay - Affordable and Inclusive Payment Solutions."
          />
          <meta
            name="twitter:description"
            content="Affordable and Inclusive Payment Solutions."
          />
          <meta name="twitter:image" content="/metadata.png" />
          <meta name="twitter:url" content="https://kalupay.app" />
        </Head>
        <Announcement text="🚨 Sign up below to join the waitlist" />
        <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;
