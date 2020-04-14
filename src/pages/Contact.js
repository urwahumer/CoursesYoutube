import React from "react";
import Navbar from "../Components/Navbar";
import ContactUS from "../Components/ContactUs";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1 className="home_page_heading bg_orange_heading text-center">
        Contact Us
      </h1>
      <ContactUS />
    </div>
  );
};

export default Contact;
