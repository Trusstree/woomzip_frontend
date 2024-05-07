"use client";

import { Children } from "@/types/props";
import { CSSProperties } from "react";

type CollapsingButtonProps = {
  collapsedId: string;
  children: Children;
  className?: string;
  style?: CSSProperties;
};

export default function CollapsingButton(props: CollapsingButtonProps) {
  const { collapsedId, children, className, style } = props;
  return (
    <button
      type="button"
      style={{ ...style, color: "#101648" }}
      className={`${className ? className : ""} px-4 py-2 btn rounded-lg fw-bold`}
      data-bs-toggle="collapse"
      data-bs-target={`#${collapsedId}`}
      aria-controls={`${collapsedId}`}
      aria-expanded="false"
    >
      {children}
    </button>
  );
}
