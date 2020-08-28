import axios from "axios";

export const search = (data) => async (dispatch) => {
  try {
    let res = null;
    if (data.location === "all") {
      res = await axios.get(
        `http://localhost:4545/api/job/title/${data.title}`
      );
    } else {
      res = await axios.post(
        "http://localhost:4545/api/job/titleLocation",
        data
      );
    }

    dispatch({ type: "SEARCH_RESULT", payload: res.data });
  } catch (err) {
    console.log("Error in search");
  }
};

export const filter = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:4545/api/job/filter", data);
    dispatch({ type: "SEARCH_RESULT", payload: res.data });
  } catch (err) {
    console.log("Error in filter");
  }
};

export const categorySearch = (category) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:4545/api/job/category/${category}`
    );
    dispatch({ type: "SEARCH_RESULT", payload: res.data });
  } catch (err) {
    console.log("Error in filter");
  }
};
