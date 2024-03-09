"use client"

import { getHouseCount, getHouses } from "@/apis/HouseAPI";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Pagination from "../Pagination";
import HouseCardPlaceholder from "./HouseCardPlaceholder";
import HouseCard from "./HouseCard";

type HousePostProps = {
  numShowItems: number
  numShowPages?: number
  searchCondition: {}
  isSubmit?: boolean
  setIsSubmit?: Dispatch<SetStateAction<{}>>
}

export function HouseList(props: HousePostProps) {
  const { numShowItems, numShowPages, searchCondition, isSubmit, setIsSubmit } = props;
  const searchParams = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = (rawPage>0)?rawPage:1;
  const [houseData, setHouseData] = useState([] as Array<any>);
  const [count, setCount] = useState(0);

  useEffect( () => {
    (async ()=>{
      if(isSubmit!=undefined && !isSubmit) return;
      const params={
        skip: numShowItems*(page-1),
        limit: numShowItems,
        ...searchCondition
      };

      const [ count, countError ] = await getHouseCount(searchCondition);
      if(countError) {console.log(countError); return;}
      setCount(count);

      const [ data, error ] = await getHouses(params);
      if(error) {console.log(error); return;}
      setHouseData(data);
      if(isSubmit!=undefined)setIsSubmit(false);
    })();
  },[isSubmit, page])
  
  return (
    <>
      {houseData ?
        houseData.map((e, i)=>(
          <HouseCard className="" key={i} data={e} />
        ))
      :
        new Array(numShowItems).fill(0).map((e, i)=>(
          <HouseCardPlaceholder key={i} />
        ))}
      {numShowPages && <Pagination
        numItems={count}
        numShowItems={numShowItems}
        numShowPages={numShowPages}
        />}
    </>);
}