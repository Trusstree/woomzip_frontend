import { ApiClient } from "@/api/apiClient";

export const getPersons = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await ApiClient.get(`/api/person`, {
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
    const result = await ApiClient.get(`/api/person/${personNum}`, {
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
    const result = await ApiClient.post(`/api/person/`, person, { headers: {} });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};