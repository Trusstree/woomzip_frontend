import { RouteButton } from "@/app/living/[pid]/_components/RouteButton";
import { LivingInfo } from "@/app/living/[pid]/_components/LivingInfo";
import { PicModal } from "./_components/PicModal";

const imageData = [
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver4.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver5.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver6.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver7.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver8.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver9.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver10.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver11.jpeg",
  "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver12.jpeg",
];

export default function Parvilion() {
  return (
    <>
      <div
        className="row"
        style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}
      >
        <div style={{ fontSize: "28px", fontWeight: "500" }}>살아보기</div>
        <div
          className="row g-2"
          style={{ width: "100%", position: "relative" }}
        >
          <div className="col-6">
            <div style={{ borderRadius: "10px 0 0 10px", overflow: "hidden" }}>
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-3">
            <div style={{ height: "50%", overflow: "hidden" }}>
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
            <div
              style={{ height: "50%", marginTop: "4px", overflow: "hidden" }}
            >
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg"
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-3">
            <div
              style={{
                height: "50%",
                overflow: "hidden",
                borderRadius: "0 10px 0 0",
              }}
            >
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver4.jpeg"
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                height: "50%",
                marginTop: "4px",
                overflow: "hidden",
                borderRadius: "0 0 10px 0",
              }}
            >
              <img
                src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver5.jpeg"
                style={{ width: "100%", height: "196px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            className="btn"
            style={{
              position: "absolute",
              right: "25px",
              bottom: "15px",
              backgroundColor: "white",
              opacity: "0.7",
              width: "150px",
            }}
            data-bs-toggle="modal"
            data-bs-target="#living_modal_1"
          >
            <div className="d-flex justify-content-between">
              <div style={{ width: "30px" }}>
                <img
                  src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
                  style={{ width: "25px" }}
                />
              </div>
              <div style={{ width: "auto", marginTop: "2px" }}>
                사진 전체보기
              </div>
            </div>
          </div>
        </div>

        <div className="g-3 row w-100">
          <div className="col-8">
            <div
              style={{ fontSize: "19px", margin: "5px 0 0 2px", color: "gray" }}
            >
              모두가하우징
            </div>
            <div
              style={{
                fontSize: "32px",
                marginBottom: "15px",
                fontWeight: "500",
              }}
            >
              힐링리버
            </div>
            <LivingInfo />

            <div
              style={{
                fontWeight: "600",
                lineHeight: "30px",
                marginBottom: "100px",
              }}
            >
              <h5 style={{ marginTop: "80px" }}>체험 조건</h5>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  marginTop: "30px",
                  padding: "10px",
                }}
              >
                ✅ 체험 후기 작성
                <br />✅ SNS에 체험 후기 작성(유튜브, 블로그, 카페 등)
              </div>

              <h5 style={{ marginTop: "80px" }}>보증금 반환 조건</h5>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "30px 0 60px 0",
                  padding: "10px",
                }}
              >
                ✅ 체험 조건 이수
                <br />✅ 청소 상태 원상복구
                <br />✅ 가이드라인 준수
              </div>
              <div
                className="container"
                style={{ width: "100%", marginBottom: "10px", padding: "0" }}
              >
                <h5 style={{ margin: "0", paddingTop: "50px" }}>
                  힐링리버 소개
                </h5>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "30px",
                    padding: "10px",
                  }}
                >
                  힐링리버는 강원도 화천군에 위치한 모두가하우징의 체험형
                  홍보관입니다.
                  <br />
                  전원주택의 삶을 꿈꾸시는 분들에게 전원생활과 모두가하우징의
                  주택을 체험하실 수 있도록 하기 위해 제공합니다.
                </div>
                <h5 style={{ margin: "0", paddingTop: "50px" }}>편의시설</h5>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "30px",
                    padding: "10px",
                  }}
                >
                  ● TV
                  <br />● 침대
                  <br />● 침구
                  <br />● 싱크대
                  <br />● 하이라이트
                  <br />● 조리도구
                  <br />● 전자레인지
                </div>
                <h5 style={{ margin: "0", paddingTop: "50px" }}>주의사항</h5>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "30px",
                    padding: "10px",
                  }}
                >
                  ● 2층과 주변 주택들에 주민들이 살고 있으니 늦은 밤에는
                  정숙해주세요.
                  <br />
                  ● 전원생활 체험 주택입니다. 전문 숙소가 아니기에 불편함이 있을
                  수 있습니다.
                  <br />
                  ● 지속적인 무료 서비스 제공을 위해, 퇴실 시 다음 사람을 위해
                  기존 상태와 동일하게 청소해주셔야 합니다.
                  <br />● 화장지, 수건 등 필요한 세면도구는 지참해주시길
                  바랍니다.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              className="card sticky-top"
              style={{
                width: "90%",
                border: "none",
                zIndex: 1,
                marginLeft: "10%",
              }}
            >
              <div className="container" style={{ height: "60px" }}></div>
              <div
                style={{
                  padding: "10px",
                  boxShadow: "3px 3px 13px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                }}
              >
                <div
                  className="container row"
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0 0 0",
                  }}
                >
                  <div
                    className="d-flex justify-content-start px-1"
                    style={{ width: "50%" }}
                  >
                    <svg
                      width="50"
                      height="50"
                      style={{ width: "60px" }}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        opacity="0.8"
                        width="30"
                        height="30"
                        fill="url(#pattern0_1672_959)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1672_959"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_1672_959"
                            transform="translate(-0.001) scale(0.002)"
                          />
                        </pattern>
                        <image
                          id="image0_1672_959"
                          width="501"
                          height="500"
                          xlinkHref="data:image/png;base64,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7Ow1fMZ54i9Qdq2/0Tz65Gfx1BI11iXqABDCZ+oAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAJSin/AL1n57eXtEZYAAAAAElFTkSuQmCC"
                        />
                      </defs>
                    </svg>
                    <div style={{ width: "80px", marginTop: "12px" }}>12평</div>
                  </div>
                  <div
                    className="d-flex justify-content-start px-1"
                    style={{ width: "50%" }}
                  >
                    <svg
                      width="50"
                      height="50"
                      style={{ width: "60px" }}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        opacity="0.8"
                        width="30"
                        height="30"
                        fill="url(#pattern0_1672_957)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1672_957"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_1672_957"
                            transform="translate(-0.001) scale(0.002)"
                          />
                        </pattern>
                        <image
                          id="image0_1672_957"
                          width="501"
                          height="500"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    <div style={{ width: "80px", marginTop: "12px" }}>1개</div>
                  </div>
                </div>

                <div
                  className="container row"
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0 0 0",
                  }}
                >
                  <div
                    className="d-flex justify-content-start px-1"
                    style={{ width: "50%" }}
                  >
                    <svg
                      width="50"
                      height="50"
                      style={{ width: "60px" }}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        opacity="0.8"
                        width="30"
                        height="30"
                        fill="url(#pattern0_1672_959)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1672_959"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_1672_959"
                            transform="translate(-0.001) scale(0.002)"
                          />
                        </pattern>
                        <image
                          id="image0_1672_959"
                          width="501"
                          height="500"
                          xlinkHref="data:image/png;base64,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7Ow1fMZ54i9Qdq2/0Tz65Gfx1BI11iXqABDCZ+oAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAJSin/AL1n57eXtEZYAAAAAElFTkSuQmCC"
                        />
                      </defs>
                    </svg>
                    <div style={{ width: "80px", marginTop: "12px" }}>
                      최대 5명
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-start px-1"
                    style={{ width: "50%" }}
                  >
                    <svg
                      width="50"
                      height="50"
                      style={{ width: "60px" }}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        opacity="0.8"
                        width="30"
                        height="30"
                        fill="url(#pattern0_1672_957)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1672_957"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_1672_957"
                            transform="translate(-0.001) scale(0.002)"
                          />
                        </pattern>
                        <image
                          id="image0_1672_957"
                          width="501"
                          height="500"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    <div style={{ width: "80px", marginTop: "12px" }}>
                      최대 3일
                    </div>
                  </div>
                </div>
                <hr style={{ margin: "0px", padding: "0px" }} />
                <div
                  className="container row"
                  style={{
                    width: "100%",
                    margin: "10px 0 0 0",
                    padding: "10px",
                  }}
                >
                  <div
                    className="d-flex justify-content-start px-1"
                    style={{ width: "100%" }}
                  >
                    <svg
                      width="50"
                      height="50"
                      style={{ width: "60px" }}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        opacity="0.8"
                        width="30"
                        height="30"
                        fill="url(#pattern0_1672_959)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1672_959"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_1672_959"
                            transform="translate(-0.001) scale(0.002)"
                          />
                        </pattern>
                        <image
                          id="image0_1672_959"
                          width="501"
                          height="500"
                          xlinkHref="data:image/png;base64,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7Ow1fMZ54i9Qdq2/0Tz65Gfx1BI11iXqABDCZ+oAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAJSin/AL1n57eXtEZYAAAAAElFTkSuQmCC"
                        />
                      </defs>
                    </svg>
                    <div style={{ width: "80px", marginTop: "12px" }}>무료</div>
                  </div>
                </div>
                <div
                  className="container row"
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0 0 0",
                  }}
                >
                  <div
                    className="d-flex justify-content-start px-1"
                    style={{ width: "100%" }}
                  >
                    <svg
                      width="50"
                      height="50"
                      style={{ width: "60px" }}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        opacity="0.8"
                        width="30"
                        height="30"
                        fill="url(#pattern0_1672_959)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1672_959"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_1672_959"
                            transform="translate(-0.001) scale(0.002)"
                          />
                        </pattern>
                        <image
                          id="image0_1672_959"
                          width="501"
                          height="500"
                          xlinkHref="data:image/png;base64,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7Ow1fMZ54i9Qdq2/0Tz65Gfx1BI11iXqABDCZ+oAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAJSin/AL1n57eXtEZYAAAAAElFTkSuQmCC"
                        />
                      </defs>
                    </svg>
                    <div style={{ width: "80px", marginTop: "12px" }}>
                      5만원
                    </div>
                  </div>
                </div>
                <div
                  className="container"
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "30px 0 0 0",
                  }}
                >
                  <RouteButton
                    url={"/living/1/reservation"}
                    text={"체험 예약하기"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PicModal id={1} images={imageData} />
    </>
  );
}
