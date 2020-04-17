import React from "react";
import Skills from "./Skills";
const AoboutUS_1 = () => {
  return (
    <section class="about-area section_gap gray-bg">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5 about-left">
            <img
              class="img-fluid rounded-sm border-left border-top border-brown "
              src="https://www.learningcrux.com/image/5d468f764fdd3f4d5a03888e"
              alt=""
            />
          </div>
          <div class="col-lg-6 col-md-12 about-right">
            <div class="main-title text-left">
              <h1>about myselt</h1>
            </div>
            <div class="mb-50 wow fadeIn" data-wow-duration=".8s">
              <p>
                Hi! I am Mosh Hamedani and I help ambitious developers take
                their coding skills to the next level. Since I started teaching
                online 3 years ago, I’ve taught over 200,000 students in 192
                countries and my YouTube channel has been watched 5.7 million
                times.
              </p>
              <p>
                I’ve been working as a software engineer for the past 17 years
                and I love to share my knowledge with you. It’s my mission to
                make coding and software engineering accessible to everyone.
              </p>
            </div>
            <a href="#" class="primary-btn">
              More Info
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AoboutUS_1;
