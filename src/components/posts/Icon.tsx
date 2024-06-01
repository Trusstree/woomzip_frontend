"use client";

import useQuery from "@/hooks/useQuery";
import { usePathname, useRouter } from "next/navigation";
import { CSSProperties } from "react";

type IconProps = {
  title?:string;
  param?: string;
  className?: string;
  style?: CSSProperties;
  type?: string;
  name?: string;
  data?: {};
  setData?: {};
  value?: string;
};

export default function Icon(props: IconProps) {
  const router = useRouter();
  const { title, className, param, style, type, value, name, data, setData } = props;
  const { createQueryString } = useQuery();
  const pathname = usePathname();

  return (
    <div className={`${className ? className : ""}`} style={{ width: "90px" }}>
      <button
        type="button"
        style={{ ...style,
            fontWeight:"400",
            fontSize:"17px",
        }}
        className={`btn rounded-lg`}
        onClick={() => {
          router.push(`${pathname}?${createQueryString("category", param)}`);
        }}
      >
      {title}
      </button>
    </div>
  );
}
