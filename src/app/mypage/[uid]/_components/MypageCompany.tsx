import PostMenu from "@/components/posts/PostMenu";
import MyPageProfile from "@/app/mypage/[uid]/_components/MyPageProfile";
import ReviewList from "@/components/review/ReviewList";
import MypagePostList from "@/app/mypage/[uid]/_components/MypagePostList";
import MypageLivingCardList from "@/app/mypage/[uid]/_components/MypageLivingCardList";
import MypageHouseList from "@/app/mypage/[uid]/_components/MypageHouseList";

function parseData(companyData) {
  let [profile, companyImages, reviews, posts, pavilions, sellingHouses] = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  profile = companyData["companyInfo"]["profile"];
  companyImages = companyData["companyInfo"]["images"];
  reviews = companyData["reviews"];
  posts = companyData["posts"];
  pavilions = companyData["pavilions"];
  sellingHouses = companyData["sellingHouses"];

  console.log(companyData);
  return { profile, companyImages, reviews, posts, pavilions, sellingHouses };
}

export default async function MypageCompany({ uid, userData }) {
  const { profile, companyImages, reviews, posts, pavilions, sellingHouses } = parseData(userData);

  return (
    <>
      <div className="row" style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", fontWeight: "500" }}>프로필</div>
        <div className="row g-2" style={{ width: "100%", position: "relative" }}>
          <div className="col-6">
            <div style={{ borderRadius: "10px 0 0 10px", overflow: "hidden" }}>
              <img
                src={companyImages[0]}
                alt={"company images 0"}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-3">
            <div style={{ height: "50%", overflow: "hidden" }}>
              <img
                src={companyImages[1]}
                alt={"company images 1"}
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
            <div style={{ height: "50%", marginTop: "4px", overflow: "hidden" }}>
              <img
                src={companyImages[2]}
                alt={"company images 2"}
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
                src={companyImages[3]}
                alt={"company images 3"}
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
                src={companyImages[4]}
                alt={"company images 4"}
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
            <MyPageProfile uid={uid} userData={profile} />
          </div>
          <div className="col-8">
            <div style={{ width: "100%", marginTop: "60px" }}>
              <div style={{ margin: "0px" }}>
                <ReviewList
                  review={reviews["allReviews"]}
                  count={reviews["allReviews"].length}
                  rating={reviews["averageRating"]}
                />
              </div>

              <div style={{ width: "100%", marginTop: "60px" }}>
                <PostMenu
                  title={"판매자 연관 칼럼"}
                  routeUrl={"/community"}
                  routeText={"더보기"}
                  horizontalScroll={true}
                >
                  <MypagePostList posts={posts} numShowItems={4} />
                </PostMenu>
              </div>

              <div style={{ width: "100%", marginTop: "60px" }}>
                <PostMenu title={"판매자 체험 숙소"} routeUrl={"/living"} routeText={"더보기"} horizontalScroll={true}>
                  <MypageLivingCardList pavilions={pavilions} numShowItems={4} />
                </PostMenu>
              </div>

              <div style={{ width: "100%", marginTop: "60px" }}>
                <PostMenu title={"판매자 체험 숙소"} routeUrl={"/living"} routeText={"더보기"} horizontalScroll={true}>
                  <MypageHouseList houses={sellingHouses} numShowItems={4} />
                </PostMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
