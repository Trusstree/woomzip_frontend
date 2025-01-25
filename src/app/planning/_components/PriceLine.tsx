"use client";

import { simplePriceText } from "@/lib/stringUtil";

export default function PriceLine({ title, minPrice, maxPrice }) {
  return (
    <div className="d-flex justify-content-between" style={{ lineHeight: "35px" }}>
      <div style={{ fontSize: "16px", fontWeight: "500" }}>{title}</div>
      <div style={{ fontSize: "14px" }}>
        {simplePriceText(minPrice)}~{simplePriceText(maxPrice)}
      </div>
    </div>
  );
}
