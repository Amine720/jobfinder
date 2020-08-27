import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Spinner } from "../UI/Spinner/Spinner";
import Navbar from "components/Home/Navbar";
import { JobContent } from "../JobContent/JobContent";

const Search = ({ search, loading }) => {
  return (
    <Fragment>
      <Navbar />
      {!loading ? (
        search.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            {search.map((offer) => (
              <div
                className="single-job-items mb-30"
                style={{ width: "60%", backgroundColor: "#F2F2F2" }}
                key={offer._id}
              >
                <JobContent job={offer} />
              </div>
            ))}
          </div>
        ) : (
          <p>No data</p>
        )
      ) : (
        <p>loading...</p>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  search: state.search.searchData,
  loading: state.search.loading,
});

export default connect(mapStateToProps)(Search);
