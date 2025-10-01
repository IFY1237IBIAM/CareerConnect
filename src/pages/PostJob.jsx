import React, { useState } from "react";
import "../styles/PostJob.css";

function PostJob({ addJob }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.company || !form.location || !form.category || !form.description) {
      alert("Please fill in all fields");
      return;
    }
    addJob({ ...form, id: Date.now() });
    setForm({
      title: "",
      company: "",
      location: "",
      category: "",
      description: "",
    });
    alert("Job posted successfully!");
  };

  return (
    <div className="post-job-page">
      <h2>Post a New Job</h2>
      <form className="post-job-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" value={form.title} onChange={handleChange} />
        <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="IT">IT</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
        </select>
        <textarea name="description" placeholder="Job Description" value={form.description} onChange={handleChange}></textarea>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
