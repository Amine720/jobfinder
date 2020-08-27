import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadRecruter } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import { deletejob } from "../../actions/job";

const Recruter = ({
  loading,
  recruter,
  loadRecruter,
  isAuthenticated,
  deletejob,
}) => {
  useEffect(() => {
    loadRecruter();
  }, []);

  const onDeleteHandler = (id) => {
    deletejob(id);
    return <Redirect to="/" />;
  };

  return (
    <Fragment>
      {!loading ? (
        <div
          className="text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "80px",
            width: "100%",
            padding: "0px 60px",
            minHeight: "100vh",
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Applicants number</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            {recruter.map((rec) => (
              <tbody key={rec._id}>
                <tr>
                  <th scope="row">{rec.title}</th>
                  <td>{rec.category}</td>
                  <td>{rec.description}</td>
                  <td>{rec.applicants.length}</td>
                  <td>
                    <Link
                      style={{ color: "#fb246a" }}
                      to={"/applicants/" + rec._id}
                    >
                      See applicants
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => onDeleteHandler(rec._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  recruter: state.auth.user,
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadRecruter: () => dispatch(loadRecruter()),
    deletejob: (id) => dispatch(deletejob(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recruter);
