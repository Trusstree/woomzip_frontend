"use client"

import { getHouses } from "@/api/HouseAPI";
import { useEffect, useState } from "react";
import MainPagePost from "../posts/MainPagePost";

export function HousePost() {
  const [houseData, setHouseData] = useState(undefined as any);

  useEffect( () => {
    (async ()=>{
      const { data, error } = await getHouses();
      if(!error) setHouseData(data);
      else console.log(error);

      console.log(houseData);
    })();
  },[])

  return (
    <div className="d-flex justify-content-center">
      {houseData?houseData.map((e, i)=>{
        return (
        <MainPagePost
          key={i}
          url={`/${e.id}`}
          src={e.image}>
          {e.title}
        </MainPagePost>
        )
      }):undefined}
      
    </div>
  );
}