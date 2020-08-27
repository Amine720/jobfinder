import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import { Banner } from "../Detail/Banner";
import Filter from "./Filter";
import { JobContent } from "../JobContent/JobContent";
import { Spinner } from "../UI/Spinner/Spinner";
import axios from "axios";

export const Listing = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await axios.get("http://localhost:4545/api/job/all");
      setJobs(res.data);
    })();
  }, []);
  return (
    <Fragment>
      {jobs ? (
        <>
          <Navbar />
          <Banner job={{ title: "get your job" }} />
          <div className="job-listing-area pt-120 pb-120">
            <div className="container">
              <div className="row">
                <Filter />
                <div className="col-xl-9 col-lg-9 col-md-8">
                  <section className="featured-job-area">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="count-job mb-35">
                            <span>{jobs.length} Jobs found</span>
                            <div className="select-job-items">
                              <span>Sort by</span>
                              <select name="select">
                                <option value="">None</option>
                                <option value="">job list</option>
                                <option value="">job list</option>
                                <option value="">job list</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {jobs.map((job) => (
                        <div className="single-job-items mb-30" key={job._id}>
                          <JobContent job={job} />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
