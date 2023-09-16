import RouteButton from "@/components/RouteButton";
import React from "react";

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <div className={`absolute`}
      style={{color:"#141468", borderBottomStyle:"solid", borderBottomColor:"#101648", borderBottomWidth:"2px"}}// sticky-top
    > 
      <div className="container d-flex mt-3 pb-3">
        <RouteButton url={"/"}
          className="me-5 ms-4">
          <img
            className=""
            src="/truss_logo.png"
            alt="Truss Logo"
            width={100}
          />
        </RouteButton>

        <div className="d-flex align-items-center me-auto">
          <RouteButton url={"/reviews"} className="fs-4">
            리뷰
          </RouteButton>
          <RouteButton url={"/community"} className="fs-4">
            커뮤니티
          </RouteButton>
          <RouteButton url={"/posts"} className="fs-4">
            칼럼
          </RouteButton>
        </div>

        <div className="btn-group ms-5">
          <RouteButton url={"/sign"}>
            로그인/회원가입
          </RouteButton>
          <RouteButton url={"/service"}>
            기업서비스
          </RouteButton>
        </div>
      </div>
    </div>
  );
}
