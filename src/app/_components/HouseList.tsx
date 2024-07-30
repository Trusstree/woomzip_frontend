import { getHouses } from "@/actions/apis/houseAPI";
import HouseCard from "@/components/house/HouseCard";

async function loadData(numShowItems: number) {
  const params = { skip: 1, limit: numShowItems };
  const [rawHouseData, houseError] = await getHouses(params);

  if (houseError) {
    console.error(houseError);
    return undefined;
  }

  return rawHouseData.data[0].houses;
}

export default async function AppHouseList({ numShowItems }) {
  const houseData = await loadData(numShowItems);
  return (
    <div
      className="row flex-nowrap overflow-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {houseData?.map((e, i) => <HouseCard key={i} data={e} className={"col-11"} />)}
    </div>
  );
}
