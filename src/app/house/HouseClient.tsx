"use client";

import PostMenu from "@/components/posts/PostMenu";
import { HouseList } from "@/components/house/HouseList";
import { useEffect, useState } from "react";
import usePage from "@/hooks/usePage";
import { getHouses } from "@/actions/apis/HouseAPI";
import { arraySort } from "@/lib/functionUtil";
import { SearchModal } from "@/app/house/_components/SearchModal";
import HouseCategory from "@/app/house/HouseCategory";

export default function Home() {
  const { page } = usePage();
  const [searchCondition, setSearchCondition] = useState({});
  const [isSubmit, setIsSubmit] = useState(true);
  const [numShowItems, numShowPages] = [24, 10];
  const [houseData, setHouseData] = useState([] as Array<any>);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      if (isSubmit != undefined && !isSubmit) return;

      const sCondition = {
        q: searchCondition["q"],
        price_min: searchCondition["price"]?.[0],
        price_max: searchCondition["price"]?.[1],
        floor_area_min: searchCondition["floor_area"]?.[0],
        floor_area_max: searchCondition["floor_area"]?.[1],
        room_count: arraySort(searchCondition["room_count"]),
        toilet_count: arraySort(searchCondition["toilet_count"]),
        floor_count: arraySort(searchCondition["floor_count"]),
        warranty: searchCondition["warranty"],
        estimate_duration: searchCondition["estimate_duration"],
        frame: arraySort(searchCondition["frame"]),
        specificity: arraySort(searchCondition["specificity"]),
        model: searchCondition["model"] == 1 ? 1 : undefined,
      };

      for (const key in sCondition) {
        if (!sCondition.hasOwnProperty(key)) {
          delete sCondition[key];
        } else if (!sCondition[key] || sCondition[key].length == 0) {
          delete sCondition[key];
        }
      }

      const params = {
        skip: sCondition ? 1 : numShowItems * (page - 1) + 1,
        limit: numShowItems,
        ...sCondition,
      };

      const [data, error] = await getHouses(params);
      if (error) {
        console.error(error);
        return;
      }

      setHouseData(data.data[0].houses);
      setCount(data.data[0].total_count);
      if (isSubmit != undefined) setIsSubmit(false);
    })();
  }, [isSubmit]);

  return (
    <>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div
          style={{
            width: "100%",
            fontSize: "33px",
            fontWeight: "600",
            margin: "70px 0",
            wordBreak: "keep-all",
          }}
        >
          <span style={{ color: "#314FC0" }}>움집</span>에서 가장 쉽고 빠른 집
          찾기
        </div>

        <div
          className="container"
          style={{
            width: "100%",
            marginLeft: "0",
            marginBottom: "40px",
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
              height: "70px",
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
            <div style={{ width: "70px", height: "37px" }}>
              <img
                src={
                  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/fillter.png"
                }
                width={30}
              ></img>
            </div>
            <div style={{ fontSize: "15px" }}>필터</div>
          </div>
        </div>
        <SearchModal
          data={searchCondition}
          setData={setSearchCondition}
          setIsSubmit={setIsSubmit}
        />
        <PostMenu title={""}>
          <HouseList
            numShowItems={numShowItems}
            numShowPages={numShowPages}
            houseData={houseData}
            count={count}
          />
        </PostMenu>
      </div>
    </>
  );
}
