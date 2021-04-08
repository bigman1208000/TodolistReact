import React from 'react';

//components
import Layout from '../components/Layout/index';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Content from '../components/IncompletedPageContent/index';

function IncompletedPage() {
  return (
    <Layout>
      <Header selectedPage="incompleted" />
      <Content />
      <Footer />
    </Layout>
  );
}

export default IncompletedPage;
