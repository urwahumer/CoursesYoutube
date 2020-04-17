import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg_orange fixed-top text-center "
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" to="#page-top">
          <Link to="/">
            <span className="d-block d-lg-none nav-logo text-white">
              CodeWithMosh
            </span>
          </Link>

          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="https://programmingwithmosh.com/wp-content/uploads/2017/06/mosh-300px.png"
              alt=""
            />

            <p className="nav-logo">Mosh Hamedanni</p>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/Career">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/Courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
