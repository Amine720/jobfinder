import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";

const Applicants = ({ recruter, match }) => {
  const [recruterInfo, setRecruterInfo] = useState(null);
  useEffect(() => {
    let recruterById = recruter.filter((rec) => rec._id === match.params.id);
    setRecruterInfo(recruterById);
  }, []);

  return (
    <Fragment>
      <Navbar />
      <table className="table text-center container mt-5">
        <tr>
          <th>Image</th>
          <th>Full name</th>
          <th>Email</th>
          <th>Resume</th>
          <th>Potential employe</th>
          <th></th>
        </tr>
        {recruterInfo ? (
          recruterInfo.map((rec) =>
            rec.applicants.map((applicant) => (
              <tr>
                <td scope="col">
                  <img src={applicant.appliedBy.photo} width="120px" />
                </td>
                <td scope="col">
                  {applicant.appliedBy.firstname +
                    " " +
                    applicant.appliedBy.lastname}
                </td>
                <td scope="col">{applicant.appliedBy.email}</td>
                <td scope="col" style={{ color: "black" }}>
                  <Link
                    style={{ color: "#fb246a" }}
                    to={"/cv/" + applicant.appliedBy.cv}
                  >
                    View resume
                  </Link>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <Link
                    style={{ color: "#fb246a" }}
                    to={`send/${applicant.appliedBy._id}`}
                  >
                    Send mail
                  </Link>
                </td>
              </tr>
            ))
          )
        ) : (
          <p>Loading</p>
        )}
      </table>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  recruter: state.auth.user,
});

export default connect(mapStateToProps)(Applicants);

{
  /* <div>
  {recruterInfo ? (
    recruterInfo.map((rec) =>
      rec.applicants.map((applicant) => (
        <div>
          <ul>
            <li scope="col">
              <img src={applicant.appliedBy.photo} width="120px" />
            </li>
            <li scope="col">{applicant.appliedBy.firstname}</li>
            <li scope="col">{applicant.appliedBy.lastname}</li>
            <li scope="col">{applicant.appliedBy.email}</li>
            <li scope="col" style={{ color: "black" }}>
              <Link to={"/cv/" + applicant.appliedBy.cv}>
                View resume
              </Link>
            </li>
          </ul>
        </div>
      ))
    )
  ) : (
    <p>Loading</p>
  )}
</div> */
}
