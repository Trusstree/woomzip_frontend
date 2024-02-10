import { apiClient } from '../configs/apiClient';
import { getUserInfo } from '../lib/cookieUtil';

export const signinUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await apiClient.post(`/security/signin`, user, { headers: {} });

    data = result?.data as SigninResponse | undefined;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const signoutUser = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const userInfo = getUserInfo();
    if (!userInfo) throw 'User is not exists';

    const result = await apiClient.post(`/security/signout`, undefined, { headers: { 'X-AUTH-TOKEN': userInfo.accessToken } });

    data = result?.data as SigninResponse | undefined;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const vaildateUser = async () => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const userInfo = getUserInfo();
    if (!userInfo) throw 'User is not exists';

    const result = await apiClient.post(`/security/vaildate`, undefined, { headers: { 'X-AUTH-TOKEN': userInfo.accessToken } });

    data = result?.data as SigninResponse | undefined;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const refreshUser = async (user: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const userInfo = getUserInfo();
    if (!userInfo) throw 'User is not exists';

    const result = await apiClient.post(`/security/refresh`, user, {
      headers: { 'X-AUTH-TOKEN': userInfo.accessToken, 'REFRESH-TOKEN': userInfo.refreshToken }
    });

    data = result?.data as SigninResponse | undefined;
  } catch (err) {
    error = err;
  }

  return { data, error };
};
