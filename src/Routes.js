import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Course_Playlist_Videos from "./Components/Course_Playlist_Videos";

import history from "./History";
import { Router, Route, HashRouter } from "react-router-dom";

const Routing = () => {
  return (
    <HashRouter>
      <Structure />
    </HashRouter>
  );
};

const Structure = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

const Main = () => {
  history.listen(_ => {
    window.scrollTo(0, 0);
  });
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Career" component={Career} />
        <Route exact path="/Courses" component={Courses} />
        <Route exact path="/Contact" component={Contact} />
        <Route
          exact
          path="/Course_Playlist_Videos/:coursename"
          component={Course_Playlist_Videos}
        />
      </div>
    </Router>
  );
};

export default Routing;
