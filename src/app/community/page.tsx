import Icon from "@/app/community/_components/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";
import SearchComponent from "@/components/SearchComponent";
import CategoryButton from "@/components/CategoryButton";

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
          <div
            className="row"
            style={{ width: "auto%", marginLeft: "0", height: "80px" }}
          >
            <CategoryButton
              title={"전체"}
              imgSrc={
                "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
              }
            />
            <CategoryButton
              title={"베스트"}
              imgSrc={
                "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/best.png"
              }
              category={"베스트"}
            />
            <CategoryButton
              title={"일반"}
              imgSrc={
                "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/free.png"
              }
              category={"일반"}
            />
            <CategoryButton
              title={"질문"}
              imgSrc={
                "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/qna.png"
              }
              category={"질문"}
            />
            <CategoryButton
              title={"칼럼"}
              imgSrc={
                "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/column.png"
              }
              category={"칼럼"}
            />
            <CategoryButton
              title={"공지"}
              imgSrc={
                "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/announce.png"
              }
              category={"공지"}
            />
          </div>
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
