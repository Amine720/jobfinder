import React, { useState } from "react";
import styles from "./Hero.module.css";
import { connect } from "react-redux";
import { search } from "../../actions/search";
import { withRouter } from "react-router-dom";

const Hero = ({ search, history }) => {
  const [data, setData] = useState({
    title: "",
    location: "casablanca",
  });

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    search(data);
    history.push("/search");
  };

  let classes = [
    "single-slider slider-height d-flex align-items-center",
    styles.Hero,
  ];
  classes = classes.join(" ");

  return (
    <div className="slider-area ">
      {/* <!-- Mobile Menu --> */}
      <div className="slider-active">
        <div className={styles.Hero} className={classes}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-9 col-md-10">
                <div className="hero__caption">
                  <h1>Find the most exciting startup jobs</h1>
                </div>
              </div>
            </div>
            {/* <!-- Search Box --> */}
            <div className="row">
              <div className="col-xl-8">
                {/* <!-- form --> */}
                <form className="search-box" onSubmit={onSubmitHandler}>
                  <div className="input-form">
                    <input
                      type="text"
                      name="title"
                      placeholder="Job Tittle or keyword"
                      value={data.title}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="select-form">
                    <div
                      className="select-itms"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <select
                        name="location"
                        value={data.location}
                        onChange={onChangeHandler}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <option value="all">All cities</option>
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
                  </div>
                  <div className="search-form">
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        backgroundColor: "#fb246a",
                        color: "white",
                      }}
                    >
                      Find job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  search: (data) => dispatch(search(data)),
});

export default connect(null, mapDispatchToProps)(withRouter(Hero));
