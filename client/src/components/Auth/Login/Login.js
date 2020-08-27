import React, { Fragment, useState } from "react";
import Navbar from "components/Home/Navbar";
import styles from "../Register/register.module.css";
import { login } from "../../../actions/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Login = ({ login, history }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    type: "user",
  });

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login(data);
    history.push("/");
  };

  return (
    <Fragment>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.forms}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles.formgroup}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.formgroup}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <select name="type" value={data.type} onChange={onChangeHandler}>
                <option value="user">Job seeker</option>
                <option value="recruter">Recruter</option>
              </select>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
