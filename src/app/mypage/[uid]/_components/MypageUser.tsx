import SignoutButton from "@/app/mypage/[uid]/_components/SignoutButton";
import UserMypageProfile from "./UserMypageProfile";
import { AppHouseList } from "@/components/house/AppHouseList";
import AppPostList from "@/components/posts/AppPostList";
import PostMenu from "@/components/posts/PostMenu";
import { getHouses } from "@/actions/apis/HouseAPI";

async function loadData() {
  const [rawHouseData, houseError] = await getHouses({ skip: 1, limit: 6 });
  if (houseError) {
    console.error(houseError);
    return;
  }
  const [houseData, houseCount] = [
    rawHouseData.data[0].houses,
    rawHouseData.data[0].total_count,
  ];
  return { houseData, houseCount };
}

export default function MypageUser({ uid, userData }) {
  return (
    <>
      <div
        className="row"
        style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}
      >
        <div className="g-3 row w-100">
          <div className="col-4">
            <UserMypageProfile uid={uid} userData={userData} />
          </div>
          <div className="col-8">
            <div style={{ width: "100%", marginTop: "60px" }}>
              <div style={{ width: "100%", marginTop: "60px" }}>
                <PostMenu
                  title={"내가 작성한 글"}
                  routeUrl={"/community"}
                  routeText={"더보기"}
                  horizontalScroll={true}
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <AppPostList numShowItems={4} />
                  </div>
                </PostMenu>
              </div>

              <div style={{ width: "100%", marginTop: "60px" }}>
                <PostMenu
                  title={"내가 좋아하는 집"}
                  routeUrl={"/community"}
                  routeText={"더보기"}
                  horizontalScroll={true}
                >
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <AppHouseList numShowItems={4} houseData={[]} count={0} />
                  </div>
                </PostMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
