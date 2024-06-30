import Icon from "@/app/community/_components/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";
import { isMobile, isBrowser } from "react-device-detect";
import SearchComponent from "@/components/SearchComponent";
import Category from "@/app/community/_components/Category";

export default function Community() {
  const [numShowItems, numShowPages] = [24, 10];
  return (
    <div>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div
          style={{
            width: "500px",
            fontSize: "33px",
            fontWeight: "600",
            margin: "70px 0",
          }}
        >
          <span style={{ color: "#314FC0" }}>움집</span>에서 당신의 이야기를 들려주세요
        </div>

        <div
          className="container"
          style={{
            width: "100%",
            marginLeft: "0",
            overflow: "hidden",
            padding: "0",
            position: "relative",
          }}
        >
          <Category />
          <SearchComponent />
        </div>

        <PostMenu title={""} routeUrl={"/community/write"} routeText={"글쓰기"}>
          <Suspense>
            <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
          </Suspense>
        </PostMenu>
      </div>

      {/* {isMobile && (
        <div style={{ width: "101vw", marginLeft: "-4vw", overflow: "hidden" }}>
          <div
            style={{
              width: "100%",
              fontSize: "20px",
              fontWeight: "600",
              margin: "30px 0 0 0",
              paddingLeft: "4vw",
            }}
          >
            <span style={{ color: "#314FC0" }}>움집</span>에서 당신의 이야기를 들려주세요
          </div>

          <div style={{ width: "100%" }}>
            <div className="row" style={{ marginLeft: "3%", marginTop: "20px" }}>
              <Icon style={{ margin: "0", padding: "0" }} title="전체" param={""} pathname={"/community"} />
              <Icon style={{ margin: "0", padding: "0" }} title="일반" param={`일반`} pathname={"/community"} />
              <Icon style={{ margin: "0", padding: "0" }} title="질문" param={`질문`} pathname={"/community"} />
              <Icon style={{ margin: "0", padding: "0" }} title="공지" param={`공지`} pathname={"/community"} />
            </div>
          </div>

          <div style={{ width: "102vw" }}>
            <PostMenu title={""} routeUrl={"/community/write"} routeText={"글쓰기"}>
              <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
            </PostMenu>
          </div>
        </div>
      )} */}
    </div>
  );
}
