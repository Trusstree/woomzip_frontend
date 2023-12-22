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
      <div className="container">
        <div className="d-flex">
          <RouteButton url={"/"}
            className="me-3 ms-4 px-4 py-2">
            <img
              className=""
              src="/logo_truss.png"
              alt="Truss Logo"
              width={70}
            />
          </RouteButton>

          <div className="d-flex align-items-center me-auto">
            <RouteButton url={"/"} className="fs-5">
              홈
            </RouteButton>
            {/* <RouteButton url={"/reviews"} className="fs-5">
              리뷰
            </RouteButton> */}
            <RouteButton url={"/house"} className="fs-5">
              내집찾기
            </RouteButton> 
            {/* <CollapsingButton collapsedId="collapsedBar" className="fs-5">
              내집찾기
            </CollapsingButton> */}
            <RouteButton url={"/community"} className="fs-5">
              커뮤니티
            </RouteButton>
          </div>

          <div className="d-flex align-items-center ms-5">
            <SigninButton/> 
            {/* <RouteButton url={"/service"}>
              기업서비스
            </RouteButton> */}
          </div>
        </div>
        {/* {collapsedPage} */}
      </div>
    </div>
  );
}

// const collapsedPage = [
//   (<div className="collapse collapsedBar row" id={"collapsedBar"}
//   style={{color:"#141468", borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
//     <div className="col-7 container d-flex align-items-center me-auto">
//       <RouteButton url={"/reviews"} className="fs-4">
//         설계
//       </RouteButton>
//       <RouteButton url={"/community"} className="fs-4">
//         시공
//       </RouteButton>
//       <RouteButton url={"/posts"} className="fs-4">
//         관리
//       </RouteButton>
//     </div>
//   </div>)
// ]