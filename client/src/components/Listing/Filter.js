import React, { useState } from "react";
import { connect } from "react-redux";
import { filter } from "../../actions/search";
import { withRouter } from "react-router-dom";

const Filter = ({ filter, history }) => {
  const [data, setData] = useState({
    category: "all",
    job_type: "full_time",
    experience: 3,
    location: "all",
  });

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    filter(data);
    history.replace("/search");
  };

  return (
    <div className="col-xl-3 col-lg-3 col-md-4">
      <div className="row">
        <div className="col-12">
          <div className="small-section-tittle2 mb-45">
            <div className="ion">
              {" "}
              <svg width="20px" height="12px">
                <path
                  fillRule="evenodd"
                  fill="rgb(27, 207, 107)"
                  d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                />
              </svg>
            </div>
            <h4>Filter Jobs</h4>
          </div>
        </div>
      </div>
      {/* <!-- Job Category Listing start --> */}
      <form onSubmit={onSubmitHandler}>
        <div className="job-category-listing mb-50">
          {/* <!-- single one --> */}
          <div className="single-listing">
            <div className="small-section-title2">
              <h4>Job Category</h4>
            </div>
            {/* <!-- Select job items start --> */}
            <div className="select-job-items2">
              <select
                name="category"
                value={data.category}
                onChange={onChangeHandler}
              >
                <option value="all">All Category</option>
                <option value="creative">Design & Creative</option>
                <option value="development">Design & Development</option>
                <option value="sales_marketing">Sales & Marketing</option>
                <option value="mobile_application">Mobile Application</option>
                <option value="construction">Construction</option>
                <option value="technology">Information Technology</option>
                <option value="real_estate">Real Estate</option>
                <option value="content_writer">Content Writer</option>
              </select>
            </div>
            {/* <!--  Select job items End-->
                                <!-- select-Categories start --> */}
            <div className="select-Categories pt-80 pb-50">
              <div className="small-section-tittle2">
                <h4>Job Type</h4>
              </div>
              <div>
                <input
                  type="radio"
                  value="full_time"
                  name="job_type"
                  onChange={onChangeHandler}
                />{" "}
                Full Time
              </div>
              <div>
                <input
                  type="radio"
                  value="part_time"
                  name="job_type"
                  onChange={onChangeHandler}
                />{" "}
                Part Time
              </div>
              <div>
                <input
                  type="radio"
                  value="remote"
                  name="job_type"
                  onChange={onChangeHandler}
                />{" "}
                Remote
              </div>
              <div>
                <input
                  type="radio"
                  value="freelance"
                  name="job_type"
                  onChange={onChangeHandler}
                />{" "}
                Freelance
              </div>
            </div>
            {/* <!-- select-Categories End --> */}
          </div>
          {/* <!-- single two --> */}
          <div className="single-listing">
            <div className="small-section-tittle2">
              <h4>Job Location</h4>
            </div>
            {/* <!-- Select job items start --> */}
            <div className="select-job-items2">
              <select
                name="location"
                value={data.location}
                onChange={onChangeHandler}
              >
                <option value="all"> All cities</option>
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
            {/* <!--  Select job items End-->
                                <!-- select-Categories start --> */}
            <div className="select-Categories pt-80 pb-50">
              <div className="small-section-tittle2">
                <h4>Experience</h4>
              </div>
              <div>
                <input
                  type="radio"
                  value="2"
                  name="experience"
                  onChange={onChangeHandler}
                />{" "}
                1-2 Years
              </div>
              <div>
                <input
                  type="radio"
                  value="3"
                  name="experience"
                  onChange={onChangeHandler}
                />{" "}
                2-3 Years
              </div>
              <div>
                <input
                  type="radio"
                  value="6"
                  name="experience"
                  onChange={onChangeHandler}
                />{" "}
                3-6 Years
              </div>
              <div>
                <input
                  type="radio"
                  value="more"
                  name="experience"
                  onChange={onChangeHandler}
                />{" "}
                6-more ...
              </div>
            </div>
            {/* <!-- select-Categories End --> */}
          </div>
          <div>
            <button className="btn btn-sm">Search</button>
          </div>
        </div>
      </form>
      {/* <!-- Job Category Listing End --> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (data) => dispatch(filter(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Filter));
