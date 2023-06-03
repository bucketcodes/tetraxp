import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/index";
import Contact from "../pages/contact";
import About from "../pages/about";
import Art from "../pages/art";
import Music from "../pages/music";
import Nft from "../pages/nft";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Router>
      <AnimatePresence wait>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/about/" element={<About />} />
          <Route path="/art/" element={<Art />} />
          <Route path="/music/" element={<Music />} />
          <Route path="/nft/" element={<Nft />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default AnimatedRoutes;
