import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Header1';

import Hero from '../../components/homepage/Hero';
import About from '../../components/homepage/About';
import Support from '../../components/homepage/Support';
import AllInOne from '../../components/homepage/AllInOne';
import GetStarted from '../../components/homepage/GetStarted';
import Header1 from '../../components/Layout/Header1';
import Footer from '../../components/Layout/footer';

const Landing = () => {
  return (
    <>
      <Header1 />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Landing;
