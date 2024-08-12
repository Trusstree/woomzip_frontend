import { getUser } from '@/actions/apis/userAPI';
import MypageCompany from '@/app/mypage/[uid]/_components/MypageCompany';
import MypageUser from '@/app/mypage/[uid]/_components/MypageUser';
import LoadPage from '@/components/app/LoadPage';

async function loadData(uid: string | number) {
  'use server';

  let role = 0,
    userData = undefined;
  const [data, error] = await getUser(uid);
  if (error) {
    console.error(error);
    console.log('user error');
    return { role, userData };
  }

  userData = data.data[0];

  // 회사 데이터면 companyInfo가
  // 아니라면 companyInfo 없이 바로 데이터가 쌩으로 나옴

  if (userData['companyInfo']) role = 1;
  else role = 0;

  return { role, userData };
}

export default async function Page({ params, searchParams }) {
  const { uid } = params;
  const { role, userData } = await loadData(uid);
  return userData ? (
    role == 1 ? (
      <MypageCompany uid={uid} userData={userData} searchParams={searchParams} />
    ) : (
      <MypageUser uid={uid} userData={userData} searchParams={searchParams} />
    )
  ) : (
    <LoadPage />
  );
}
