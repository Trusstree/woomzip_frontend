"use client";

import AppHouseCard from "@/components/house/AppHouseCard";
import HouseCardPlaceholder from "@/components/house/HouseCardPlaceholder";
import Pagination from "@/components/Pagination";

type HousePostProps = {
  houseData: any[];
  count: number;
  numShowItems: number;
  numShowPages?: number;
};

export function AppHouseList({
  houseData,
  count,
  numShowItems,
  numShowPages,
}: HousePostProps) {
  return (
    <>
      <div
        className="row flex-nowrap overflow-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {houseData
          ? houseData.map((e, i) => (
              <AppHouseCard className="" key={i} data={e} />
            ))
          : new Array(numShowItems)
              .fill(0)
              .map((e, i) => <HouseCardPlaceholder key={i} />)}
        {numShowPages && (
          <Pagination
            numItems={count}
            numShowItems={numShowItems}
            numShowPages={numShowPages}
          />
        )}
      </div>
    </>
  );
}
