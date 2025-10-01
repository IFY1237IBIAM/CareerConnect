import React from "react";
import "../styles/About.css"; // Optional CSS file for styling

function About() {
  return (
    <div className="about-page">
      <h2 className="about-title">About Us</h2>

      <p className="about-history">
        Founded in <strong>2015</strong>, CareerConnect has been bridging the gap between
        talented professionals and top companies across Nigeria and beyond. What started
        as a small platform connecting local IT professionals to startups has grown into
        a trusted career portal serving thousands of users every day.
      </p>

      <h3 className="about-subtitle">Our Mission</h3>
      <p className="about-mission">
        To empower job seekers and companies by providing a seamless, transparent, and
        efficient platform for job discovery, applications, and talent acquisition.
      </p>

      <h3 className="about-subtitle">Our Values</h3>
      <ul className="about-values">
        <li>💡 Innovation: Constantly improving our platform and services.</li>
        <li>🤝 Trust: Building reliable connections between candidates and employers.</li>
        <li>🌍 Inclusivity: Supporting a diverse and equitable workforce.</li>
        <li>🚀 Excellence: Delivering top-quality user experience and service.</li>
      </ul>

      <h3 className="about-subtitle">Our Vision</h3>
      <p className="about-vision">
        To become the leading job board in Africa, empowering millions of professionals
        to find meaningful careers and helping companies attract the best talent.
      </p>
    </div>
  );
}

export default About;
