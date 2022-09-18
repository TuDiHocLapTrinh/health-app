import React from 'react';
import Head from 'next/head';
import RecommendContainer from '~/containers/RecommendContainer';

export default function Recommed() {
  return (
    <>
      <Head>
        <title>Recommend</title>
        <meta name='description' content='Health App For You' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RecommendContainer />
    </>
  );
}
