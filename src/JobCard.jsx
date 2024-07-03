// src/JobCard.js
import React from 'react';
import './App.css';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <img src={job.logo} alt={`${job.company} logo`} />    
      <h3>{job.position}</h3>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <p className="ctc">{job.ctc} LPA</p>
      <p className="experience">{job.experience}</p>
      <div className="technologies">
        {job.technology.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;