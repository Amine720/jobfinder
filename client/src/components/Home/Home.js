import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Category from "./Category";
import { Jobs } from "./Jobs";
import { HowWorks } from "./HowWorks";
import { Footer } from "./Footer";
import axios from "axios";
import { Spinner } from "../UI/Spinner/Spinner";
import { connect } from "react-redux";
import Recruter from "components/Recruter/Recruter";

const Home = ({ user, isAuthenticated }) => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await axios.get("http://localhost:4545/api/job/all");
      res = res.data.slice(0, 4);
      setJobs(res);
    })();
  }, []);
  return (
    <div>
      {jobs ? (
        <>
          <Navbar />
          {isAuthenticated && user.type === undefined ? (
            <Recruter />
          ) : (
            <>
              <Hero />
              <Category />
              <HowWorks />
              <Jobs jobs={jobs} />
            </>
          )}
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(Home);
