"use client"

import { MyHouseList } from "@/components/mypage/MyHouseList";
import PostMenu from "@/components/posts/PostMenu";
import { usePathname, useRouter } from "next/navigation";

export default function House() {
  const [numShowItems, numShowPages] = [12, 5];
  const router = useRouter();
  const pathname = usePathname();
  
  return (
    <div>
      <button
        className="mt-5 btn btn-lg text-white"
        style={{backgroundColor:"#101648"}}
        onClick={()=>{router.push(`${pathname}/house?method=add`);}}>
        추가하기
      </button>
      <PostMenu
        title={"내가 원하는 주택들을 검색하여 구경해보세요!"}>
        <MyHouseList
          numShowItems={numShowItems}
          numShowPages={numShowPages}
          searchCondition={{}} />
      </PostMenu>
    </div>
  );
}