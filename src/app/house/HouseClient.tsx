"use client";

import PostMenu from "@/components/posts/PostMenu";
import { HouseList } from "@/components/house/HouseList";
import { useEffect, useState } from "react";
import usePage from "@/hooks/usePage";
import { getHouses } from "@/actions/apis/HouseAPI";
import { isBrowser } from "react-device-detect";
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
      {isBrowser && (
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <div
            style={{
              width: "510px",
              fontSize: "33px",
              fontWeight: "600",
              margin: "70px 0",
              padding: "0",
            }}
          >
            <span style={{ color: "#314FC0" }}>움집</span>에서 가장 쉽고 빠르게 우리 집 찾기
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
                <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/fillter.png"} width={30}></img>
              </div>
              <div style={{ fontSize: "15px" }}>필터</div>
            </div>
          </div>
          <SearchModal data={searchCondition} setData={setSearchCondition} setIsSubmit={setIsSubmit} />
          <PostMenu title={""}>
            <HouseList numShowItems={numShowItems} numShowPages={numShowPages} houseData={houseData} count={count} />
          </PostMenu>
        </div>
      )}
    </>
  );
}

{
  /* {isMobile && (
        <div style={{ width: "101vw", marginLeft: "-4vw", overflow: "hidden" }}>
          <div style={{ width: "102vw" }}>
            <div
              style={{
                width: "100%",
                fontSize: "20px",
                fontWeight: "600",
                margin: "30px 0 20px 0",
                paddingLeft: "4vw",
              }}
            >
              <span style={{ color: "#314FC0" }}>움집</span>에서 가장 쉽고 빠르게 내 집 찾기
            </div>
            <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="row" style={{ width: "100%", marginLeft: "1%" }}>
                <div style={{ width: "100%", marginBottom: "10px" }}>
                  <SearchBox name={"q"} setData={setSearchCondition} setIsSubmit={setIsSubmit} />
                </div>
                <div style={{ width: "38vw" }}>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      marginLeft: "5px",
                    }}
                  >
                    방
                  </div>
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
                <div style={{ width: "28vw" }}>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      marginLeft: "5px",
                    }}
                  >
                    화장실
                  </div>
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
                <div style={{ width: "14vw" }}>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      marginLeft: "5px",
                    }}
                  >
                    조건
                  </div>
                  <button
                    style={{
                      width: "50px",
                      height: "35px",
                      padding: "0",
                      margin: "3px",
                      borderRadius: "10px",
                      borderStyle: "solid",
                      backgroundColor: "white",
                      borderWidth: "2px",
                      borderColor: "gray",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target={`#search_modal`}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "gray",
                      }}
                    >
                      필터링
                    </div>
                  </button>
                  <SearchModal data={searchCondition} setData={setSearchCondition} setIsSubmit={setIsSubmit} />
                </div>
                <div style={{ width: "20vw" }}>
                  <ResetButton
                    img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
                    setData={setSearchCondition}
                    setIsSubmit={setIsSubmit}
                  />
                </div>
              </div>
            </div>
            <HouseList numShowItems={numShowItems} numShowPages={numShowPages} houseData={houseData} count={count} />
          </div>
        </div>
      )} */
}
