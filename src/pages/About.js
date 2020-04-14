import React from "react";
import Navbar from "../Components/Navbar";
import AoboutUs_1 from "../Components/AoboutUS_1";
import Skills from "../Components/Skills";
const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className="home_page_heading bg_orange_heading text-center">About</h1>
      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <AoboutUs_1 />
      </section>
    </div>
  );
};

export default About;
