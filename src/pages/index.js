import React from 'react';
import Layout from '../components/Layout';
import Greeting from '../components/Greeting';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <Layout>
      <Greeting />
    </Layout>
  )
};

export default IndexPage;

export const Head = () => (
  <Seo />
)