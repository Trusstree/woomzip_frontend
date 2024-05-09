import Image from "next/image";
import { RouteButton } from "@/components/living/RouteButton";
import { LivingInfo } from "@/components/living/LivingInfo";

export default function Parvilion() {
  return (
    <main>
      {/*}여기는 살아보기 상세페이지입니다.*/}
      <div style={{ fontSize: "19px", margin: "50px 0 0 2px", color: "gray" }}>모두가하우징</div>
      <div style={{ fontSize: "32px", marginBottom: "15px", color: "#101648" }}>힐링리버</div>

      <div className="container" style={{ marginLeft: "0", padding: "0", width: "98%" }}>
        <div className="row">
          <div className="container" style={{ margin: "0", padding: "5px", width: "50%", height: "20vh" }}>
            <Image
              className="card-img-top"
              style={{ borderRadius: "27px 0 0 27px", objectFit: "cover" }}
              alt="main-img"
              src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
              width={100}
              height={500}
              unoptimized={true}
            />
          </div>
          <div className="col" style={{ margin: "0px", padding: "0", width: "25%" }}>
            <div className="container" style={{ margin: "0px", padding: "5px", width: "100%" }}>
              <Image
                className="card-img-top"
                style={{ marginBottom: "5px", objectFit: "cover" }}
                alt="main-img"
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"
                width={100}
                height={245}
                unoptimized={true}
              />

              <Image
                className="card-img-top"
                style={{ marginTop: "5px", objectFit: "cover" }}
                alt="main-img"
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg"
                width={100}
                height={245}
                unoptimized={true}
              />
            </div>
          </div>
          <div className="col" style={{ margin: "0px", padding: "0", width: "25%" }}>
            <div className="container" style={{ margin: "0px", padding: "5px", width: "100%" }}>
              <Image
                className="card-img-top"
                style={{ marginBottom: "5px", borderRadius: "0 27px 0 0", objectFit: "cover" }}
                alt="main-img"
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver4.jpeg"
                width={100}
                height={245}
                unoptimized={true}
              />

              <Image
                className="card-img-top"
                style={{ marginTop: "5px", borderRadius: "0 0 27px 0", objectFit: "cover" }}
                alt="main-img"
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver5.jpeg"
                width={100}
                height={245}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container row" style={{ width: "100%" }}>
        <div className="container" style={{ width: "65%", minWidth: "400px", padding: "0", margin: "0" }}>
          <LivingInfo />

          <div style={{ fontWeight: "600", lineHeight: "30px" }}>
            <div style={{ marginTop: "80px", fontSize: "25px", color: "#101648" }}>체험 조건</div>
            <div style={{ fontSize: "18px", marginTop: "30px", padding: "10px" }}>
              ✅ 체험 후기 작성
              <br />✅ SNS에 체험 후기 작성(유튜브, 블로그, 카페 등)
            </div>

            <div style={{ marginTop: "80px", fontSize: "25px", color: "#101648" }}>보증금 반환 조건</div>
            <div style={{ fontSize: "18px", margin: "30px 0 60px 0", padding: "10px" }}>
              ✅ 체험 조건 이수
              <br />✅ 청소 상태 원상복구
              <br />✅ 가이드라인 준수
            </div>
            <div
              className="container"
              style={{ width: "100%", backgroundColor: "lightGray", marginBottom: "10px", padding: "0" }}
            >
              <div style={{ margin: "0", fontSize: "25px", color: "#101648", paddingTop: "50px" }}>힐링리버 소개</div>
              <div style={{ fontSize: "18px", marginTop: "30px", padding: "10px" }}>
                힐링리버는 강원도 화천군에 위치한 모두가하우징의 체험형 홍보관입니다.
                <br />
                전원주택의 삶을 꿈꾸시는 분들에게 전원생활과 모두가하우징의 주택을 체험하실 수 있도록 하기 위해
                제공합니다.
              </div>
              <div style={{ margin: "0", fontSize: "25px", color: "#101648", paddingTop: "50px" }}>편의시설</div>
              <div style={{ fontSize: "18px", marginTop: "30px", padding: "10px" }}>
                ● TV
                <br />● 침대
                <br />● 침구
                <br />● 싱크대
                <br />● 하이라이트
                <br />● 조리도구
                <br />● 전자레인지
              </div>
              <div style={{ margin: "0", fontSize: "25px", color: "#101648", paddingTop: "50px" }}>주의사항</div>
              <div style={{ fontSize: "18px", marginTop: "30px", padding: "10px" }}>
                ● 2층과 주변 주택들에 주민들이 살고 있으니 늦은 밤에는 정숙해주세요.
                <br />
                ● 전원생활 체험 주택입니다. 전문 숙소가 아니기에 불편함이 있을 수 있습니다.
                <br />
                ● 지속적인 무료 서비스 제공을 위해, 퇴실 시 다음 사람을 위해 기존 상태와 동일하게 청소해주셔야 합니다.
                <br />● 화장지, 수건 등 필요한 세면도구는 지참해주시길 바랍니다.
              </div>
            </div>
          </div>
        </div>

        {/*하단 우측 리모컨 비스무리한 것*/}
        <div className="container" style={{ width: "35%", minWidth: "300px", padding: "0", margin: "0" }}>
          <div
            className="card"
            style={{
              width: "80%",
              minWidth: "300px",
              height: "500px",
              border: "1px solid lightGray",
              float: "right",
              borderRadius: "35px",
              padding: "10px",
              marginTop: "30px",
            }}
          >
            <div className="container row" style={{ width: "100%", padding: "10px", margin: "45px 0 0 0" }}>
              <div className="container" style={{ width: "50%", textAlign: "right" }}>
                12평
              </div>
              <div className="container" style={{ width: "50%", textAlign: "right" }}>
                1개
              </div>
            </div>
            <div className="container row" style={{ width: "100%", padding: "10px", margin: "45px 0 0 0" }}>
              <div className="container" style={{ width: "50%", textAlign: "right" }}>
                최대 5명
              </div>
              <div className="container" style={{ width: "50%", textAlign: "right" }}>
                최대 3일
              </div>
            </div>
            <div className="container row" style={{ width: "100%", padding: "10px", margin: "45px 0 0 0" }}>
              <div className="container" style={{ width: "50%", textAlign: "right" }}></div>
              <div className="container" style={{ width: "50%", textAlign: "right" }}>
                무료
              </div>
            </div>
            <div className="container row" style={{ width: "100%", padding: "10px", margin: "45px 0 0 0" }}>
              <div className="container" style={{ width: "50%", textAlign: "right" }}></div>
              <div className="container" style={{ width: "50%", textAlign: "right" }}>
                5만원
              </div>
            </div>
            <div className="container" style={{ width: "100%", padding: "10px", margin: "45px 0 0 0" }}>
              <RouteButton url={"/living/1/reservation"} text={"체험 예약하기"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
