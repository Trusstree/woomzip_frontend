import CollapsingButton from "@/components/CollapsingButton";
import RouteButton from "@/components/RouteButton";
import SigninButton from "@/components/auth/SigninButton";
import React from "react";

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <div className={`absolute`}
      style={{color:"#141468", borderBottomStyle:"solid", borderBottomColor:"#101648", borderBottomWidth:"2px"}}// sticky-top
    > 
      <div className="mt-1 pb-1">
        <div className="container d-flex">
          <RouteButton url={"/"}
            className="me-5 ms-4">
            <img
              className=""
              src="/truss_logo.png"
              alt="Truss Logo"
              width={70}
            />
          </RouteButton>

          <div className="d-flex align-items-center me-auto">
            <RouteButton url={"/reviews"} className="fs-4">
              리뷰
            </RouteButton>
            <RouteButton url={"/community"} className="fs-4">
              커뮤니티
            </RouteButton>
            <CollapsingButton collapsedId="collapsedBar" className="fs-4">
              설계/시공/관리
            </CollapsingButton>
          </div>

          <div className="d-flex align-items-center ms-5">
            <SigninButton/>
            <RouteButton url={"/service"}>
              기업서비스
            </RouteButton>
          </div>
        </div>
        {collapsedPage}
      </div>
    </div>
  );
}

const collapsedPage = [
  (<div className="collapse collapsedBar" id={"collapsedBar"}
  style={{color:"#141468", borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
  <div className="container d-flex align-items-center me-auto">
    <RouteButton url={"/reviews"} className="fs-4">
      설계
    </RouteButton>
    <RouteButton url={"/community"} className="fs-4">
      시공
    </RouteButton>
    <RouteButton url={"/posts"} className="fs-4">
      관리
    </RouteButton>
  </div>
</div>)
]