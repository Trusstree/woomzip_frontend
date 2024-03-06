"use client"

import { MyHouseList } from "@/components/mypage/MyHouseList";
import PostMenu from "@/components/posts/PostMenu";

export default function House() {
  const [numShowItems, numShowPages] = [12, 5];

  return (
    <>
    <PostMenu
        title={"내가 원하는 주택들을 검색하여 구경해보세요!"}>
        <MyHouseList
          numShowItems={numShowItems}
          numShowPages={numShowPages}
          searchCondition={{}} />
      </PostMenu>
    </>
  );
}