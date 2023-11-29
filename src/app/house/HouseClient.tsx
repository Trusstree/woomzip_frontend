"use client"

import PostMenu from "@/components/posts/PostMenu";
import { HousePost } from "@/components/house/HousePost";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function Home() {
  const [searchCondition, setSearchCondition]=useState({});

  const handleData = (e:ChangeEvent<HTMLInputElement>, name:string):ChangeEventHandler<HTMLInputElement> => {
    if (e) e.preventDefault();

    setSearchCondition((oldValues) => ({...oldValues, [name]: e.target.value||0}));
    return;
  }

  return (
    <div>
      <div className="mt-5">
      <h5 className={`fw-bold`}>집을 지을 때 필요한 조건을 검색해보세요!</h5>
        <div className={`row`}>
          {/* price */}
          <div className="col-3 d-flex flex-column align-items-left">
            <label htmlFor={"price"}>최대 가격</label>
            <input
              type='text'
              id={"price"}
              onChange={(e)=>handleData(e, "price")}
              value={searchCondition["price"]|| ''}
            />
          </div>

          {/* floorSpace */}
          <div className="col-3 d-flex flex-column align-items-left">
            <label htmlFor={"floorSpace"}>최대 평수</label>
            <input
              type='text'
              id={"floorSpace"}
              onChange={(e)=>handleData(e, "floorSpace")}
              value={searchCondition["floorSpace"]|| ''}
            />
          </div>

          {/* roomNumber */}
          <div className="col-3 d-flex flex-column align-items-left">
            <label htmlFor={"roomNumber"}>방개수</label>
            <input
              type='text'
              id={"roomNumber"}
              onChange={(e)=>handleData(e, "roomNumber")}
              value={searchCondition["roomNumber"]|| ''}
            />
          </div>

          {/* toiletNumber */}
          <div className="col-3 d-flex flex-column align-items-left">
            <label htmlFor={"toiletNumber"}>화장실개수</label>
            <input
              type='text'
              id={"toiletNumber"}
              onChange={(e)=>handleData(e, "toiletNumber")}
              value={searchCondition["toiletNumber"]|| ''}
            />
          </div>
        </div>
      </div>

      <PostMenu
        title={"내가 원하는 주택들을 검색하여 구경해보세요!"}
        routeUrl={"/"}
        routeText={"더보기"}>
        <HousePost
          skip={0}
          limit={12}
          searchCondition={searchCondition}
          />
      </PostMenu>
    </div>
  );
}