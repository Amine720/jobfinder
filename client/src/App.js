import React, { useEffect } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/price_rangs.css";
import "./assets/css/responsive.css";
import "./assets/css/slick.css";
import "./assets/css/slicknav.css";
import "./assets/css/style.css";
import "./assets/css/themify-icons.css";

import Home from "./components/Home/Home";
import { Detail } from "./components/Detail/Detail";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Listing } from "./components/Listing/Listing";
import { Register } from "./components/Auth/Register/Register";
import { setAuthToken } from "./setAuthToken/setAuthToken";
import { loadUser } from "./actions/auth";
import { connect } from "react-redux";
import Cv from "components/CV/Cv";
// import Recruter from "components/Recruter/Recruter";
import Login from "components/Auth/Login/Login";
import Applicants from "components/Recruter/Applicants";
import Search from "components/Search/Search";
import Offer from "./components/Recruter/Offer";
import SendMail from "components/Recruter/SendMail";

const App = ({ loadUser, isAuthenticated, user }) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      {!isAuthenticated ? (
        <>
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </>
      ) : (
        <Redirect to="/" />
      )}
      <Route exact path="/listing" component={Listing} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/applicants/send/:id" component={SendMail} />
      {/* <Route
        exact
        path="/recruter"
        render={() =>
          !isAuthenticated || (isAuthenticated && user.type === "user") ? (
            <Redirect to="/" />
          ) : (
            <Recruter />
          )
        }
      /> */}
      <Route exact path="/applicants/:id" component={Applicants} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/cv/:file" component={Cv} />
      <Route exact path="/post" component={Offer} />
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
