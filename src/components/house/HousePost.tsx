"use client"

import { getHouses } from "@/api/HouseAPI";
import { useEffect, useState } from "react";
import MainPagePost from "../posts/MainPagePost";

type HousePostProps = {
  number: number;
}

export function HousePost(props: HousePostProps) {
  const { number } = props;
  const [houseData, setHouseData] = useState(undefined as any);

  useEffect( () => {
    (async ()=>{
      const { data, error } = await getHouses();
      if(!error) setHouseData(data);
      else console.log(error);

      console.log(houseData.slice(0, number));
    })();
  },[])

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