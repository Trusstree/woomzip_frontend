"use client"

import { getHouses } from "@/api/HouseAPI";
import { useEffect, useState } from "react";
import MainPagePost from "../posts/MainPagePost";

type HousePostProps = {
  skip: number;
  limit: number;
  searchCondition: any;
}

export function HousePost(props: HousePostProps) {
  const { skip, limit, searchCondition } = props;
  const [houseData, setHouseData] = useState(undefined as any);

  useEffect( () => {
    (async ()=>{
      const params={
        skip: skip,
        limit: limit,
        ...searchCondition
      };
      const { data, error } = await getHouses(params);
      if(!error) setHouseData(data);
      else console.log(error);
    })();
  },[searchCondition])

  return (
    <>
      {houseData?houseData.map((e, i)=>{
        return (
        <MainPagePost
          key={i}
          url={`/house/${e.id}`}
          src={e.image}>
          {e.title}
        </MainPagePost>
        )
      }):undefined}
      
    </>
  );
}