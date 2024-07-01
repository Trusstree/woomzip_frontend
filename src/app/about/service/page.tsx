"use client";

export default function Home() {
  return (
    <div>
      <div style={{ width: "100%", height: "700px", position: "relative" }}>
        <img
          src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/222.jpg"
          width={"100%"}
          height={"700px"}
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: 0,
            width: "100%",
            color: "white",
            fontSize: "4vw",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          꿈 꾸는 삶을 현실로,
          <br />
          움집에서 쉽고 간편하게
        </div>
      </div>

      <div style={{ width: "100%", height: "400px", backgroundColor: "#FAFBFC" }}>
        <div
          style={{
            paddingTop: "120px",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "500",
          }}
        >
          전원생활을 고민할 때부터,
          <br />내 집을 짓는 순간을 지나,
          <br />
          살아가는 삶까지
          <br />
          움집이 있다면 더욱 즐거워질거에요.
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <div
          className="row"
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "100px 0",
          }}
        >
          <div className="col-4" style={{ minWidth: "350px" }}>
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
              }}
            >
              커뮤니티
            </div>
            <div
              style={{
                padding: "50px 0",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              커뮤니티에서는 비슷한 사람들과 소통할 수 있어요.
            </div>
          </div>
          <div className="col-8" style={{ minWidth: "350px" }}>
            <img
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/service1.png"}
              width={"100%"}
              style={{}}
            ></img>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "#FAFBFC" }}>
        <div
          className="row"
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <div className="col-8" style={{ minWidth: "350px" }}>
            <img
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/service1.png"}
              width={"100%"}
              style={{ paddingBottom: "50px" }}
            ></img>
          </div>
          <div className="col-4" style={{ minWidth: "350px" }}>
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
              }}
            >
              살아보기
            </div>
            <div
              style={{
                padding: "50px 0",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              고민 중이라면, 가족 다 같이 살아보며 무료로 경험해보세요.
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <div
          className="row"
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "100px 0",
          }}
        >
          <div className="col-4" style={{ minWidth: "350px" }}>
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
              }}
            >
              찾아보기
            </div>
            <div
              style={{
                padding: "50px 0",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              움집이 먼저 다 찾아두었으니, 맘껏 마음에 드는 집들을 알아보세요.
            </div>
          </div>
          <div className="col-8" style={{ minWidth: "350px" }}>
            <img
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/service1.png"}
              width={"100%"}
              style={{}}
            ></img>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "#FAFBFC" }}>
        <div
          className="row"
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "0 auto",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <div className="col-8" style={{ minWidth: "350px" }}>
            <img
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/service1.png"}
              width={"100%"}
              style={{ paddingBottom: "50px" }}
            ></img>
          </div>
          <div className="col-4" style={{ minWidth: "350px" }}>
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
              }}
            >
              AI 타잔
            </div>
            <div
              style={{
                padding: "50px 0",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              움집의 건축 전문가 AI 타잔이 당신의 총 공사비용을 예측해드려요.
              <br />
              <br />
              그래서 얼마가 드는데? 라는 질문을 해결해보세요.
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: "400px" }}>
        <div
          style={{
            paddingTop: "120px",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "500",
          }}
        >
          전원생활을 고민할 때부터,
          <br />내 집을 짓는 순간을 지나,
          <br />
          살아가는 삶까지
          <br />
          움집이 있다면 더욱 즐거워질거에요.
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "#FAFBFC" }}>
        <div className="row" style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <div className="col-5" style={{ paddingTop: "100px", minWidth: "350px" }}>
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
              }}
            >
              움집 팀
            </div>
            <div
              style={{
                padding: "50px 0",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              믿을 만한 움집 팀에서 서비스를 만들어갑니다
            </div>
          </div>
          <div className="col-7" style={{ minWidth: "350px" }}>
            <img
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/team.jpg"}
              width={"100%"}
              style={{ objectFit: "cover" }}
            ></img>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <div className="row" style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <div className="col-5" style={{ paddingTop: "100px", minWidth: "350px" }}>
            <div
              style={{
                backgroundColor: "#314FC0",
                borderRadius: "40px",
                width: "120px",
                height: "40px",
                textAlign: "center",
                color: "white",
                fontSize: "23px",
                fontWeight: "600",
                padding: "5px 0",
              }}
            >
              만남
            </div>
            <div
              style={{
                paddingTop: "50px",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              언제, 어디서든 연락을 기다립니다.
            </div>
            <div
              style={{
                padding: "50px 0",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              전화번호 : 0507-1369-6158
              <br />
              이메일 : service@woomzip.com
              <br />
              주소 : 서울특별시 동작구 상도로 55길 8, 304호(상도동, 숭실대학교 챌린지스테이션)
            </div>
          </div>
          <div className="col-7" style={{ minWidth: "350px" }}>
            <img
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/map.png"}
              width={"100%"}
              style={{ objectFit: "cover" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
