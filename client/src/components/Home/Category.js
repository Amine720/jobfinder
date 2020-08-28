import React from "react";
import { connect } from "react-redux";
import { categorySearch } from "../../actions/search";
import { withRouter } from "react-router-dom";

const Category = ({ categorySearch, history }) => {
  const onClickHandler = (category) => {
    categorySearch(category);
    history.replace("/search");
  };

  return (
    <div className="our-services section-pad-t30">
      <div className="container">
        {/* <!-- Section Tittle --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>FEATURED TOURS Packages</span>
              <h2>Browse Top Categories </h2>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-contnet-center">
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            onClick={() => onClickHandler("creative")}
          >
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-tour"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Design & Creative</a>
                </h5>
                <span>(653)</span>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            onClick={() => onClickHandler("development")}
          >
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-cms"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Design & Development</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            onClick={() => onClickHandler("sales_marketing")}
          >
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-report"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Sales & Marketing</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            onClick={() => onClickHandler("mobile_application")}
          >
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-app"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Mobile Application</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            onClick={() => onClickHandler("construction")}
          >
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-helmet"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Construction</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            onClick={() => onClickHandler("technology")}
          >
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-high-tech"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Information Technology</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            onClick={() => onClickHandler("real_estate")}
          >
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-real-estate"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Real Estate</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            onClick={() => onClickHandler("content_writer")}
          >
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-content"></span>
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Content Writer</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- More Btn --> */}
        {/* <!-- Section Button --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="browse-btn2 text-center mt-50">
              <a href="job_listing.html" className="border-btn2">
                Browse All Sectors
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    categorySearch: (category) => dispatch(categorySearch(category)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Category));
