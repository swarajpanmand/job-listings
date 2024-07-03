// src/Filters.js
import React from 'react';
import jobsData from './jobsData.json'

function Filters({ filters, onFilterChange }) {
  const handleRoleChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    onFilterChange({ ...filters, role: value });
  };

  const handleTechnologyChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    onFilterChange({ ...filters, technology: value });
  };

  const handleExperienceChange = (e) => {
    onFilterChange({ ...filters, experience: e.target.value });
  };

  const handleCtcChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onFilterChange({ ...filters, ctc: value });
  };
  

  return (
    <div className="filters">
      <select multiple onChange={handleRoleChange}>
        {jobsData.role.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>

      <select multiple onChange={handleTechnologyChange}>
        {jobsData.technology.map(tech => (
          <option key={tech} value={tech}>{tech}</option>
        ))}
      </select>

      <select onChange={handleExperienceChange}>
        {jobsData.experience.map(exp => (
          <option key={exp} value={exp}>{exp}</option>
        ))}
      </select>

      <div className="filter-ctc">
        <input type="range" min="0" max="15" step="1" value={filters.ctc} onChange={handleCtcChange} />
        <p>Current CTC: {filters.ctc}</p>
      </div>

      
    </div>
  );
}

export default Filters;
