import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import SearchComponent from "@/app/community/_components/SearchComponent";
import Category from "@/app/community/_components/Category";

export default function Page() {
  const [numShowItems, numShowPages] = [24, 10];

  return (
    <div>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div
          style={{
            width: "100%",
            fontSize: "33px",
            fontWeight: "600",
            margin: "50px 0",
            wordBreak: "keep-all",
          }}
        >
          <span style={{ color: "#314FC0" }}>움집</span>에서 당신의 이야기를
          들려주세요
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

        <PostMenu routeUrl={"/community/write"} routeText={"글쓰기"}>
          <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
        </PostMenu>
      </div>
    </div>
  );
}
