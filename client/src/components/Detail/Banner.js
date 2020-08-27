import React from "react";
import about from "../../assets/img/hero/about.jpg";

export const Banner = ({ job }) => {
  return (
    <div className="slider-area ">
      <div
        className="single-slider section-overly slider-height2 d-flex align-items-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center">
                <h2>{job.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
