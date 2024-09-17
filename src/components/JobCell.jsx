// JobCell.js
import React from "react";

const JobCell = ({ title, keywords }) => {
  return (
    <div className="job-cell">
      <h2>{title}</h2>
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCell;
