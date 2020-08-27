const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  token: null,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_LOAD":
    case "RECRUTER_LOAD":
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        token: localStorage.token,
        loading: false,
      };
    case "USER_LOGIN":
    case "USER_SIGNUP":
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
        token: payload,
      };
    case "DELETE_JOB":
      return {
        ...state,
        user: state.user.filter((post) => post._id !== payload),
      };
    case "LOGOUT_USER":
      return {
        isAuthenticated: false,
        user: null,
        loading: true,
        token: null,
      };
    default:
      return state;
  }
};
