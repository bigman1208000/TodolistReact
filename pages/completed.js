import React from 'react';

//components - styled-system
import Box from '../components/StyledSystem/box';

//components
import Layout from '../components/Layout/index';
import Header from '../components/Header/index';

function CompletedPage() {
  return (
    <Layout>
      <Header selectedPage="completed" />
      <Box bg="blue" />
      <Box bg="orange" />
    </Layout>
  );
}

export default CompletedPage;
