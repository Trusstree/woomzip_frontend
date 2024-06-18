import CategoryButton from "@/components/CategoryButton";
import { LivingCardList } from "@/components/living/LivingCardList";
import SearchComponent from "@/components/SearchComponent";
import React from "react";
import { isBrowser, isMobile } from "react-device-detect";

export default function Living() {
  return (
    <main>
      {isBrowser && (
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <div style={{ width: "500px", fontSize: "33px", fontWeight: "600", margin: "70px 0" }}>
            <span style={{ color: "#314FC0" }}>무료로</span> 새로운 삶을 경험해보세요
          </div>
          <div
            className="container"
            style={{ width: "100%", marginLeft: "0", overflow: "hidden", padding: "0", position: "relative" }}
          >
            <div className="row" style={{ width: "auto%", marginLeft: "0", height: "80px" }}>
              <CategoryButton
                title={"전체"}
                imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
              />
              <CategoryButton
                title={"숙소"}
                imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/pavilion.png"}
                category={"숙소"}
              />
              <CategoryButton
                title={"투어"}
                imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/tour.png"}
                category={"투어"}
              />
              <SearchComponent />
            </div>
            <div style={{ margin: "50px 0" }}>
              <LivingCardList numShowItems={4} />
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div style={{ width: "101vw", marginLeft: "-4vw", overflow: "hidden" }}>
          <div
            style={{ width: "100%", fontSize: "20px", fontWeight: "600", margin: "30px 0 20px 0", paddingLeft: "4vw" }}
          >
            <span style={{ color: "#314FC0" }}>무료로</span> 새로운 삶을 경험해보세요
          </div>
          <div style={{ width: "97%" }}>
            <LivingCardList numShowItems={4} />
          </div>
        </div>
      )}
    </main>
  );
}
