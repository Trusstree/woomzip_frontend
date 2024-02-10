import { apiClient } from "@/configs/apiClient";

export const getPersons = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/person`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getPerson = async (personNum: number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.get(`/apis/person/${personNum}`, {
      params: {},
      headers: {}
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const postPerson = async (person: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/apis/person/`, person, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};