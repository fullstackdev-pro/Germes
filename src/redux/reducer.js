const initialState = {
  imgName: "home",
  loading: false,
  data: [],
  home: [],
  selectedProduct: {},
  backedItems: [],
};

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

      case "HOMEFETCHING":
      return {
        ...state,
        loading: true,
      };

    case "HOMEFETCHED":
      return {
        ...state,
        loading: false,
        home: action.payload,
      };

    case "SELECTEDPRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };

    case "ADDTOBACKET":
      return {
        ...state,
        backedItems: [...state.backedItems, action.payload],
      }
    default:
      return state;
  }
};

export default reducer;
