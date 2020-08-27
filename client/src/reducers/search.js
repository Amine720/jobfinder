const initialState = {
  searchData: null,
  loading: true,
};

const search = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH_RESULT":
      return {
        ...state,
        searchData: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default search;
