import UserMypageProfile from '@/app/mypage/[uid]/_components/_user/MypageProfileUser';

import PostMenu from '@/components/posts/PostMenu';
import EditProfileUser from '@/app/mypage/[uid]/_components/_user/EditProfileUser';
import PostListUser from '@/app/mypage/[uid]/_components/_user/PostListUser';

export default function MypageUser({ uid, userData, searchParams }) {
  return (
    <>
      <div className="row" style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
        <div className="row w-100">
          <div className="col-md-4 col-12">
            <UserMypageProfile uid={uid} userData={userData} />
          </div>
          <div className="col-md-8 col-12">
            {searchParams.method == 'edit' ? (
              <EditProfileUser userInfo={userData.userInfo} />
            ) : (
              <div style={{ width: '100%', marginTop: '60px' }}>
                <div style={{ width: '100%', marginTop: '60px' }}>
                  <PostMenu
                    title={'내가 작성한 글'}
                    routeUrl={`/news?q=${userData.userInfo.nickname}`}
                    routeText={'더보기'}
                    horizontalScroll={true}
                  >
                    <PostListUser postData={userData.post} />
                  </PostMenu>
                </div>

                <div style={{ width: '100%', marginTop: '60px' }}>
                  {/* <PostMenu
                  title={"내가 좋아하는 집"}
                  routeUrl={"/community"}
                  routeText={"더보기"}
                  horizontalScroll={true}
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <HouseList numShowItems={4} />
                  </div>
                </PostMenu> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
