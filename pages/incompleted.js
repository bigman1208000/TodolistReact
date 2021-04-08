import React from 'react';

//components
import Layout from '../components/Layout/index';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

//components - styled-system
import Box from '../components/StyledSystem/box';

function IncompletedPage() {
  return (
    <Layout>
      <Header selectedPage="incompleted" />
      <Box bg="blue" />
      <Footer />
    </Layout>
  );
}

export default IncompletedPage;
