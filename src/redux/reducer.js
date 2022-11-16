const initialState = { imgName: "home", loading: false, data: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEADER_IMAGE_CATEGORY":
      return {
        ...state,
        imgName: action.payload,
        id: action.payload,
      };
    case "DATAFETCHING":
      return {
        ...state,
        loading: true,
      };
    case "DATAFETCHED":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
