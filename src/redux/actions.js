export const headerImage = (e) => ({
  type: "HEADER_IMAGE_CATEGORY",
  payload: e,
});

export const dataFetching = () => ({
  type: "DATAFETCHING",
});

export const dataFetched = (data) => ({
  type: "DATAFETCHED",
  payload: data,
});

export const homeFetching = () => ({
  type: "HOMEFETCHING",
});

export const homeFetched = (data) => ({
  type: "HOMEFETCHED",
  payload: data,
});

export const selectedProduct = (data) => ({
  type: "SELECTEDPRODUCT",
  payload: data,
});

export const addToBacket = (data) => ({
  type: "ADDTOBACKET",
  payload: data,
});

export const deleteToBacked = (data) => ({
  type: "DELETETOBACKET",
  payload: data,
});

export const changeAmount = (amount, index) => ({
  type: "CHANGEAMOUNT",
  payload: { amount, index },
});

export const loadingEnd = () => ({
  type: "LOADINGEND",
});

export const categoryFetched = (data) => ({
  type: "CATEGORYFETCHED",
  payload: data,
});
