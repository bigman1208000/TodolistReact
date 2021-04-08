import React from 'react';

//components - styled-system
import Box from '../components/StyledSystem/box';

//components
import Layout from '../components/Layout/index';
import Header from '../components/Header/index';

function IncompletedPage() {
  return (
    <Layout>
      <Header selectedPage="incompleted" />
      <Box bg="blue" />
      <Box bg="orange" />
    </Layout>
  );
}

export default IncompletedPage;
