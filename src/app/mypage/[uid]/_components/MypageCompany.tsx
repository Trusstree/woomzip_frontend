import { ReviewInfo } from "@/components/house/ReviewInfo";
import PostMenu from "@/components/posts/PostMenu";
import House from "@/app/mypage/[uid]/_components/House";
import { Suspense } from "react";
import MyPageProfile from "@/app/mypage/[uid]/_components/MyPageProfile";
import AppPostList from "@/components/posts/AppPostList";
import { AppLivingCardList } from "@/components/living/AppLivingCardList";

export default function MypageCompany({ uid, userData }) {
  return (
    <main>
      <div className="row" style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", fontWeight: "500" }}>프로필</div>
        <div className="row g-2" style={{ width: "100%", position: "relative" }}>
          <div className="col-6">
            <div style={{ borderRadius: "10px 0 0 10px", overflow: "hidden" }}>
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-3">
            <div style={{ height: "50%", overflow: "hidden" }}>
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
            <div style={{ height: "50%", marginTop: "4px", overflow: "hidden" }}>
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-3">
            <div
              style={{
                height: "50%",
                overflow: "hidden",
                borderRadius: "0 10px 0 0",
              }}
            >
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                height: "50%",
                marginTop: "4px",
                overflow: "hidden",
                borderRadius: "0 0 10px 0",
              }}
            >
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            className="btn"
            style={{
              position: "absolute",
              right: "25px",
              bottom: "15px",
              backgroundColor: "white",
              opacity: "0.7",
              width: "150px",
            }}
          >
            <div className="d-flex justify-content-between">
              <div style={{ width: "30px" }}>
                <img
                  src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
                  style={{ width: "25px" }}
                />
              </div>
              <div style={{ width: "auto", marginTop: "2px" }}>사진 전체보기</div>
            </div>
          </div>
        </div>

        <div className="g-3 row w-100">
          <div className="col-4">
            <MyPageProfile uid={uid} userData={userData} />
          </div>
          <div className="col-8">
            <div style={{ width: "100%", marginTop: "60px" }}>
              <div style={{ margin: "0px" }}>
                <ReviewInfo />
              </div>

              <div style={{ width: "100%", marginTop: "60px" }}>
                <PostMenu
                  title={"판매자 연관 칼럼"}
                  routeUrl={"/community"}
                  routeText={"더보기"}
                  horizontalScroll={true}
                >
                  <Suspense>
                    <AppPostList numShowItems={4} />
                  </Suspense>
                </PostMenu>
              </div>

              <div style={{ width: "100%", marginTop: "60px" }}>
                <PostMenu title={"판매자 체험 숙소"} routeUrl={"/living"} routeText={"더보기"} horizontalScroll={true}>
                  <Suspense>
                    <AppLivingCardList numShowItems={4} />
                  </Suspense>
                </PostMenu>
              </div>

              <House userData={userData} isYou={userData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
