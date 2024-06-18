"use client";

import Pagination from "../Pagination";
import HouseCardPlaceholder from "./HouseCardPlaceholder";
import HouseCard from "./HouseCard";

type HousePostProps = { 
  houseData: any[];
  count: number;
  numShowItems: number;
  numShowPages?: number;
};

export function HouseList({ houseData, count, numShowItems, numShowPages }: HousePostProps) {
  return (
    <>
      {houseData
        ? houseData.map((e, i) => <HouseCard className="" key={i} data={e} />)
        : new Array(numShowItems).fill(0).map((e, i) => <HouseCardPlaceholder key={i} />)}
      {numShowPages && <Pagination numItems={count} numShowItems={numShowItems} numShowPages={numShowPages} />}
    </>
  );
}
