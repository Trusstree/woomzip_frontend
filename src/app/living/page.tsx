import { LivingCardList } from "@/components/living/LivingCardList";
import React from "react";
import { isBrowser, isMobile } from "react-device-detect";


export default function Living() {
  return (
    <main>
        {isBrowser &&
          <div style={{width:"90%", maxWidth:"1300px", margin:"0 auto"}}>
            <div style={{ width: "500px", fontSize: "33px", fontWeight: "600", margin: "70px 0" }}>
              <span style={{ color: "#314FC0" }}>무료로</span> 새로운 삶을 경험해보세요
            </div>
            <div className="container" style={{width:"100%", marginLeft:"0", overflow:"hidden", padding:"0", position:"relative"}}>
              <div className="row" style={{width:"auto%", marginLeft:"0", height:"80px"}}>
                <div className="btn" style={{width:"auto"}}>
                  <div style={{width:"65px", height:"37px"}}>
                    <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"} width={30}></img>
                  </div>
                  <div style={{fontSize:"15px"}} >
                    전체
                  </div>
                </div>
                <div className="btn" style={{width:"auto"}}>
                  <div style={{width:"65px", height:"37px"}}>
                    <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/pavilion.png"} width={30}></img>
                  </div>
                  <div style={{fontSize:"15px"}}>
                    숙소
                  </div>
                </div>
                <div className="btn" style={{width:"auto"}}>
                  <div style={{width:"65px", height:"37px"}}>
                    <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/tour.png"} width={30}></img>
                  </div>
                  <div style={{fontSize:"15px"}}>
                    투어
                  </div>
                </div>
              </div>
              <div style={{width:"auto", position: "absolute", top: 0, right:0, borderLeft:"2px solid gray", backgroundColor:"white"}}>
                <input
                  style={{width:"300px", marginLeft:"20px", height:"40px"}}
                  placeholder={" 찾고 싶은 내용을 검색해보세요"}/>
                <div className="btn"
                style={{width:"100px", backgroundColor:"white", borderRadius:"0"}}
                data-bs-toggle="modal"
                data-bs-target={`#search_modal`}>
                  <div style={{width:"70px", height:"37px"}}>
                    <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/fillter.png"} width={30}></img>
                  </div>
                  <div style={{fontSize:"15px"}} >
                    필터
                  </div>
                </div>
              </div>      
          </div>
            <div style={{margin:"20px 0"}}>
              <LivingCardList />
            </div>
          </div>
        }

        {isMobile && (
          <div style={{ width: "101vw", marginLeft: "-4vw", overflow: "hidden" }}>
            <div
              style={{
                width: "100%",
                fontSize: "20px",
                fontWeight: "600",
                margin: "30px 0 20px 0",
                paddingLeft: "4vw",
              }}
            >
              <span style={{ color: "#314FC0" }}>무료로</span> 새로운 삶을 경험해보세요
            </div>
            <div style={{ width: "97%" }}>
              <LivingCardList />
            </div>
          </div>
        }
    </main>
  );
}
