import React, { useState, useEffect } from "react";
import { applyForJob } from "../../actions/apply";
import { connect } from "react-redux";

const JobOverview = ({ job, applyForJob, user, isAuthenticated }) => {
  const [applied, setApplied] = useState(false);
  useEffect(() => {
    if (isAuthenticated && job.applicants.length > 0) {
      let alreadyApplied = job.applicants.filter(
        (applicant) => applicant.appliedBy == user._id
      );
      if (alreadyApplied) {
        setApplied(true);
      }
    } else {
      setApplied(false);
    }
  }, []);

  const applyHandler = (e, id) => {
    e.preventDefault();
    applyForJob(id);
    setApplied(true);
  };

  return (
    <div className="col-xl-4 col-lg-4">
      <div className="post-details3  mb-50">
        {/* <!-- Small Section Tittle --> */}
        <div className="small-section-tittle">
          <h4>Job Overview</h4>
        </div>
        <ul>
          {/* <li>
            Posted date : <span>12 Aug 2019</span>
          </li> */}
          <li>
            Location : <span>{job.location}</span>
          </li>
          <li>
            Vacancy : <span>{job.vacancy}</span>
          </li>
          <li>
            Job nature : <span>{job.job_type}</span>
          </li>
          <li>
            Salary : <span>{job.salary} monthly</span>
          </li>
          {/* <li>
            Application date : <span>12 Sep 2020</span>
          </li> */}
        </ul>
        <div className="apply-btn2">
          {isAuthenticated ? (
            !applied ? (
              <form onSubmit={(e) => applyHandler(e, job._id)}>
                <button type="submit" className="btn">
                  Apply Now
                </button>
              </form>
            ) : (
              <button type="button" className="btn" disabled>
                Already applied
              </button>
            )
          ) : (
            <button type="button" className="btn" disabled>
              Login to apply
            </button>
          )}
        </div>
      </div>
      <div className="post-details4  mb-50">
        {/* <!-- Small Section Tittle --> */}
        <div className="small-section-tittle">
          <h4>Company Information</h4>
        </div>
        <span>{job.recruter.company_name}</span>
        <p>{job.recruter.company_description}</p>
        <ul>
          <li>
            Name: <span>{job.recruter.company_name} </span>
          </li>
          <li>
            Web : <span> {job.recruter.company_website}</span>
          </li>
          <li>
            Email: <span>{job.recruter.company_email}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    applyForJob: (id) => dispatch(applyForJob(id)),
  };
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(JobOverview);
