import SignoutButton from '@/app/mypage/[uid]/_components/SignoutButton';
import { getUserdataByToken } from '@/lib/parseUtil';
import { cookies } from 'next/headers';
import EditProfileButton from '../EditProfileButton';

export default function MypageProfileUser({ uid, userData }) {
  const cookieStorge = cookies();
  const accessToken = cookieStorge.get('accessToken')?.value;
  const signedUID = accessToken && getUserdataByToken(accessToken)?.uid;

  return (
    <div className="card sticky-top" style={{ width: '100%', border: 'none', zIndex: 1 }}>
      <div className="container" style={{ height: '60px' }}></div>
      <div
        style={{
          padding: '10px',
          boxShadow: '3px 3px 13px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        }}
      >
        <div className="row" style={{ width: '100%' }}>
          <div style={{ width: '90px' }}>
            <img
              className={'m-0 align-self-center'}
              src={userData?.userInfo.user_img_url || '/blur_image.png'}
              alt={`profile`}
              width={100}
              height={70}
              style={{ objectFit: 'cover', borderRadius: '90px', width: '70px', height: '70px' }}
            />
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: '600',
              margin: '20px 0',
              width: 'auto',
            }}
          >
            {userData?.userInfo['nickname']}
          </div>
        </div>
        <div style={{ width: '100%', margin: '30px 0', fontSize: '16px' }}>{userData?.userInfo.one_line_introduce}</div>
        {Number(uid) == signedUID && (
          <>
            <div className="row">
              <div className="col-3" style={{ fontWeight: '600' }}>
                이름
              </div>
              <div className="col-9">{userData?.userInfo.name}</div>
            </div>
            <div className="row">
              <div className="col-3" style={{ fontWeight: '600' }}>
                이메일
              </div>
              <div className="col-9">{userData?.userInfo.email}</div>
            </div>
            <div className="row">
              <div className="col-3" style={{ fontWeight: '600' }}>
                전화번호
              </div>
              <div className="col-9">{userData?.userInfo.phone_number}</div>
            </div>
            <div className={'d-flex justify-content-end'}>
              <>
                <EditProfileButton uid={uid} />
                <SignoutButton />
              </>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
