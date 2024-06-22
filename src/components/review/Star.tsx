"use client";

import "@/components/review/Star.css";
import { AiFillStar } from "react-icons/ai";

// 별점 컴포넌트.tsx
export const Star = ({ star, onStarClick }) => {
  const starArray = [1, 2, 3, 4, 5];
  // true의 개수를 점수로 환산
  const clicked = [1, 1, 1, 1, 1];

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
      <p className={"ratingTxt"}>{star}</p>
    </div>
  );
};
