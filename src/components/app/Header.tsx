
import React from "react";
import Image from "next/image";
import SigninButton from "@/components/auth/SigninButton";
import RouteButton from "@/components/RouteButton";
import { BrowserView, MobileView } from "react-device-detect";



type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <>
      <BrowserView className={`navbar navbar-expand-md justify-content-center sticky-top`}
      style={{
        backgroundColor: "white"
      }}>
        <div className="d-flex justify-content-between w-100" style={{ height: "40px", width:"90%", maxWidth:"1300px"}}>
          <RouteButton url="/" className="" style={{marginLeft:"0", paddingLeft:"0"}}>
            <Image src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/woomzipLogo.png"} alt={"Truss Logo"} width={100} height={26} />
          </RouteButton>

          <div className="d-none d-md-flex w-100">
            <div className="d-flex align-items-center me-auto">
              <RouteButton url="/" style={{ fontSize: "15px", marginBottom: "0px" }}>
                홈
              </RouteButton>
              <RouteButton url="/community" style={{ fontSize: "15px" }}>
                커뮤니티
              </RouteButton>
              <RouteButton url="/living" style={{ fontSize: "15px" }}>
                살아보기
              </RouteButton>
              <RouteButton url="/house" style={{ fontSize: "15px" }}>
                찾아보기
              </RouteButton>
              {/* <RouteButton url="/planning" style={{ fontSize: "15px" }}>
                계획하기
              </RouteButton> */}
            </div>
            <div style={{textAlign:"right", marginRight:"0", padding:"0"}}>
              <SigninButton />
            </div>

      
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <RouteButton url="/" className="ms-md-3 px-4 py-2 mb-0">
          <Image src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/woomzipLogo.png"} alt={"Truss Logo"} width={100} height={26} />
        </RouteButton>
      </MobileView>
    </>
  );
}