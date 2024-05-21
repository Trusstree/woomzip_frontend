export const onPrivateClientRequest = async (request: any) => {
  return request;
};

export const onPrivateClientResponseError = async (error: any) => {
  const status = error.response.data.status;
  try {
    if (status == 401) {
      console.log(error);
    }

    if (status == 402) {
      console.log(error);
    }
  } catch (referenceError) {
    return Promise.reject(referenceError);
  }

  return Promise.reject(error);
};
