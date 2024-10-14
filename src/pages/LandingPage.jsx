/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Features from "../component/Features";

function LandingPage() {
  return (
    <div className="bg-[#100F57]">
        <div className="h-[80vh] container mx-auto sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <Features/>
      </div>
    </div>
  );
}

export default LandingPage;
