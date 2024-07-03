import { HouseClient } from "./HouseClient";

type PageParams = {
  pid: number;
};

// async function loadData() {
//   "use server";

//   const [rawHouseData, houseError] = await getHouses({ skip: 1, limit: 6 });
//   if (houseError) {
//     console.error(houseError);
//     return;
//   }
//   const [houseData, houseCount] = [rawHouseData.data[0].houses, rawHouseData.data[0].total_count];

//   const JSONSpecificityInfo = JSON.parse(houseData.data[0]["house_info"]["specificity_info"]);
//       const asdf = [];
//       if (JSONSpecificityInfo["default"]) asdf.push(JSONSpecificityInfo["default"]);
//       if (JSONSpecificityInfo["etc"]) asdf.push(JSONSpecificityInfo["etc"]);

//       const asdff={
//         ...houseData.data[0]["house_info"],
//         specificity_info: asdf.join(", "),
//       };

//   return { houseData, houseCount };
// }

export default async function Home({ params }: { params: PageParams }) {
  const { pid } = params;

  return (
    <>
      <HouseClient pid={pid} />
    </>
  );
}
