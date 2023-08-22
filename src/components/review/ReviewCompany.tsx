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
      {title && <h5 className="card-title mx-3 my-2 fw-bold">{title}</h5>}
      <div className="card-text mx-3">
        <span style={{ color: "white" }}>
          <p>시공사</p>
          <p style={{ fontSize: "30px" }}>{company["sigongsa"]}</p>
          <p>평균평점</p>
          <span style={{display: "flex" }}>
            <RatingInfo rating={company["sigongsaRate"]} />
            <div className="d-flex">
              <SatisfactionText item="소통" text={company["sotong"]}/>
              <SatisfactionText item="가격" text={company["price"]} />
              <SatisfactionText item="시공결과" text={company["sigongResult"]} />
              <SatisfactionText item="일정준수" text={company["dateJunsu"]} />
              <SatisfactionText item="A/S" text={company["as"]} />
            </div>
          </span>
        </span>

        {<>{
          company["building"].map((building: any)=>{
            return (
              <ReviewCard>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <p>건축진행</p>
                  <p>{building["location"]}, {building["type"]}</p>
                </span>
                <RatingInfo rating={building["rate"]} />
                {building["description"]}
              </ReviewCard> 
            )
          })
        }</>}


      </div>
    </div>
  );
}
