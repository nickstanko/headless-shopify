import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';

export default function Layout({ children }: React.PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Container as="main" maxW="container.xl" centerContent>{children}</Container>
    </>
  );
}
