import { apiClient } from "@/configs/apiClient";

export const getOffices = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/office`, {
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
    const result = await apiClient.get(`/apis/office/${officeNum}`, {
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
    const result = await apiClient.post(`/apis/office/`, office, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};