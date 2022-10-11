import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Content, Heading } from '@t3n/components';

import apolloClient from '../lib/client';

const Home: NextPage = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      const { data } = await apolloClient.query<{ greet: string }>({
        query: gql`
          query {
            greet
          }
        `,
      });

      setGreeting(data.greet);
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      <Head>
        <title>t3n Workexperience</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content>
          <Heading>{greeting}</Heading>
        </Content>
      </main>
    </div>
  );
};

export default Home;