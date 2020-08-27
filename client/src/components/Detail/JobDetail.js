import React from "react";

export const JobDetail = ({ job }) => {
  return (
    <div className="job-post-details">
      <div className="post-details1 mb-50">
        {/* <!-- Small Section Tittle --> */}
        <div className="small-section-tittle">
          <h4>Job Description</h4>
        </div>
        <p>{job.description}</p>
      </div>
      <div className="post-details2  mb-50">
        {/* <!-- Small Section Tittle --> */}
        <div className="small-section-tittle">
          <h4>Required Knowledge, Skills, and Abilities</h4>
        </div>
        <ul>
          {job.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="post-details2  mb-50">
        {/* <!-- Small Section Tittle --> */}
        <div className="small-section-tittle">
          <h4>Education</h4>
        </div>
        <ul>
          <li>{job.education}</li>
        </ul>
      </div>
      <div className="post-details2  mb-50">
        {/* <!-- Small Section Tittle --> */}
        <div className="small-section-tittle">
          <h4>Experience</h4>
        </div>
        <ul>
          <li>
            {job.experience + (job.experience === 1 ? " year" : " years")}
          </li>
        </ul>
      </div>
    </div>
  );
};
