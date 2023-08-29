import React from "react";

interface RatingInfoProps {
  rating: number;
}

export default function RatingInfo(props: RatingInfoProps) {
  const { rating } = props;

  return (
    <div className="rating fs-5">
      <span className="text-success">{rating}</span>{" / 10"}
    </div>
  );
}
