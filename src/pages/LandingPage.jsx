/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Features from '../component/Features';
import FadeInWrapper from 'src/ui/FadeInWrapper';

function LandingPage() {
  return (
    <FadeInWrapper className="">
      <div className="">
        <div className="  w-full">
          <Navbar />
          <Hero />
          <Features />
        </div>
      </div>
    </FadeInWrapper>
  );
}

export default LandingPage;
