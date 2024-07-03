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
      <div className="filter-group">
        <label htmlFor="role-select">Role</label>
        <select id="role-select" multiple onChange={handleRoleChange} value={filters.role}>
          <option value="" disabled>Select Role</option>
          {jobsData.role.map(role => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="tech-select">Technology</label>
        <select id="tech-select" multiple onChange={handleTechnologyChange} value={filters.technology}>
          <option value="" disabled>Select Technology</option>
          {jobsData.technology.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="exp-select">Experience</label>
        <select id="exp-select" onChange={handleExperienceChange} value={filters.experience}>
          <option value="">Select Experience</option>
          {jobsData.experience.map(exp => (
            <option key={exp} value={exp}>{exp}</option>
          ))}
        </select>
      </div>

      <div className="filter-group filter-ctc">
        <label htmlFor="ctc-range">Max CTC: {filters.ctc} LPA</label>
        <input
          id="ctc-range"
          type="range"
          min="0"
          max="15"
          step="1"
          value={filters.ctc}
          onChange={handleCtcChange}
        />
      </div>
    </div>
  );

}

export default Filters;