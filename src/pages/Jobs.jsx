import React, { useState } from "react";
import JobCard from "../components/JobCard";
import PostJob from "./PostJob";
import "../styles/Jobs.css";

const initialJobs = [
  { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Lagos", category: "IT", description: "Build user interfaces using React." },
  { id: 2, title: "Backend Developer", company: "SoftSolutions", location: "Abuja", category: "IT", description: "Develop APIs using Node.js." },
  { id: 3, title: "Graphic Designer", company: "DesignPro", location: "Lagos", category: "Design", description: "Create digital graphics and branding materials." },
  { id: 4, title: "HR Manager", company: "BizCorp", location: "Port Harcourt", category: "HR", description: "Manage recruitment and HR operations." },
];

function Jobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [filter, setFilter] = useState({ category: "", location: "" });

  // Function to add a new job from PostJob
  const handleAddJob = (newJob) => {
    const jobWithId = { ...newJob, id: jobs.length + 1 };
    setJobs([...jobs, jobWithId]);
  };

  const handleApply = (job) => {
    alert(`You have applied for "${job.title}" at ${job.company}`);
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredJobs = jobs.filter(job => {
    return (
      (filter.category === "" || job.category === filter.category) &&
      (filter.location === "" || job.location === filter.location)
    );
  });

  return (
    <div className="jobs-page">
      <h2>Available Jobs</h2>

      {/* Filters */}
      <div className="filters">
        <select name="category" onChange={handleFilterChange} value={filter.category}>
          <option value="">All Categories</option>
          <option value="IT">IT</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
        </select>

        <select name="location" onChange={handleFilterChange} value={filter.location}>
          <option value="">All Locations</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Port Harcourt">Port Harcourt</option>
        </select>
      </div>

      {/* PostJob Form */}
      <PostJob onAddJob={handleAddJob} />

      {/* Job List */}
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} onApply={handleApply} />
          ))
        ) : (
          <p>No jobs found for selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default Jobs;
