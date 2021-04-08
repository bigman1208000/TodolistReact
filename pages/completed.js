import React from 'react';

//components
import Layout from '../components/Layout/index';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

//components - styled-system
import Box from '../components/StyledSystem/box';

function CompletedPage() {
  return (
    <Layout>
      <Header selectedPage="completed" />
      <Box bg="blue" />
      <Footer />
    </Layout>
  );
}

export default CompletedPage;
