import React, { useState, useEffect } from 'react';
import JobCell from '../components/JobCell';
import Header from '../components/Header';

const JobRoles = () => {
  const [jobRoles, setJobRoles] = useState([]);

  useEffect(() => {
    // Fetch job roles from the backend endpoint
    fetch('http://localhost:3000/jobRoles')
      .then((response) => response.json())
      .then((data) => setJobRoles(data))
      .catch((error) => console.error('Error fetching job roles:', error));
  }, []);

  return (
    <>
      <Header />

      <h1>All Job Roles</h1>

      <div className="flex-container">
        {jobRoles.map((job) => (
          <JobCell
            key={job._id}
            title={job.title}
            keywords={job.keywords}
          />
        ))}
      </div>

      <footer>
        © 2024 Your Company Name
      </footer>
    </>
  );
};

export default JobRoles;
