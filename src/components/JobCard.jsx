import React from "react";
import "../styles/JobCard.css";

function JobCard({ job, onApply }) {
  return (
    <div className="job-card">
      <div className="job-info">
        <h3 className="job-title">{job.title}</h3>
        <p className="job-company">{job.company}</p>
        <p className="job-location">{job.location}</p>
        <p className="job-category">{job.category}</p>
        <p className="job-desc">{job.description}</p>
      </div>
      <button className="apply-btn" onClick={() => onApply(job)}>
        Apply
      </button>
    </div>
  );
}

export default JobCard;
