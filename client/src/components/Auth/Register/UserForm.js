import React, { useState } from "react";
import styles from "./register.module.css";
import { InputElement } from "../../UI/InputElement/inputElement";
import { Minus } from "../../UI/Icon/minus";
import { register } from "../../../actions/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const UserForm = (props) => {
  const [inputField, setInputElement] = useState([]);
  const [inputKey, setInputKey] = useState(1);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    skills: [""],
    education: "",
    experience: "",
    photo: "",
    cv: "",
    type: "user",
  });

  const addInputField = (e) => {
    let skills = [...data.skills, ""];
    setData({
      ...data,
      skills: skills,
    });
    setInputElement([
      ...inputField,
      {
        id: inputKey,
        element: (
          <InputElement
            change={(e) => onSkillsChangeHandler(e, inputKey)}
            skill={data.skills[inputKey]}
          />
        ),
      },
    ]);
    let key = inputKey + 1;
    setInputKey(key);
    console.log(data.skills);
  };

  const removeInputField = (id) => {
    console.log("Remove item at: ", id);
    const skillsInputs = inputField.filter((el) => el.id !== id);
    const skills = data.skills.map((el, index) => {
      if (index === id) {
        return "";
      } else {
        return el;
      }
    });
    setInputElement(skillsInputs);
    setData({
      ...data,
      skills: skills,
    });
  };

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeFileHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.files[0],
    });
  };

  const onSkillsChangeHandler = (e, id) => {
    console.log(id);
    let skillsArr = data.skills.slice();

    skillsArr[id] = e.target.value;

    setData({
      ...data,
      skills: skillsArr,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    props.register(data);
    props.history.push("/");
  };

  return (
    <form onSubmit={submitHandler} encType="multipart/form-data">
      <div className={styles.formgroup}>
        <label>Firstname:</label>
        <input
          type="text"
          name="firstname"
          onChange={onChangeHandler}
          value={data.firstname}
        />
      </div>
      <div className={styles.formgroup}>
        <label>Lastname:</label>
        <input
          type="text"
          name="lastname"
          onChange={onChangeHandler}
          value={data.lastname}
        />
      </div>
      <div className={styles.formgroup}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
        />
      </div>
      <div className={styles.formgroup}>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={data.password}
        />
      </div>
      <div className={styles.formgroup}>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="cpassword"
          onChange={onChangeHandler}
          value={data.cpassword}
        />
      </div>
      <div className={styles.formgroup}>
        <label>CV:</label>
        <input type="file" name="cv" onChange={onChangeFileHandler} />
      </div>
      <div className={styles.formgroup}>
        <label>Photo:</label>
        <input type="file" name="photo" onChange={onChangeFileHandler} />
      </div>
      <div className={styles.formgroup}>
        <label>Skills:</label>
        <input
          type="text"
          name="skills[]"
          onChange={(e) => onSkillsChangeHandler(e, 0)}
        />
      </div>
      {inputField.map((Input) => (
        <div
          key={Input.id}
          className={styles.formgroup}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flexBasis: "80%" }}>{Input.element}</div>
          <Minus click={() => removeInputField(Input.id)} />
        </div>
      ))}
      <button className={styles.skillBtn} onClick={addInputField} type="button">
        Add skill
      </button>

      <div className={styles.formgroup}>
        <label>Education:</label>
        <input type="text" name="education" onChange={onChangeHandler} />
      </div>

      <div className={styles.formgroup}>
        <label>Experience:</label>
        <input type="text" name="experience" onChange={onChangeHandler} />
      </div>

      <div className={styles.formgroup}>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(register(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(UserForm));
