import React from "react";
import Navbar from "../Components/Navbar";
import Reviews from "../Components/Reviews";
import Courses_Cont from "../Components/AllCourses";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Courses = () => {
  return (
    <div>
      <Navbar />
      <h1 className="home_page_heading bg_orange_heading text-center">
        Courses
      </h1>
      <Courses_Cont />
      <Reviews />
    </div>
  );
};

export default Courses;
