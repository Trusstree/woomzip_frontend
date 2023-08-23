"use client";
// ReviewCard.tsx
import { Children } from "@/type/props";
import ReviewCardStyles from "./ReviewCard.module.css"; // Import the CSS file

type ReviewCardProps = {
  title?: string;
  children?: Children;
};

export default function ReviewCard(props: ReviewCardProps) {
  const { title, children } = props;

  return (
    <div className={`${ReviewCardStyles["card-container"]}`}>
      <div className={`${ReviewCardStyles.contentContainer} mx-3`}>
        {children}
      </div>
    </div>
  );
}
