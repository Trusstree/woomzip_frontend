import Icon from "@/app/community/_components/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";
import SearchComponent from "@/components/SearchComponent";
import Category from "@/app/community/_components/Category";

export default function Community() {
  const [numShowItems, numShowPages] = [24, 10];
  return (
    <div>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div
          style={{
            width: "100%",
            fontSize: "33px",
            fontWeight: "600",
            margin: "70px 0",
            wordBreak: "keep-all",
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
    </div>
  );
}
