import React from 'react';

//components - styled-system
import Box from '../components/StyledSystem/box';

//components
import Layout from '../components/Layout/index';

function HomePage() {
  return (
    <Layout>
      <Box bg="green" />
      <Box bg="blue" />
      <Box bg="orange" />
    </Layout>
  );
}

export default HomePage;
