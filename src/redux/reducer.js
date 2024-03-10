// eslint-disable-next-line
export default (
  state = {
    imgName: "home",
    loading: false,
    data: [],
    home: [],
    selectedProduct: {},
    backedItems: [],
    category: [],
  },
  action
) => {
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

    case "LOADINGEND":
      return {
        ...state,
        loading: false,
      };

    case "DATAFETCHED":
      Object.assign(state.data, action.payload);
      return {
        ...state,
        loading: false,
        data: Object.assign(state.data, action.payload),
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
      };

    case "DELETETOBACKET":
      return {
        ...state,
        backedItems: [
          ...state.backedItems.filter((item) => item.idCode !== action.payload),
        ],
      };
    case "CHANGEAMOUNT":
      return {
        ...state,
        backedItems: [...state.backedItems].map((item) => {
          if (item.idCode === action.payload.index) {
            item.amount = action.payload.amount;
            return item;
          }
          return item;
        }),
      };
    case "CATEGORYFETCHED":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
