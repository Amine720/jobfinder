import React, { useState } from "react";
import styles from "./register.module.css";
import { registerRecruter } from "../../../actions/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const RecruterForm = (props) => {
  const [data, setData] = useState({
    company_name: "",
    company_logo: "",
    company_website: "",
    company_email: "",
    company_description: "",
    company_speciality: "",
    location: "casablanca",
    email: "",
    password: "",
    cpassword: "",
    type: "recruter",
  });

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeLogoHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.files[0],
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.registerRecruter(data);
    props.history.push("/");
  };

  return (
    <form onSubmit={onSubmitHandler} encType="multipart/form-data">
      <div className={styles.formgroup}>
        <label>Company name:</label>
        <input
          type="text"
          name="company_name"
          value={data.company_name}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.formgroup}>
        <label>Company logo:</label>
        <input type="file" name="company_logo" onChange={onChangeLogoHandler} />
      </div>
      <div className={styles.formgroup}>
        <label>Company website:</label>
        <input
          type="text"
          name="company_website"
          value={data.company_website}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.formgroup}>
        <label>Company email:</label>
        <input
          type="text"
          name="company_email"
          value={data.company_email}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.formgroup}>
        <label>Company description:</label>
        <textarea
          rows="5"
          name="company_description"
          onChange={onChangeHandler}
          defaultValue={data.company_description}
        ></textarea>
      </div>
      <div className={styles.formgroup}>
        <label>Company speciality:</label>
        <input
          type="text"
          name="company_speciality"
          value={data.company_speciality}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.formgroup}>
        <label>Location:</label>
        <select
          name="location"
          value={data.location}
          onChange={onChangeHandler}
        >
          <option value="casablanca"> Casablanca</option>
          <option value="agadir"> Agadir</option>
          <option value="hoceima"> Al Hoceima</option>
          <option value="beni-mellal"> Béni Mellal</option>
          <option value="jadida"> El Jadida</option>
          <option value="errachidia"> Errachidia</option>
          <option value="fes"> Fès</option>
          <option value="kenitra"> Kénitra</option>
          <option value="khenifra"> Khénifra</option>
          <option value="Khouribga"> Khouribga</option>
          <option value="larache"> Larache</option>
          <option value="marrakech"> Marrakech</option>
          <option value="meknes"> Meknès</option>
          <option value="nador"> Nador</option>
          <option value="ouarzazate"> Ouarzazate</option>
          <option value="oujda"> Oujda</option>
          <option value="rabat"> Rabat</option>
          <option value="safi"> Safi</option>
          <option value="settat"> Settat</option>
          <option value="sale"> Salé</option>
          <option value="tanger"> Tanger</option>
          <option value="taza"> Taza</option>
          <option value="tetouan"> Tétouan</option>
        </select>
      </div>
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
      <div className={styles.formgroup}>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="cpassword"
          value={data.cpassword}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRecruter: (data) => dispatch(registerRecruter(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(RecruterForm));
