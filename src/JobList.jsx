// src/JobList.js
import React from 'react';
import JobCard from './JobCard';
import './App.css'

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map(job => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs found matching your criteria.</p>
      )}
    </div>
  );
}

export default JobList;