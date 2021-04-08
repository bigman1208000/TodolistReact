import React from 'react';

//components
import Layout from '../components/Layout/index';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Content from '../components/HomePageContent/index';

function HomePage() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default HomePage;
