"use client"

import PostMenu from "@/components/posts/PostMenu";
import { HousePost } from "@/components/house/HousePost";
import { useState } from "react";
import HouseConditionForm from "@/components/house/HouseConditionForm";

export default function Home() {
  const [searchCondition, setSearchCondition]=useState({});
  const [numShowItems, numShowPages] = [12, 10];

  return (
    <div>
      <div className="mt-5">
      <h5 className={`fw-bold`}>집을 지을 때 필요한 조건을 검색해보세요!</h5>
        <div className={`row`}>
          {/* price */}
          <HouseConditionForm
            className="col-3"
            title={"가격 (단위: 원)"}
            searchCondition={searchCondition}
            setSearchCondition={setSearchCondition}
            minValue={"minPrice"}
            maxValue={"maxPrice"}          
          />

          {/* floorSpace */}
          <HouseConditionForm
            className="col-3"
            title={"평수 (단위: 평)"}
            searchCondition={searchCondition}
            setSearchCondition={setSearchCondition}
            minValue={"minFloorSpace"}
            maxValue={"maxFloorSpace"}          
          />

          {/* roomNumber */}
          <HouseConditionForm
            className="col-3"
            title={"방개수 (단위: 개)"}
            searchCondition={searchCondition}
            setSearchCondition={setSearchCondition}
            minValue={"minRoomNumber"}
            maxValue={"maxRoomNumber"}          
          />

          {/* toiletNumber */}
          <HouseConditionForm
            className="col-3"
            title={"화장실개수 (단위: 개)"}
            searchCondition={searchCondition}
            setSearchCondition={setSearchCondition}
            minValue={"minToiletNumber"}
            maxValue={"maxToiletNumber"}          
          />
        </div>
      </div>

      <PostMenu
        title={"내가 원하는 주택들을 검색하여 구경해보세요!"}
        routeUrl={"/"}
        routeText={"더보기"}>
        <HousePost
          numShowItems={numShowItems}
          numShowPages={numShowPages}
          searchCondition={searchCondition}
          />
      </PostMenu>
    </div>
  );
}