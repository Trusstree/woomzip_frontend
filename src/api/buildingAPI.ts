import { ApiClient } from "@/api/apiClient";

export const getOffices = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await ApiClient.get(`/office`, {
      params: {},
      headers: {}
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
    const result = await ApiClient.get(`/office/${officeNum}`, {
      params: {},
      headers: {}
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
    const result = await ApiClient.post(`/office/`, office, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};