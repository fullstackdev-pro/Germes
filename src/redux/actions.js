export const headerImage = (e) => ({
  type: "HEADER_IMAGE_CATEGORY",
  payload: e,
});

export const dataFetching = () => ({
  type: "DATAFETCHING"
})

export const dataFetched = (data) => ({
    type: "DATAFETCHED",
    payload: data,
  });
  