"use client"

import PostList from "@/components/posts/PostList";
import PostMenu from "@/components/posts/PostMenu";
import { useSearchParams } from "next/navigation";
import {  useState } from "react";

export default function communityClient() {
  const [searchCondition, setSearchCondition]=useState({});
  const [numShowItems, numShowPages] = [24, 10];
  

  return (
    <main className={`container px-5 my-2`}>
      {/* search bar */}
      {/* <div className={`my-2`}>
        <SearchBox
          className="text-black"
          placeholder={"찾고 싶은 내용을 검색해보세요!"}
        />
      </div> */}

      {/* <PostMenu
        title={"관심있는 주제를 선택해보세요!"}>
        <div className="d-flex">
        <Icon src={"icon_moduledhouse.png"} url={`/community?search=모듈형주택`}>모듈형주택</Icon>
          <Icon src={"icon_house.png"} url={`/community?search=일반주택`}>일반주택</Icon>
          <Icon src={"icon_multihouse.png"} url={`/community?search=다세대주택`}>다세대주택</Icon>
          <Icon src={"icon_sangahouse.png"} url={`/community?search=상가주택`}>상가주택</Icon>
          <Icon src={"icon_sanga.png"} url={`/community?search=상가`}>상가</Icon>
        </div>
      </PostMenu> */}

      <PostMenu
        title={"다양한 건축고민을 나누어보세요!"}
        routeUrl={"/community/write"}
        routeText={"글쓰기"}>
        <PostList
          numShowItems={numShowItems} 
          numShowPages={numShowPages}
          searchCondition={searchCondition} />
      </PostMenu>
    </main>
  );
}
