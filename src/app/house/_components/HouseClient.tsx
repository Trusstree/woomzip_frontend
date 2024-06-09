"use client";

import PostMenu from "@/components/posts/PostMenu";
import { HouseList } from "@/components/house/HouseList";
import { useEffect, useState } from "react";
import SearchBox from "@/app/house/_components/SearchBox";
import FillteringButton from "@/app/house/_components/FillteringButton";
import ResetButton from "@/app/house/_components/ResetButton";
import { SearchModal } from "@/app/house/_components/SearchModal";
import { useRouter } from "next/navigation";
import usePage from "@/hooks/usePage";
import { getHouses } from "@/apis/HouseAPI";

export default function Home() {
  const router = useRouter();
  const { page } = usePage();
  const [searchCondition, setSearchCondition] = useState({});
  const [isSubmit, setIsSubmit] = useState(true);
  const [numShowItems, numShowPages] = [24, 10];
  const [houseData, setHouseData] = useState([] as Array<any>);
  const [count, setCount] = useState(0);

  const arraySort = (arr: Array<number | string>) => {
    if (!arr?.length) return arr;
    if (arr.length == 0) return "";
    if (typeof arr[0] == "string") return arr.sort().join(",");
    return arr.sort((a: number, b: number) => a - b).join("");
  };

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
      <div style={{ width: "500px", fontSize: "38px", fontWeight: "600", margin: "120px 0 80px 0" }}>
        우리 가족을 위한 집,
        <br />
        트러스에서 찾아보세요
      </div>
      <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="row" style={{ width: "1100px" }}>
          <div style={{ width: "380px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>검색바</div>
            <SearchBox name={"q"} setData={setSearchCondition} setIsSubmit={setIsSubmit} />
          </div>
          <div style={{ width: "290px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>방</div>
            <FillteringButton
              title={"1개"}
              value={1}
              name={"room_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
              setIsSubmit={setIsSubmit}
            />
            <FillteringButton
              title={"2개"}
              value={2}
              name={"room_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
              setIsSubmit={setIsSubmit}
            />
            <FillteringButton
              title={"3개"}
              value={3}
              name={"room_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
              setIsSubmit={setIsSubmit}
            />
          </div>
          <div style={{ width: "200px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>화장실</div>
            <FillteringButton
              title={"1개"}
              value={1}
              name={"toilet_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
              setIsSubmit={setIsSubmit}
            />
            <FillteringButton
              title={"2개"}
              value={2}
              name={"toilet_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
              setIsSubmit={setIsSubmit}
            />
          </div>
          <div style={{ width: "120px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>상세검색 </div>
            <button
              style={{
                width: "80px",
                height: "40px",
                borderRadius: "10px",
                borderStyle: "solid",
                margin: "3px",
                backgroundColor: "white",
                borderWidth: "2px",
                borderColor: "gray",
              }}
              data-bs-toggle="modal"
              data-bs-target={`#search_modal`}
            >
              <div style={{ fontSize: "13px", fontWeight: "600" }}>필터링</div>
            </button>
            <SearchModal data={searchCondition} setData={setSearchCondition} setIsSubmit={setIsSubmit} />
          </div>
        </div>
        <div style={{ width: "100px" }}>
          <div style={{ margin: "0 10px", fontWeight: "600" }}>초기화 </div>
          <ResetButton
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
            setData={setSearchCondition}
            setIsSubmit={setIsSubmit}
          />
        </div>
      </div>

      <PostMenu title={""}>
        <HouseList numShowItems={numShowItems} numShowPages={numShowPages} houseData={houseData} count={count} />
      </PostMenu>
    </>
  );
}
