import React from "react";
import { JobContent } from "../JobContent/JobContent";

export const Jobs = ({ jobs }) => {
  return (
    <section className="featured-job-area feature-padding">
      <div className="container">
        {/* <!-- Section Tittle --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>Recent Job</span>
              <h2>Featured Jobs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            {/* <!-- single-job-content --> */}
            {jobs.map((job) => (
              <div className="single-job-items mb-30" key={job._id}>
                <JobContent job={job} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
