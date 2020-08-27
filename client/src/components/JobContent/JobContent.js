import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const JobContent = ({ job }) => {
  return (
    <Fragment>
      <div className="job-items">
        <div className="company-img">
          <Link to={`/detail/${job._id}`}>
            <img src={job.recruter.company_logo} alt="" />
          </Link>
        </div>
        <div className="job-tittle">
          <Link to={`/detail/${job._id}`}>
            <h4>{job.title}</h4>
          </Link>
          <ul>
            <li>{job.recruter.company_name}</li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {job.location}
            </li>
            <li>{job.salary} DH</li>
          </ul>
        </div>
      </div>
      <div className="items-link f-right">
        <Link to={`/detail/${job._id}`}>{job.job_type}</Link>
        {/* <span>7 hours ago</span> */}
      </div>
    </Fragment>
  );
};
