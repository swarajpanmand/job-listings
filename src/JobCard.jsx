// src/JobCard.js
import React from 'react';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <img src={job.logo} alt={`${job.company} logo`} />    
      <h3>{job.position}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.ctc} LPA</p>
      <p>{job.experience} Experience</p>
      <p>{job.technology.join(', ')}</p>
    </div>
  );
}

export default JobCard;
