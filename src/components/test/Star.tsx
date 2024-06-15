"use client"

import "./Star.css";
import { AiFillStar } from "react-icons/ai";

// 별점 컴포넌트.tsx 
export const Star = ({ clicked, onStarClick }) => {
  const starArray = [0, 1, 2, 3, 4];
  // true의 개수를 점수로 환산
  const rating = clicked.filter(Boolean).length;
  
  return (
    <div className={"stars"}>
      {starArray.map((el) => {
        return (
          <AiFillStar
            fontSize={40}
            key={el}
            id={`star_${el}`}
            onClick={() => onStarClick(el)}
            className={`${clicked[el] && "yellowStars"}`}
          />
        );
      })}
      <p className={"ratingTxt"}>
        {rating === 5
          ? "5.0"
          : rating === 4
          ? "4.0"
          : rating === 3
          ? "3.0"
          : rating === 2
          ? "2.0"
          : rating === 1
          ? "1.0"
          : "0.0"}
      </p>
    </div>
  );
};