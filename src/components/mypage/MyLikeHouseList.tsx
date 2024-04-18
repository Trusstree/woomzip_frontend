"use client"

import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Pagination from "../Pagination";
import HouseCardPlaceholder from "../house/HouseCardPlaceholder";
import HouseCard from "../house/HouseCard";
import { getLikeHouses } from "@/apis/Mypage";

type HousePostProps = {
  session: any
  numShowItems: number
  numShowPages?: number
  searchCondition: {}
  isSubmit?: boolean
  setIsSubmit?: Dispatch<SetStateAction<{}>>
}

export function MyLikeHouseList(props: HousePostProps) {
  const { session, numShowItems, numShowPages, searchCondition, isSubmit, setIsSubmit } = props;
  const searchParams = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = (rawPage>0)?rawPage:1;
  const [houseData, setHouseData] = useState([] as Array<any>);
  const [count, setCount] = useState(0);

  useEffect( () => {
    (async ()=>{
      if(isSubmit!=undefined && !isSubmit) return;
      const params={
        skip: numShowItems*(page-1)+1,
        limit: numShowItems,
        ...searchCondition
      };

      const [ data, error ] = await getLikeHouses(params, session.user.accessToken);
      if(error) {console.error(error); return;}
      setHouseData(data.data[0]);
      setCount(data.data[0]);
      console.log(data.data);
      if(isSubmit!=undefined) setIsSubmit(false);
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