import React from 'react';
import Head from 'next/head';
import HomeContainer from '~/containers/HomeContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Health App For You' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContainer />
    </>
  );
}
