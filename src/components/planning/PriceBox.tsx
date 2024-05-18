"use client";
import { useEffect, useState } from "react";
import PriceLine from "./PriceLine";
import { algorithm } from "@/lib/algorithm";

export default function PriceBox({ system, slope, road, city, area, house }) {
  const [delivery, setDelivery] = useState([0, 0]);
  const [permit, setPermit] = useState([0, 0]);
  const [measure, setMeasure] = useState([0, 0]);
  const [grounding, setGrounding] = useState([0, 0]);
  const [foundation, setFoundation] = useState([0, 0]);
  const [insurance, setInsurance] = useState([0, 0]);
  const [tax, setTax] = useState([0, 0]);
  const [total, setTotal] = useState([0, 0]);
  const [price, setPrice] = useState([0]);

  useEffect(() => {
    const res = algorithm({ system: system, slope: slope, road: road, city: city, area: area, house: house });
    setDelivery(res["delivery"]);
    setMeasure(res["measure"]);
    setPermit(res["permit"]);
    setGrounding(res["grounding"]);
    setFoundation(res["foundation"]);
    setInsurance(res["insurance"]);
    setTax(res["tax"]);
    setTotal(res["total"]);
    setPrice(res["price"]);
  }, [system, slope, road, city, area, house]);

  return (
    <div className="container" style={{ borderColor: "white", width: "100%", position: "sticky", bottom: "0" }}>
      <div className="d-flex justify-content-between" style={{ lineHeight: "35px" }}>
        <div style={{ fontSize: "17px", fontWeight: "500" }}>주택가격</div>
        <div>{price[0]}</div>
      </div>
      <PriceLine title={"배송비"} minPrice={delivery[0]} maxPrice={delivery[1]} />
      <PriceLine title={"측량비"} minPrice={measure[0]} maxPrice={measure[1]} />
      <PriceLine title={"인허가비"} minPrice={permit[0]} maxPrice={permit[1]} />
      <PriceLine title={"토목공사비"} minPrice={grounding[0]} maxPrice={grounding[1]} />
      <PriceLine title={"기초공사비"} minPrice={foundation[0]} maxPrice={foundation[1]} />
      <div className="d-flex justify-content-between" style={{ lineHeight: "35px" }}>
        <div style={{ fontSize: "17px", fontWeight: "500" }}>전기, 상하수도 인입비</div>
        <div>토지에 따라 변동</div>
      </div>
      <PriceLine title={"보험비"} minPrice={insurance[0]} maxPrice={insurance[1]} />
      <PriceLine title={"세금"} minPrice={tax[0]} maxPrice={tax[1]} />
      <hr />
      <div className="d-flex justify-content-between" style={{ lineHeight: "35px", margin: "0 0 20px 0" }}>
        <div style={{ fontSize: "17px", fontWeight: "500" }}>총</div>
        <div>
          {total[0]}만원
          <br />~{total[1]}만원
        </div>
      </div>
    </div>
  );
}
