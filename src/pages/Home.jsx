import React from "react";
import "../styles/Home.css";
import heroImage from "../assets/job-hero.webp"; // background image

function Home() {
  return (
    <div className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="home-overlay">
        <h1>Find Your Dream Job</h1>
        <p>Browse thousands of job listings from top companies and apply easily.</p>
        <div className="home-buttons">
          <a href="/jobs" className="btn btn-blue">Browse Jobs</a>
          <a href="/post-job" className="btn btn-green">Post a Job</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
