"use client";

import useQuery from "@/hooks/useQuery";
import { arraySort } from "@/lib/functionUtil";
import { cardPriceText } from "@/lib/stringUtil";
import { useRouter } from "next/navigation";

const dict = {
  q: "검색어",
  min_price: "최소 가격",
  max_price: "최대 가격",
  floor_area_min: "최소 평수",
  floor_area_max: "최대 평수",
  room_count: "방 개수",
  toilet_count: "화장실 개수",
  floor_count: "층 수",
  specificity: "특이사항",
  frame: "골조구조",
  estimate_duration: "제작 소요기간",
  warranty: "AS 보증기간",
};

function parseValue(name, value) {
  if (name == "min_price") return cardPriceText(value);
  if (name == "max_price") return cardPriceText(value);
  if (name == "floor_area_min") return arraySort(value) + "평";
  if (name == "floor_area_max") return value + "평";
  if (name == "room_count") return arraySort(value.split(",")) + "개";
  if (name == "toilet_count") return arraySort(value.split(",")) + "개";
  if (name == "floor_count") return arraySort(value.split(",")) + "층";
  if (name == "estimate_duration") return value + "개월 이하";
  if (name == "warranty") return Math.round(value / 12) + "년 이상";
  return value;
}

export default function FilterBadge({ name, value }) {
  const router = useRouter();
  const { createQuery, getRouteParams } = useQuery();

  const handleClick = () => {
    createQuery(name);
    router.push(getRouteParams());
  };

  return (
    <div className="mx-1 d-flex badge rounded-pill text-bg-secondary align-items-center">
      <span className="mx-1">
        {dict[name] ? dict[name] : name}: {parseValue(name, value)}
      </span>
      <div className="py-0 btn btn-sm shadow-none" style={{ border: "none" }} onClick={handleClick}>
        X
      </div>
    </div>
  );
}
