import { LivingCardList } from "@/components/living/LivingCardList";
import React from "react";

export default function About() {
  return (
    <main>
      <div className="container" style={{ height: "700px", backgroundColor: "gray" }}>
        <div style={{ fontSize: "60px", padding: "200px 0 80px 0", fontWeight: "600", textAlign: "center" }}>
          자연으로 가는 길
          <br />
          트러스와 쉽고 간편하게
        </div>
      </div>
      <div className="container" style={{ height: "400px", backgroundColor: "lightgray" }}>
        <div style={{ fontSize: "30px", padding: "110px 0 80px 0", fontWeight: "600", textAlign: "center" }}>
          어렵기만 했던 내 집 짓기
          <br />
          이제는 트러스가 함께하겠습니다.
          <br />
          새로운 삶의 동반자
        </div>
      </div>
      <div className="container" style={{ height: "600px", backgroundColor: "lightblue" }}>
        <div style={{ width: "400px" }}>
          <div style={{ width: "130px", height: "35px", backgroundColor: "white", borderRadius: "50px" }}>
            <div style={{ fontSize: "20px", fontWeight: "700", color: "#314FC0", textAlign: "center", padding: "3px" }}>
              커뮤니티
            </div>
          </div>

          <div style={{ fontSize: "35px", padding: "30px 0", fontWeight: "600" }}>
            전원생활 고민부터,
            <br />
            행복한 일들까지
            <br />
            나눌수록 좋아질 거에요.
          </div>
        </div>
      </div>
      <div className="container" style={{ height: "600px", backgroundColor: "lightgreen" }}>
        <div style={{ width: "400px", float: "right" }}>
          <div style={{ width: "130px", height: "35px", backgroundColor: "white", borderRadius: "50px" }}>
            <div style={{ fontSize: "20px", fontWeight: "700", color: "#314FC0", textAlign: "center", padding: "3px" }}>
              살아보기
            </div>
          </div>
          <div style={{ fontSize: "35px", padding: "30px 0", fontWeight: "600" }}>
            전원생활, 우리 가족이
            <br />
            잘 할 수 있을지 걱정된다면
            <br />
            먼저 살아봐야하지 않을까요?
          </div>
        </div>
      </div>
      <div className="container" style={{ height: "600px", backgroundColor: "lightblue" }}>
        <div style={{ width: "400px" }}>
          <div style={{ width: "130px", height: "35px", backgroundColor: "white", borderRadius: "50px" }}>
            <div style={{ fontSize: "20px", fontWeight: "700", color: "#314FC0", textAlign: "center", padding: "3px" }}>
              찾아보기
            </div>
          </div>

          <div style={{ fontSize: "35px", padding: "30px 0", fontWeight: "600" }}>
            50개의 집들 중
            <br />
            나에게 딱 맞는 집을
            <br />
            찾아보세요.
          </div>
        </div>
      </div>
      <div className="container" style={{ height: "600px", backgroundColor: "lightgreen" }}>
        <div style={{ width: "400px", float: "right" }}>
          <div style={{ width: "130px", height: "35px", backgroundColor: "white", borderRadius: "50px" }}>
            <div style={{ fontSize: "20px", fontWeight: "700", color: "#314FC0", textAlign: "center", padding: "3px" }}>
              계획하기
            </div>
          </div>
          <div style={{ fontSize: "35px", padding: "30px 0", fontWeight: "600" }}>
            당신만의 예상 견적,
            <br />
            트러스 AI가
            <br />
            알려드릴게요.
          </div>
        </div>
      </div>

      <LivingCardList numShowItems={4} />
    </main>
  );
}
