import React, { useEffect, useState, Fragment } from "react";
import Navbar from "../Home/Navbar";
import { Banner } from "./Banner";
import { JobContent } from "../JobContent/JobContent";
import { Spinner } from "../UI/Spinner/Spinner";
import axios from "axios";
import { JobDetail } from "./JobDetail";
import JobOverview from "./JobOverview";
import { Footer } from "../Home/Footer";

export const Detail = ({ match }) => {
  const [job, setJob] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await axios.get(
        `http://localhost:4545/api/job/post/${match.params.id}`
      );
      setJob(res.data);
    })();
  }, []);
  return (
    <Fragment>
      {job ? (
        <Fragment>
          <Navbar />
          <Banner job={job} />
          <div className="job-post-company pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-7 col-lg-8">
                  <div className="single-job-items mb-50">
                    <JobContent job={job} />
                  </div>
                  <JobDetail job={job} />
                </div>
                <JobOverview job={job} />
              </div>
            </div>
          </div>
          <Footer />
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
