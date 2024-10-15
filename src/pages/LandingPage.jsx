/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Features from "../component/Features";

function LandingPage() {
  return (
    <div className="">
        <div className="  w-full">
        <Navbar />
        <Hero />
        <Features/>
      </div>
    </div>
  );
}

export default LandingPage;
