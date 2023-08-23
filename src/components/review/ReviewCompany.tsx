"use client";

import RatingInfo from "./Ratinginfo";
import SatisfactionText from "./RatingSatisfiy";
import ReviewCard from "./ReviewCard";
import ReviewCompanyStyles from "./ReviewCompany.module.css"; // Import the CSS file

type ReviewCompanyProps = {
  title?: string;
  className?: string;
  company: any;
};

export default function ReviewCompany(props: ReviewCompanyProps) {
  const { title, className, company } = props;

  return (
    <div className={`${className ? className : ""} ${ReviewCompanyStyles["card-container"]} shadow rounded-4`}>
      <h5 className="card-title mx-3 my-2 fw-bold">{title}</h5>
      <div className="card-text mx-4 text-white fw-bold">
        <div className="py-2">시공사</div>
        <div className="py-2 fs-2">{company["sigongsa"]}</div>
        <div className="mx-3 pt-2 fs-5">평균평점</div>
        <div className="d-flex mx-3">
          <RatingInfo rating={company["sigongsaRate"]} />
          <div className="d-flex fs-5">
            <SatisfactionText item="소통" text={company["sotong"]}/>
            <SatisfactionText item="가격" text={company["price"]} />
            <SatisfactionText item="시공결과" text={company["sigongResult"]} />
            <SatisfactionText item="일정준수" text={company["dateJunsu"]} />
            <SatisfactionText item="A/S" text={company["as"]} />
          </div>
        </div>

        {<>{
          company["constructor"].map((constructor: any)=>{
            return (
              <ReviewCard>
                <div className="d-flex justify-content-between">
                  <div>건축진행</div>
                  <div>{constructor["location"]}, {constructor["type"]}</div>
                </div>
                <RatingInfo rating={constructor["rate"]} />
                {constructor["description"]}
              </ReviewCard> 
            )
          })
        }</>}


      </div>
    </div>
  );
}
