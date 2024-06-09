"use client";

import { MyHouseList } from "@/app/mypage/[uid]/_components/MyHouseList";
import PostMenu from "@/components/posts/PostMenu";
import { usePathname, useRouter } from "next/navigation";

export default function House({ userData, isYou }) {
  const [numShowItems, numShowPages] = [12, 5];
  const searchCondition = { seller_id: userData.uid };
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="mt-5">
      {isYou && (
        <div>
          <h5 className="fw-bold">집을 추가하고 싶으시나요?</h5>
          <button
            className="btn btn-lg fs-5 text-white"
            style={{ backgroundColor: "#101648" }}
            onClick={() => {
              router.push(`${pathname}/house?method=add`);
            }}
          >
            집 추가하기
          </button>
        </div>
      )}
      <PostMenu title={"내가 올린 주택들을 구경해보세요!"}>
        <MyHouseList numShowItems={numShowItems} numShowPages={numShowPages} searchCondition={searchCondition} />
      </PostMenu>
    </div>
  );
}
