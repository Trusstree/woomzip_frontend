// 평점 8 / 10

import React from "react";
import "./Ratinginfo.css"; // Import the CSS file

interface RatingInfoProps {
  rating: number; // Optional prop for the rating value
}

export default function RatingInfo({ rating }: RatingInfoProps) {
  return (
    <div className="rating">
      <span
        style={{ fontSize: "30px", color: "green" }}
      >
        {rating}
      </span>
      <span className="rating-divider" style={{ marginRight : "300px"}}>/ 10</span>
    </div>
  );
}
