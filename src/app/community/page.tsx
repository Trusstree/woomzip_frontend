import Icon from "@/app/community/_components/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";

export default function Community() {
  const [numShowItems, numShowPages] = [24, 10];

  return (
    <main>
      <div style={{ width: "500px", fontSize: "38px", fontWeight: "600", margin: "120px 0 80px 0" }}>
        전원생활 고민들,
        <br />
        비슷한 사람들과 나눠보세요
      </div>
      <div style={{ width: "600px" }}>
        <PostMenu title={""}>
          <div className="row">
            <Icon style={{ margin: "0 2px" }} title="전체" param={""} pathname={"/community"} />
            <Icon style={{ margin: "0 2px" }} title="일반" param={`일반`} pathname={"/community"} />
            <Icon style={{ margin: "0 2px" }} title="질문" param={`질문`} pathname={"/community"} />
            <Icon style={{ margin: "0 2px" }} title="공지" param={`공지`} pathname={"/community"} />
          </div>
        </PostMenu>
      </div>

      <PostMenu title={""} routeUrl={"/community/write"} routeText={"글쓰기"}>
        <Suspense>
          <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
        </Suspense>
      </PostMenu>
    </main>
  );
}
