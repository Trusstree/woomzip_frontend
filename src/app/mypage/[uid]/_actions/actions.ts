'use server';

import { getUser } from '@/actions/apis/userAPI';

export async function loadUserData(uid) {
  let [role, userData] = [undefined, undefined];
  const [data, error] = await getUser(uid);
  if (error) {
    console.error(error);
    console.log('user error');
    return [role, userData];
  }

  userData = data.data[0];

  // 회사 데이터면 companyInfo가
  // 아니라면 companyInfo 없이 바로 데이터가 쌩으로 나옴

  if (userData['companyInfo']) role = 1;
  else if (userData['userInfo']) role = 0;

  return [role, userData];
}
