// src/JobList.js
import React from 'react';
import JobCard from './JobCard';
import './App.css'

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
