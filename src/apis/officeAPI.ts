import { apiClient } from "@/configs/apiClient";

export const getOffices = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/office`, {
      params: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getOffice = async (officeNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/office/${officeNum}`, {
      params: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postOffice = async (office: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/office/`, office, {
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};
