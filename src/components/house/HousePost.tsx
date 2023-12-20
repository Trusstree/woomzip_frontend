"use client"

import { getHouseCount, getHouses } from "@/api/HouseAPI";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import MainPagePost from "../posts/MainPagePost";

type HousePostProps = {
  numShowItems: number
  numShowPages: number
  searchCondition: {}
}

export function HousePost(props: HousePostProps) {
  const { numShowItems, numShowPages, searchCondition } = props;
  const searchParams = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = (rawPage>0)?rawPage:1;
  const [houseData, setHouseData] = useState(undefined as any);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    (async ()=>{
      const params=searchCondition;
      const { count, error } = await getHouseCount(params);
      console.log(error);
      setCount(count);
    })();
  },[]);
  useEffect( () => {
    (async ()=>{
      const params={
        skip: numShowItems*(page-1),
        limit: numShowItems,
        ...searchCondition
      };

      console.log(`count: ${count}`)
      
      const { data, error } = await getHouses(params);
      if(!error) setHouseData(data);
      else console.log(error);
    })();
  },[searchCondition, page])
        
  return houseData && (
    <>
      {houseData.map((e, i)=>{
        return (
        <MainPagePost
          key={i}
          url={`/house/${e.id}`}
          src={e.image}>
          {e.title}
        </MainPagePost>
        )
      })}
      <Pagination
        numItems={count}
        numShowItems={numShowItems}
        numShowPages={numShowPages}
        />
    </>
  );
}