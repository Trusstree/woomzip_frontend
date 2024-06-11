import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type FooterProps = {};

export default function Footer(props: FooterProps) {
  const infoURL = "https://diagnostic-lace-a24.notion.site/f9b2d562f52b4b5a8cad9299d37c6540";
  const youtubeURL = "https://www.youtube.com/@buildintruss";
  const instagrmaURL = "https://www.instagram.com/buildintruss/";
  const naverBlogURL = "https://blog.naver.com/truss369";

  return (
    <footer className="text-muted text-left pt-4 pb-5 text-white" style={{ backgroundColor: "gray" }}>
      <div className="container">
        <div className="pt-3 text-white d-flex align-items-center">
          <div className="row" style={{marginBottom:"50px"}}>
            <div id={"navigator"} className="col" style={{width:"150px"}}>
              <div style={{fontWeight:"600", marginBottom:"10px"}}>회사</div>
              <Link className="text-white" href={infoURL} style={{fontSize:"14px"}}>
                회사 소개
              </Link>
              {/* <span className="mx-3">|</span>
              <Link className="text-white" href={infoURL}>회사 소개</Link> */}
            </div>
            <div style={{width:"250px"}}>
              <div style={{fontWeight:"600", marginBottom:"10px"}}>문의</div>
              <div style={{fontSize:"14px"}}>전화 : 010-7742-2286</div>
              <div style={{fontSize:"14px"}}>이메일 : truss369@naver.com</div>
            </div>
          </div>

          
        </div>
        <div className="pt-3 text-white d-flex justify-content-between align-items-center">
          <div className="mb-0 text-white d-flex flex-column">
            <span style={{marginBottom:"10px", fontWeight:"600"}}>(주)트러스트리</span>
            <span style={{fontSize:"14px"}}>사업자 등록번호 : 788-87-03092 | 대표 : 양준우 </span>
            <span style={{fontSize:"14px"}}>통신판매업 신고번호 : 2024-서울동작-0730</span>
            <span style={{fontSize:"14px"}}>06978 서울특별시 동작구 상도로 55길 8, 304호(상도동)</span>
          </div>

          <div id={"social"}>
              {/* Youtube */}
              <SocialIcon url={youtubeURL} network="youtube" bgColor="gray" fgColor="white" />

              {/* Instagram */}
              <SocialIcon url={instagrmaURL} network="instagram" bgColor="gray" fgColor="white" />

              {/* Naver */}
              <Link className="btn m-0 p-0" style={{ border: "none", outline: "none" }} href={naverBlogURL}>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111" width="50" height="50">
                  <rect className="cls-2" fill="#101648" y="0" rx="9.05" ry="9.05" />
                  <polygon
                    className="cls-1"
                    fill="#ffffff"
                    points="83.07 30.16 83.07 80.85 64.57 80.85 46.44 55.33 46.44 80.85 27.94 80.85 27.94 30.16 46.44 30.16 64.57 56.7 64.57 30.16 83.07 30.16"
                  />
                </svg>
              </Link>
            </div>
          </div>
      </div>
    </footer>
  );
}
