"use client"

import BasicCard from "./Card";

type CardProps = {
  className?: string;
}

export default function HorizontalScroll(props: CardProps) {
  return (
    <div className="container h-[100px]">
      <div className="row">
        <BasicCard />
        <BasicCard />
        <BasicCard />
        <BasicCard />
      </div>
    </div>
  );
}