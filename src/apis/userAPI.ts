import { privateApiClient } from "@/configs/privateApiClient";
import { publicApi } from "@/configs/publicApi";

export const getUser = async (uid: string | number) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApiClient.get(`/users/profile`, {
      params: { uid: uid },
    });
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

export const postUser = async (user: any, token: string) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.post(`/users/enroll`, user);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const putUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await privateApiClient.post(`/users/update`, user);
    data = result?.data;
  } catch (err) {
    error = err;
  }

  return [data, error];
};

// export const signinUser = async (user: any) => {
//   let [data, error] = [undefined, undefined] as any;

//   try {
//     const result = await publicApi.post(`/auth/sign-in`, user);
//     data = result?.data;
//   } catch (err) {
//     error = err;
//   }

//   return [data, error];
// };
