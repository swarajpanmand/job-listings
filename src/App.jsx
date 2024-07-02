// src/App.js
import React, { useState, useEffect } from 'react';
import jobsData from './jobsData.json';
import Filters from './Filters';
import JobList from './JobList';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    role: [],
    technology: [],
    experience: '',
    ctc: [0, 15],
  });

  useEffect(() => {
    setJobs(jobsData.data);
    setFilteredJobs(jobsData.data);
  }, []);

  const filterJobs = (newFilters) => {
    let filtered = jobs;
    if (newFilters.role.length) {
      filtered = filtered.filter(job => newFilters.role.includes(job.role));
    }
    if (newFilters.technology.length) {
      filtered = filtered.filter(job => newFilters.technology.some(tech => job.technology.includes(tech)));
    }
    if (newFilters.experience) {
      filtered = filtered.filter(job => job.experience === newFilters.experience);
    }
    if (newFilters.ctc) {
      filtered = filtered.filter(job => job.ctc >= newFilters.ctc[0] && job.ctc <= newFilters.ctc[1]);
    }
    setFilteredJobs(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    filterJobs(newFilters);
  };

  return (
    <div className="App">
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <JobList jobs={filteredJobs} />
    </div>
  );
}

export default App;
