"use client";

import { getHouse } from "@/actions/apis/HouseAPI";
import { useEffect, useState } from "react";
import { parseSpecificationInfo } from "@/lib/parseUtil";
import HouseExpl from "@/app/house/[pid]/_components/HouseExpl";
import HouseRemocon from "@/app/house/[pid]/_components/HouseRemocon";
import styles from "./_css/HouseClient.module.css";

type HouseComponentProps = {
  pid: number;
};

export function HouseClient(props: HouseComponentProps) {
  const { pid } = props;
  const [houseData, setHouseData] = useState(undefined);
  const [imageData, setImageData] = useState(undefined);
  const [optionData, setOptionData] = useState(undefined);
  const [deliveryData, setDeliveryData] = useState(undefined);
  const [specificationData, setSpecificationData] = useState(undefined);

  const modelLink = "https://forms.gle/Qdq1HgPvcB76sRAW7";

  // house
  useEffect(() => {
    (async () => {
      const [data, error] = await getHouse(pid);
      if (error) {
        console.error(error);
        return;
      }

      const JSONSpecificityInfo = JSON.parse(
        data.data[0]["house_info"]["specificity_info"]
      );
      const asdf = [];
      if (JSONSpecificityInfo["default"])
        asdf.push(JSONSpecificityInfo["default"]);
      if (JSONSpecificityInfo["etc"]) asdf.push(JSONSpecificityInfo["etc"]);
      setHouseData({
        ...data.data[0]["house_info"],
        specificity_info: asdf.join(", "),
      });
      setImageData(data.data[0]["house_image"]);
      setOptionData(data.data[0]["option_info"]);
      setSpecificationData(
        parseSpecificationInfo(data.data[0]["house_info"]["specification_info"])
      );
      setDeliveryData(
        JSON.parse(data.data[0]["house_info"]["delivery_unavailable"]).join(
          ", "
        )
      );
    })();
  }, []);

  return houseData ? (
    <>
      <main>
        <div
          className="row"
          style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}
        >
          <div style={{ fontSize: "28px", fontWeight: "500" }}>찾아보기</div>
          <div
            className="row g-2"
            style={{ width: "100%", position: "relative" }}
          >
            <div className="col-6">
              <div
                style={{ borderRadius: "10px 0 0 10px", overflow: "hidden" }}
              >
                <img
                  className={styles.mainImg}
                  src={imageData["representative_images"][0]}
                />
              </div>
            </div>
            <div className="col-3">
              <div style={{ height: "50%", overflow: "hidden" }}>
                <img
                  className={styles.subImg}
                  src={imageData["external_images"][0]}
                />
              </div>
              <div
                style={{ height: "50%", marginTop: "4px", overflow: "hidden" }}
              >
                <img
                  className={styles.subImg}
                  src={imageData["external_images"][1]}
                />
              </div>
            </div>
            <div className="col-3">
              <div
                style={{
                  height: "50%",
                  overflow: "hidden",
                  borderRadius: "0 10px 0 0",
                }}
              >
                <img
                  className={styles.subImg}
                  src={imageData["internal_images"][0]}
                />
              </div>
              <div
                style={{
                  height: "50%",
                  marginTop: "4px",
                  overflow: "hidden",
                  borderRadius: "0 0 10px 0",
                }}
              >
                <img
                  className={styles.subImg}
                  src={imageData["internal_images"][1]}
                />
              </div>
            </div>
            <div
              className="btn"
              style={{
                position: "absolute",
                right: "25px",
                bottom: "15px",
                backgroundColor: "white",
                opacity: "0.7",
                width: "150px",
              }}
            >
              <div className="d-flex justify-content-between">
                <div style={{ width: "30px" }}>
                  <img
                    src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
                    style={{ width: "25px" }}
                  />
                </div>
                <div style={{ width: "auto", marginTop: "2px" }}>
                  사진 전체보기
                </div>
              </div>
            </div>
          </div>

          <div className="g-3 row w-100">
            <div className="col-8">
              <HouseExpl
                pid={pid}
                deliveryData={deliveryData}
                houseData={houseData}
                specificationData={specificationData}
                optionData={optionData}
              />
            </div>

            <div className="col-4">
              <HouseRemocon
                pid={pid}
                houseData={houseData}
                optionData={optionData}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  ) : (
    <div>로딩 중</div>
  );
}
