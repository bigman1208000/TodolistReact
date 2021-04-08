import React from 'react';

//components
import Layout from '../components/Layout/index';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Content from '../components/CompletedPageContent/index';

function CompletedPage() {
  return (
    <Layout>
      <Header selectedPage="completed" />
      <Content />
      <Footer />
    </Layout>
  );
}

export default CompletedPage;
