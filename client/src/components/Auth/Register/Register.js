import React, { useState, Fragment, useRef } from "react";
import RecruterForm from "./RecruterForm";
import UserForm from "./UserForm";
import styles from "./register.module.css";
import Navbar from "../../Home/Navbar";

export const Register = () => {
  const [userType, setUserType] = useState("user");
  const recruterBtnEl = useRef();
  const userBtnEl = useRef(null);
  const recruterBtn = (e) => {
    setUserType("recruter");
    recruterBtnEl.current.classList.remove(styles.job);
    userBtnEl.current.classList.add(styles.job);
  };
  const userBtn = (e) => {
    setUserType("user");
    recruterBtnEl.current.classList.add(styles.job);
    userBtnEl.current.classList.remove(styles.job);
  };
  return (
    <Fragment>
      <Navbar />
      <div className={styles.wrapper}>
        <div>
          <button ref={userBtnEl} onClick={userBtn}>
            As job seeker
          </button>
          <button
            ref={recruterBtnEl}
            className={styles.job}
            onClick={recruterBtn}
          >
            As recruter
          </button>
        </div>
        <div className={styles.forms}>
          {userType === "user" ? <UserForm /> : <RecruterForm />}
        </div>
      </div>
    </Fragment>
  );
};
