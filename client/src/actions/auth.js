import axios from "axios";
import { setAuthToken } from "../setAuthToken/setAuthToken";

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    return;
  }

  try {
    const res = await axios.get("http://localhost:4545/api/user/me");
    // console.log(res);
    dispatch({ type: "USER_LOAD", payload: res.data });
  } catch (err) {
    console.log("Error in USER8LOAD auth action file");
  }
};

// Load recruter and his offers
export const loadRecruter = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    return;
  }

  try {
    const res = await axios.get("http://localhost:4545/api/job/posts");
    // console.log(res.data);
    dispatch({ type: "RECRUTER_LOAD", payload: res.data });
  } catch (err) {
    console.log("error loading the recruter and his posts");
  }
};

// User/Recruter Login
export const login = (formData) => async (dispatch) => {
  const { email, password, type } = formData;
  const data = {
    email,
    password,
  };
  let loginUrl = "http://localhost:4545/api/user/";
  if (type === "user") {
    loginUrl = loginUrl + "login-user";
  } else {
    loginUrl = loginUrl + "login/recruter";
  }
  try {
    const res = await axios.post(loginUrl, data);
    localStorage.token = res.data;
    // dispatch({ type: "USER_LOGIN", payload: res.data });
    if (type === "user") {
      dispatch(loadUser());
    } else {
      dispatch(loadRecruter());
    }
  } catch (err) {
    console.log("Error during signing");
  }
};

export const register = ({
  firstname,
  lastname,
  password,
  cpassword,
  photo,
  cv,
  skills,
  experience,
  education,
  type,
  email,
}) => async (dispatch) => {
  const fd = new FormData();
  fd.append("firstname", firstname);
  fd.append("lastname", lastname);
  fd.append("email", email);
  fd.append("password", password);
  fd.append("cpassword", cpassword);
  fd.append("photo", photo);
  fd.append("cv", cv);
  fd.append("skills", skills);
  fd.append("experience", experience);
  fd.append("education", education);
  fd.append("type", type);

  let registerURL = "http://localhost:4545/api/user/";

  if (type === "user") {
    registerURL = registerURL + "register";
  } else {
    registerURL = registerURL + "register/recruter";
  }

  try {
    const res = await axios.post(registerURL, fd);
    localStorage.token = res.data;
    // dispatch({ type: "USER_SIGNUP", payload: res.data });
    if (type === "user") {
      dispatch(loadUser());
    } else {
      dispatch(loadRecruter());
    }
  } catch (err) {
    console.log("Error during user registration", err.message);
  }
};

export const registerRecruter = ({
  company_name,
  company_logo,
  company_website,
  company_email,
  company_description,
  company_speciality,
  location,
  email,
  password,
  cpassword,
  type,
}) => async (dispatch) => {
  const fd = new FormData();
  fd.append("company_name", company_name);
  fd.append("company_logo", company_logo);
  fd.append("company_website", company_website);
  fd.append("company_email", company_email);
  fd.append("company_description", company_description);
  fd.append("company_speciality", company_speciality);
  fd.append("location", location);
  fd.append("email", email);
  fd.append("password", password);
  fd.append("cpassword", cpassword);
  fd.append("type", type);

  let registerURL = "http://localhost:4545/api/user/register/recruter";
  try {
    const res = await axios.post(registerURL, fd);
    localStorage.token = res.data;
    // dispatch({ type: "USER_SIGNUP", payload: res.data });
    if (type === "user") {
      dispatch(loadUser());
    } else {
      dispatch(loadRecruter());
    }
  } catch (err) {
    console.log("Error during user registration", err.message);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT_USER" });
};
