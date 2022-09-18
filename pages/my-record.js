import React from 'react';
import Head from 'next/head';
import MyRecordContainer from '~/containers/MyRecordContainer';

export default function MyRecord() {
  return (
    <>
      <Head>
        <title>My Record</title>
        <meta name='description' content='Health App For You' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MyRecordContainer />
    </>
  );
}
