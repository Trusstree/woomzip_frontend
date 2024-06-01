"use client";

import Icon from "@/components/posts/Icon";
import { useState } from "react";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";

export default function Home() {
  const [numShowItems, numShowPages] = [24, 10];
  const [postCondition, setPostCondition] = useState({});

  return (
    <main>
      <div style={{ width: "500px", fontSize: "38px", fontWeight: "600", margin: "120px 0 80px 0" }}>
        전원생활 고민들,
        <br />
        비슷한 사람들과 나눠보세요
      </div>
        {/* search bar */}
        {/* <div className={`my-2`}>
          <SearchBox
            className="text-black"
            placeholder={"찾고 싶은 내용을 검색해보세요!"}
          />
        </div> */}
      <div style={{ width: "600px" }}>
        <Suspense>
          <PostMenu title={""}>
            <div className="row">
              <Icon 
                style={{ margin: "0 2px" }}
                title="전체"
                name="전체"
                value="1"
                data={postCondition}
                setData={setPostCondition} />
              <Icon
                style={{ margin: "0 2px"}}
                title="일반"
                param={`일반`}
              />
              <Icon
                style={{ margin: "0 2px" }}
                title="질문"
                param={`질문`}
              />
              <Icon
                style={{ margin: "0 2px" }}
                title="공지"
                param={`공지`}
              />
            </div>
          </PostMenu>
        </Suspense>
      </div>
      

      <PostMenu title={""} routeUrl={"/community/write"} routeText={"글쓰기"}>
        <Suspense>
          <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
        </Suspense>
      </PostMenu>
    </main>
  );
}
