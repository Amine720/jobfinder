import React from "react";
import logo from "../../assets/img/logo/logo.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NavElements } from "../UI/NavElements";
import { logout } from "../../actions/auth";

const Navbar = ({ user, isAuthenticated, logout, loading, history }) => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    logout();
    history.push("/");
  };

  return (
    <header>
      <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                {/* <!-- Logo --> */}
                <div className="logo">
                  <Link to="/" exact="true">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  {/* <!-- Main-menu --> */}
                  <div className="main-menu">
                    <nav className="d-none d-lg-block">
                      <ul id="navigation">
                        {!loading && isAuthenticated ? (
                          user.type === "user" ? (
                            <NavElements />
                          ) : (
                            <>
                              <li>
                                <Link to="/post">Post a job</Link>
                              </li>
                              <li>
                                <a href="about.html">About</a>
                              </li>
                              <li>
                                <a href="contact.html">Contact</a>
                              </li>
                            </>
                          )
                        ) : (
                          <NavElements />
                        )}
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- Header-btn --> */}
                  <div className="header-btn d-none f-right d-lg-block">
                    {isAuthenticated ? (
                      <>
                        <Link to="/profile" className="btn head-btn1">
                          Profile
                        </Link>
                        <Link className="btn head-btn2" onClick={logoutHandler}>
                          Logout
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/register" className="btn head-btn1">
                          Register
                        </Link>
                        <Link to="/login" className="btn head-btn2">
                          Login
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* <!-- Mobile Menu --> */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
