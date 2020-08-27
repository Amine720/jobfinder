import axios from "axios";
import { setAuthToken } from "setAuthToken/setAuthToken";

export const applyForJob = (id) => async (dispatch) => {
  try {
    setAuthToken(localStorage.token);
    const res = await axios.post(`http://localhost:4545/api/job/apply/${id}`);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
