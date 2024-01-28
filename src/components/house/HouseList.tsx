"use client"

import { getHouseCount, getHouses } from "@/api/HouseAPI";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import HouseCardPlaceholder from "./HouseCardPlaceholder";
import HouseCard from "./HouseCard";

type HousePostProps = {
  numShowItems: number
  numShowPages?: number
  searchCondition: {}
}

export function HouseList(props: HousePostProps) {
  const { numShowItems, numShowPages, searchCondition } = props;
  const searchParams = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = (rawPage>0)?rawPage:1;
  const [houseData, setHouseData] = useState(undefined as any);
  const [count, setCount] = useState(0);

  useEffect( () => {
    (async ()=>{
      const params={
        skip: numShowItems*(page-1),
        limit: numShowItems,
        ...searchCondition
      };

      const { count, countError } = await getHouseCount(searchCondition);
      if(countError) {console.log(countError); return;}
      setCount(count);

      const { data, error } = await getHouses(params);
      if(error) {console.log(error); return;}
      setHouseData(data);
    })();
  },[searchCondition, page])
  
  return houseData ? 
    <>
      {houseData.map((e, i)=>{
        return (
        <HouseCard
          key={i}
          data={e} />
        )
      })}
      {numShowPages && <Pagination
        numItems={count}
        numShowItems={numShowItems}
        numShowPages={numShowPages}
        />}
    </>
    :
    <>
      {new Array(numShowItems).fill(0).map((e, i)=>{
        return <HouseCardPlaceholder key={i} />
       })}
      {numShowPages && <Pagination
        numItems={count}
        numShowItems={numShowItems}
        numShowPages={numShowPages}
        />}
    </>;
}