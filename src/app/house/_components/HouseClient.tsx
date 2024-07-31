"use client";

import PostMenu from "@/components/posts/PostMenu";
import { HouseList } from "@/components/house/HouseList";
import { useEffect, useState } from "react";
import usePage from "@/hooks/usePage";
import { getHouses } from "@/actions/apis/houseAPI";
import { arrayMin, arraySort } from "@/lib/functionUtil";
import { SearchModal } from "@/app/house/_components/SearchModal";
import HouseCategory from "@/app/house/_components/HouseCategory";
import useQuery from "@/hooks/useQuery";
import { useSearchParams } from "next/navigation";
import SearchComponent from "@/components/SearchComponent";
import BadgeList from "@/app/house/_components/BadgeList";

export default function Home() {
  const { page } = usePage();
  const [numShowItems, numShowPages] = [24, 10];
  const [houseData, setHouseData] = useState([] as Array<any>);
  const [count, setCount] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      const searchCondition = {
        q: searchParams.get("q"),
        price_min: searchParams.get("min_price"),
        price_max: searchParams.get("max_price"),
        floor_area_min: searchParams.get("floor_area_min"),
        floor_area_max: searchParams.get("floor_area_max"),
        room_count: Number(
          arraySort(
            searchParams
              .get("room_count")
              ?.split(",")
              .map((e) => Number(e))
          )
        ),
        toilet_count: Number(
          arraySort(
            searchParams
              .get("toilet_count")
              ?.split(",")
              .map((e) => Number(e))
          )
        ),
        floor_count: Number(
          arraySort(
            searchParams
              .get("floor_count")
              ?.split(",")
              .map((e) => Number(e))
          )
        ),
        warranty: Number(
          arrayMin(
            searchParams
              .get("warranty")
              ?.split(",")
              .map((e) => Number(e))
          )
        ),
        estimate_duration: Number(
          arrayMin(
            searchParams
              .get("estimate_duration")
              ?.split(",")
              .map((e) => Number(e))
          )
        ),
        frame: arraySort(searchParams.get("frame")?.split(",")),
        specificity: arraySort(searchParams.get("specificity")?.split(",")),
        model: searchParams.get("model") == "1" ? 1 : undefined,
      };

      for (const key in searchCondition) {
        if (!searchCondition.hasOwnProperty(key)) {
          delete searchCondition[key];
        } else if (!searchCondition[key] || searchCondition[key].length == 0) {
          delete searchCondition[key];
        }
      }

      const params = {
        skip: searchCondition ? 1 : numShowItems * (page - 1) + 1,
        limit: numShowItems,
        ...searchCondition,
      };

      const [data, error] = await getHouses(params);
      if (error) {
        console.error(error);
        return;
      }

      setHouseData(data.data[0].houses);
      setCount(data.data[0].total_count);
    })();
  }, [searchParams]);

  return (
    <>
      <div
        className="container"
        style={{
          width: "100%",
          marginLeft: "0",
          marginBottom: "28px",
          overflow: "hidden",
          padding: "0",
          position: "relative",
        }}
      >
        <HouseCategory />
        <div
          className="btn"
          style={{
            width: "auto",
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "white",
            borderLeft: "2px solid gray",
            borderRadius: "0",
          }}
          data-bs-toggle="modal"
          data-bs-target={`#search_modal`}
        >
          <div style={{ width: "28px", height: "32px" }}>
            <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/fillter.png"} width={28}></img>
          </div>
          <div style={{ fontSize: "15px" }}>필터</div>
        </div>
      </div>
      <BadgeList />
      <SearchModal />

      <PostMenu>
        <HouseList numShowItems={numShowItems} numShowPages={numShowPages} houseData={houseData} count={count} />
      </PostMenu>
    </>
  );
}
