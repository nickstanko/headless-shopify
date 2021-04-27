import React from 'react';
import { AppContext, AppInitialProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { HeadlessProvider } from '@wpengine/headless/react';

import '../styles/global.css';

/* eslint-disable react/jsx-props-no-spreading */
export default function App({
  Component,
  pageProps,
}: AppContext & AppInitialProps) {
  return (
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
    <HeadlessProvider pageProps={pageProps}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </HeadlessProvider>
  );
}
