import axios from "axios";

export const deletejob = (id) => async (dispatch) => {
  console.log("FROM ACTION", id);
  try {
    await axios.delete(`http://localhost:4545/api/job/delete/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const addjob = (data) => async (dispatch) => {
  console.log("FROM ACTION", data);
  try {
    await axios.post(`http://localhost:4545/api/job/post`, data);
  } catch (err) {
    console.log(err);
  }
};
