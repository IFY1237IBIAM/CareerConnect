import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
