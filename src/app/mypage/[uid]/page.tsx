import MypageCompany from '@/app/mypage/[uid]/_components/_company/MypageCompany';
import MypageUser from '@/app/mypage/[uid]/_components/_user/MypageUser';
import { loadUserData } from '@/app/mypage/[uid]/_actions/actions';
import LoadPage from '@/components/app/LoadPage';

export default async function Page({ params, searchParams }) {
  const { uid } = params;
  const [role, userData] = await loadUserData(uid);
  return userData ? (
    <>
      {role == 1 && <MypageCompany uid={uid} userData={userData} searchParams={searchParams} />}
      {role == 0 && <MypageUser uid={uid} userData={userData} searchParams={searchParams} />}
    </>
  ) : (
    <LoadPage />
  );
}
