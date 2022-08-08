const initialState = {imgName: "home"}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEADER_IMAGE_CATEGORY":
      return {
        ...state,
        imgName: action.payload,
        id: action.payload
      }
      default:
        return state;
  }
}

export default reducer;