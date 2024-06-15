"use client";

import { MyHouseList } from "@/components/mypage/MyHouseList";
import PostMenu from "@/components/posts/PostMenu";
import { usePathname, useRouter } from "next/navigation";

export default function House({ userData, isYou }) {
  const [numShowItems, numShowPages] = [12, 5];
  const searchCondition = { seller_id: userData.uid };
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between" style={{marginTop:"30px"}}>
        <h5 style={{ width:"200px"}}>
          판매자 제품(13)
        </h5>
        {isYou && (
          <div
            className="btn"
            style={{ fontSize:"14px"}}
            onClick={() => {
            router.push(`${pathname}/house?method=add`);
            }}
            >
              제품 추가하기
          </div>
        )}
      </div>
      <PostMenu title={""}>
        <MyHouseList numShowItems={numShowItems} numShowPages={numShowPages} searchCondition={searchCondition} />
      </PostMenu>
    </div>
  );
}
