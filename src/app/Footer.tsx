"use client";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { BrowserView, MobileView } from "react-device-detect";
import RouteButton from "@/components/RouteButton";

type FooterProps = {};

export default function Footer(props: FooterProps) {
  const infoURL = "./about";
  const serviceURL = "./about/service";
  const termsURL = "./about/terms";
  const youtubeURL = "https://www.youtube.com/@buildintruss";
  const instagrmaURL = "https://www.instagram.com/buildintruss/";
  const naverBlogURL = "https://blog.naver.com/truss369";

  return (
    <footer>
      <BrowserView
        className="text-muted text-left pt-4 pb-5 text-white"
        style={{
          backgroundColor: "gray",
          color: "white",
          paddingTop: "1rem",
          paddingBottom: "1.25rem",
        }}
      >
        <div className="container">
          <div className="pt-3 text-white d-flex align-items-center">
            <div className="row" style={{ marginBottom: "50px" }}>
              <div id="navigator" className="col" style={{ width: "200px" }}>
                <div style={{ fontWeight: "600", marginBottom: "10px" }}>
                  회사
                </div>
                <Link href={infoURL} passHref>
                  <div
                    className="text-white"
                    style={{
                      border: "none",
                      outline: "none",
                      fontSize: "14px",
                    }}
                  >
                    회사 소개
                  </div>
                </Link>
                <Link href={serviceURL} passHref>
                  <div
                    className="text-white"
                    style={{
                      border: "none",
                      outline: "none",
                      fontSize: "14px",
                    }}
                  >
                    서비스 소개
                  </div>
                </Link>
                <Link href={termsURL} passHref>
                  <div
                    className="text-white"
                    style={{
                      border: "none",
                      outline: "none",
                      fontSize: "14px",
                    }}
                  >
                    개인정보처리방침
                  </div>
                </Link>
              </div>
              <div style={{ width: "290px" }}>
                <div style={{ fontWeight: "600", marginBottom: "10px" }}>
                  문의
                </div>
                <div style={{ fontSize: "14px" }}>전화 : 0507-1369-6158</div>
                <div style={{ fontSize: "14px" }}>
                  이메일 : truss369@naver.com
                </div>
              </div>
              <div style={{ width: "400px" }}>
                <div style={{ fontWeight: "600", marginBottom: "10px" }}>
                  소셜
                </div>
                <div id="social">
                  <SocialIcon
                    url={youtubeURL}
                    network="youtube"
                    bgColor="gray"
                    fgColor="white"
                  />
                  <SocialIcon
                    url={instagrmaURL}
                    network="instagram"
                    bgColor="gray"
                    fgColor="white"
                  />
                  <Link
                    href={naverBlogURL}
                    passHref
                    style={{ border: "none", outline: "none" }}
                  >
                    <div className="btn m-0 p-0">
                      <svg
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 111 111"
                        width="50"
                        height="50"
                      >
                        <rect
                          className="cls-2"
                          fill="#101648"
                          y="0"
                          rx="9.05"
                          ry="9.05"
                        />
                        <polygon
                          className="cls-1"
                          fill="#ffffff"
                          points="83.07 30.16 83.07 80.85 64.57 80.85 46.44 55.33 46.44 80.85 27.94 80.85 27.94 30.16 46.44 30.16 64.57 56.7 64.57 30.16 83.07 30.16"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-3 text-white align-items-center">
            <div className="mb-0 text-white d-flex flex-column">
              <span style={{ marginBottom: "10px", fontWeight: "600" }}>
                (주)트러스트리
              </span>
              <span style={{ fontSize: "14px" }}>
                사업자 등록번호 : 788-87-03092 | 대표 : 양준우 |
                개인정보보호책임자 : 박세홍 | 통신판매업 신고번호 :
                2024-서울동작-0730 | 주소 : 06978 서울특별시 동작구 상도로 55길
                8, 304호(상도동)
              </span>
            </div>
          </div>
        </div>
      </BrowserView>

      <MobileView style={{ paddingTop: "80px" }}>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "white",
            padding: "1rem",
            textAlign: "center",
            height: "60px",
            borderTop: "2px solid black",
          }}
        >
          <RouteButton
            url="/"
            style={{ fontSize: "14px", padding: "5px", margin: "0 12px" }}
          >
            홈
          </RouteButton>
          <RouteButton
            url="/community"
            style={{ fontSize: "14px", padding: "5px", margin: "0 12px" }}
          >
            커뮤니티
          </RouteButton>
          <RouteButton
            url="/living"
            style={{ fontSize: "14px", padding: "5px", margin: "0 12px" }}
          >
            살아보기
          </RouteButton>
          <RouteButton
            url="/house"
            style={{ fontSize: "14px", padding: "5px", margin: "0 12px" }}
          >
            찾아보기
          </RouteButton>
          <RouteButton
            url="/signin"
            style={{ fontSize: "14px", padding: "5px", margin: "0 12px" }}
          >
            프로필
          </RouteButton>
        </div>
      </MobileView>
    </footer>
  );
}
