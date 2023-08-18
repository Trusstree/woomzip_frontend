// RatingBox.tsx

import React from "react";
import "./RatingBox.css"; // Import the CSS file

export default function RatingBox() {
  return (
    <div className="rating-box">
      <div className="rating-info">
        <span className="rating-label">평균 점수</span>
        <span className="rating-value">8.5</span>
        <span className="rating-divider">/ 10</span>
      </div>
      <hr className="divider" />
    </div>
  );
}
