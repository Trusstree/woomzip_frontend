"use client";

import { useRouter } from "next/navigation";
import useQuery from "@/hooks/useQuery";

export default function FillteringButton({ title, type, value, name }) {
  const router = useRouter();
  const { createQuery, getParams, getRouteParams } = useQuery();

  const handleClick = () => {
    const _value = typeof value == "number" ? value.toString() : value;
    if (type === "select") {
      let newValue = getParams().get(name)?.split(",");
      if (!newValue) {
        newValue = [_value];
      } else if (newValue.includes(_value)) {
        const ind = newValue.indexOf(_value);
        newValue = newValue.filter((_, i) => i !== ind);
      } else {
        newValue = [...newValue, _value];
      }
      createQuery(name, newValue.join(","));
      router.replace(getRouteParams());
    } else {
      createQuery(name, _value);
      router.replace(getRouteParams());
    }
  };

  return (
    <div className="col-3">
      <div
        onClick={handleClick}
        className="btn"
        style={{
          cursor: "pointer",
          width: "100%",
          borderRadius: "20px",
          borderStyle: "solid",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor:
            getParams().get(name) == value ||
            (type === "select" && getParams().get(name)?.includes(value))
              ? "#314FC0"
              : "white",
          borderWidth: "1px",
          borderColor:
            getParams().get(name) == value ||
            (type === "select" && getParams().get(name)?.includes(value))
              ? "#314FC0"
              : "gray",
          color:
            getParams().get(name) == value ||
            (type === "select" && getParams().get(name)?.includes(value))
              ? "white"
              : "black",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: "500",
              wordBreak: "keep-all",
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <MobileView
        className="btn"
        style={{
          width: "40px", // 모바일에서 가로폭을 다르게 설정
          height: "35px",
          padding: "0",
          margin: "2px",
          borderRadius: "10px",
          borderStyle: "solid",
          textAlign: "center",
          backgroundColor:
            data[name] === value || (type === "select" && data[name]?.includes(value)) ? "#F5F7FF" : "white",
          borderWidth: "2px",
          borderColor: data[name] === value || (type === "select" && data[name]?.includes(value)) ? "#314FC0" : "gray",
        }}
      >
        <div onClick={handleClick} style={{ fontSize: "15px", fontWeight: "400", color: "gray", marginTop: "4px" }}>
          {title}
        </div>
      </MobileView> */
}
