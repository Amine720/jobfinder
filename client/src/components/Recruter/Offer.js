import React, { Fragment, useState } from "react";
import styles from "../Auth/Register/register.module.css";
import Navbar from "../Home/Navbar";
import { connect } from "react-redux";
import { addjob } from "../../actions/job";
import { Redirect } from "react-router-dom";

const Offer = ({ addjob, history }) => {
  const [data, setData] = useState({
    title: "",
    category: "creative",
    salary: 0,
    description: "",
    skills: "",
    education: "",
    experience: "",
    location: "",
    job_type: "full_time",
    vacancy: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addjob(data);
    history.push("/");
  };

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.forms}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles.formgroup}>
              <label>Title:</label>
              <input
                type="title"
                name="title"
                value={data.title}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formgroup}>
              <label>Category:</label>
              <select
                name="category"
                value={data.category}
                onChange={onChangeHandler}
              >
                <option value="creative">Design & Creative</option>
                <option value="development">Design & Development</option>
                <option value="sales_marketing">Sales & Marketing</option>
                <option value="mobile_application">Mobile Application</option>
                <option value="construction">Construction</option>
                <option value="technology">Information Technology</option>
                <option value="real_estate">Real Estate</option>
                <option value="content_writer">Content Writer</option>
              </select>
            </div>
            <div className={styles.formgroup}>
              <label>Salary (DH):</label>
              <input
                type="salary"
                name="salary"
                value={data.salary}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formgroup}>
              <label>Description:</label>
              <textarea
                name="description"
                defaultValue={data.description}
                onChange={onChangeHandler}
              ></textarea>
            </div>
            <div className={styles.formgroup}>
              <label>Skills:</label>
              <input
                type="skills"
                name="skills"
                value={data.skills}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formgroup}>
              <label>Education:</label>
              <input
                type="education"
                name="education"
                value={data.education}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formgroup}>
              <label>Experience:</label>
              <input
                type="experience"
                name="experience"
                value={data.experience}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formgroup}>
              <label>Location:</label>
              <input
                type="location"
                name="location"
                value={data.location}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formgroup}>
              <label>Job type:</label>
              <select
                name="job_type"
                value={data.job_type}
                onChange={onChangeHandler}
              >
                <option value="full_time">Full time</option>
                <option value="part_time">Part time</option>
                <option value="remote">Remote</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
            <div className={styles.formgroup}>
              <label>Vacancy:</label>
              <input
                type="vacancy"
                name="vacancy"
                value={data.vacancy}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addjob: (data) => dispatch(addjob(data)),
  };
};

export default connect(null, mapDispatchToProps)(Offer);
