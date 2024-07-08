import AppHouseCard from "@/components/house/AppHouseCard";
import HouseCardPlaceholder from "@/components/house/HouseCardPlaceholder";
import Pagination from "@/components/Pagination";
import { getHouses } from "@/actions/apis/HouseAPI";

type HousePostProps = {
  houseData: any[];
  count: number;
  numShowItems: number;
  numShowPages?: number;
};

async function loadData() {
  const [rawHouseData, houseError] = await getHouses({ skip: 1, limit: 6 });
  if (houseError) {
    console.error(houseError);
    return;
  }
  const [houseData, houseCount] = [rawHouseData.data[0].houses, rawHouseData.data[0].total_count];
  return { houseData, houseCount };
}

export default async function AppHouseList({ numShowItems, numShowPages }: HousePostProps) {
  const { houseData, houseCount } = await loadData();
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
          ? houseData.map((e, i) => <AppHouseCard className="" key={i} data={e} />)
          : new Array(numShowItems).fill(0).map((e, i) => <HouseCardPlaceholder key={i} />)}
        {numShowPages && <Pagination numItems={houseCount} numShowItems={numShowItems} numShowPages={numShowPages} />}
      </div>
    </>
  );
}
