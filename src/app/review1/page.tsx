import BasicCard from "@/components/BasicCard";
import React from "react";
import SortingButtonStyles from "@/components/forms/SortingButtonsStyles";
import RatingBox from "@/components/forms/RatingBox"; // Adjust the import path

export default function Home() {
  return (
    <main
      className={`container d-flex justify-content-start flex-column align-items-start`}
    >
      <div>
        <h1>Truss</h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScNXPgZ2jTJmEOcZ1Y8Q4_VZKwNro9i6GEbc9bd-W-9Fjwq8A/viewform?usp=sf_link"
            style={{ fontSize: "50px" }}
          >
            <p className="public" style={{ textAlign: "left", opacity: 1 }}>
              <span>후기 쓰기</span>
            </p>
          </a>
          <a
            target="_blank"
            href="https://naver.com"
            style={{ fontSize: "50px" }}
          >
            <p className="public" style={{ textAlign: "right", opacity: 1 }}>
              <span>후기 요청하기</span>
            </p>
          </a>
        </div>
        <div
          style={{
            border: "2px solid #000",
            borderRadius: "10px",
            padding: "10px", // Adjust padding as needed
            display: "inline-block", // Ensure the outer div only takes the necessary width
          }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              placeholder="투자자 검색하기"
              className="sc-hKFyIo bdDYJz"
              style={{
                width: "1000px",
                height: "80px",
                paddingLeft: "15px",
                border: "none",
                fontSize: "25px",
              }}
              value=""
            />
          </div>
        </div>
        <div>
          <SortingButtonStyles />
        </div>

        <div>
          <BasicCard>
            <div>
              <h4>
                <span style={{ color: "#1F74F4" }}>아주IB</span>
              </h4>
              <RatingBox />
            </div>

            <div style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      display: "block",
                      marginLeft: "5px",
                      fontWeight: "bold",
                      color: "rgb(5, 173, 68)",
                      opacity: 0.5,
                    }}
                  >
                    8
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginLeft: "5px",
                      marginRight: "5px",
                      opacity: 0.5,
                    }}
                  >
                    / 10
                  </span>
                  <p
                    className="sc-bkbjAj gDLPQT"
                    style={{ textAlign: "right" }}
                  >
                    투자 협상 진행
                  </p>
                </div>
              </div>
              <div>
                <p className="sc-iemXMA iSPPGk">
                  기본적으로 투자와 사업을 둘 다 해본사람 테가 많이 남. 사업과
                  사업자의 입장을 아주 잘 이해하고 있고 어떤식으로든지 도움을
                  주기 위해 그 누구보다 노력함. 성격이 워낙 좋아서 사람이 무조건
                  좋기만 한것처럼 느낄 수 있는데, 필요할땐 엄청 날카로운 질문과
                  의견을 웃으면서 잘 하셔서 놀랄때가 종종있음. 진심을 다해
                  걱정해주고 도와 주는 투자자를 만나보고 싶다 면 전수석님 꼭
                  추천함.
                </p>
                <div>
                  <button className="sc-dlMBXb hAfEGY">도움이 됩니다</button>
                  <button className="sc-dlMBXb hAfEGY">
                    별로 도움이 안 됩니다
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      display: "block",
                      marginLeft: "5px",
                      fontWeight: "bold",
                      color: "rgb(5, 173, 68)",
                      opacity: 0.5,
                    }}
                  >
                    9
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginLeft: "5px",
                      marginRight: "5px",
                      opacity: 0.5,
                    }}
                  >
                    / 10
                  </span>
                  <p
                    className="sc-bkbjAj gDLPQT"
                    style={{ textAlign: "right" }}
                  >
                    투자 협상 진행
                  </p>
                </div>
              </div>
              <div>
                <p className="sc-iemXMA iSPPGk">
                  기본적으로 투자와 사업을 둘 다 해본사람 테가 많이 남. 사업과
                  사업자의 입장을 아주 잘 이해하고 있고 어떤식으로든지 도움을
                  주기 위해 그 누구보다 노력함. 성격이 워낙 좋아서 사람이 무조건
                  좋기만 한것처럼 느낄 수 있는데, 필요할땐 엄청 날카로운 질문과
                  의견을 웃으면서 잘 하셔서 놀랄때가 종종있음. 진심을 다해
                  걱정해주고 도와 주는 투자자를 만나보고 싶다 면 전수석님 꼭
                  추천함.
                </p>
                <div>
                  <button className="sc-dlMBXb hAfEGY">도움이 됩니다</button>
                  <button className="sc-dlMBXb hAfEGY">
                    별로 도움이 안 됩니다
                  </button>
                </div>
              </div>
            </div>
          </BasicCard>
        </div>
      </div>

      {/* <Footer page={"세부내역 작성"} url={"/service6"} /> */}
    </main>
  );
}
