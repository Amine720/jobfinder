import React, { useState, Fragment } from "react";
import styles from "../Auth/Register/register.module.css";
import Navbar from "components/Home/Navbar";
import axios from "axios";

const SendMail = () => {
  const [data, setData] = useState({
    to: "mancitizen32@gmail.com",
    subject: "",
    body: "",
  });

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4545/api/mail", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.forms}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles.formgroup}>
              <label>To:</label>
              <input
                type="email"
                name="to"
                value={data.to}
                onChange={onChangeHandler}
                disabled
              />
            </div>
            <div className={styles.formgroup}>
              <label>Subject:</label>
              <input
                type="text"
                name="subject"
                value={data.subject}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>Message body:</label>
              <textarea
                name="body"
                defaultValue={data.body}
                onChange={onChangeHandler}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="mt-4">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SendMail;
