// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import UploadBox from "../components/UploadBox";
import JobCell from "../components/JobCell";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../assets/Home.css";

function Home() {
  const [searchedJobs, setSearchedJobs] = useState([]);

  

  return (
    <>
      <Header/>

      <UploadBox setSearchedJobs={setSearchedJobs} />

      <div className="flex-container">
        {searchedJobs.map((job) => (
          <JobCell key={job._id} title={job.title} keywords={job.keywords} />
        ))}
      </div>

      <footer>© 2024 SWARAJ</footer>
    </>
  );
}

export default Home;
