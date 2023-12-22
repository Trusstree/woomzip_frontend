"use client"

import RouteButton from "@/components/RouteButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SocialIcon } from "react-social-icons";

type FooterProps = {};

export default function Footer(props: FooterProps) {
  const router = useRouter();
  const infoURL="https://www.instagram.com/buildintruss/";
  const youtubeURL="https://www.youtube.com/@qazedc6690";
  const instagrmaURL="https://www.instagram.com/buildintruss/";
  const naverBlogURL="https://blog.naver.com/truss369";
  
  return (
    <footer
      className="text-muted text-left pt-4 pb-5 text-white"
      style={{backgroundColor:"#101648"}}>
      <div className="container">
        {/* <button type="button"
          className="btn btn-link link-light"
          onClick={()=>{window.scrollTo(0, 0);}}>
          Back to top
        </button> */}
        <div className="pt-3 text-white d-flex justify-content-between align-items-center">
          <div id={"navigator"}>
            <Link className="text-white" href={infoURL}>회사 소개</Link>
            {/* <span className="mx-3">|</span>
            <Link className="text-white" href={infoURL}>회사 소개</Link> */}
          </div>
          <div id={"social"}>
            <SocialIcon url={youtubeURL} network="youtube" bgColor="#101648" fgColor="white"/>
            <SocialIcon url={instagrmaURL} network="instagram" bgColor="#101648" fgColor="white"/>
            <div className="btn m-0 p-0" style={{border:"none", outline:"none"}}onClick={()=>{router.push(naverBlogURL)}}>
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111" width="45" height="45">
                <rect className="cls-2" fill="#101648" y="0" rx="9.05" ry="9.05"/>
                <polygon className="cls-1" fill="#ffffff" points="83.07 30.16 83.07 80.85 64.57 80.85 46.44 55.33 46.44 80.85 27.94 80.85 27.94 30.16 46.44 30.16 64.57 56.7 64.57 30.16 83.07 30.16"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-0 text-white d-flex flex-column">
            <span>대표 이메일: zxcomkt@gmail.com</span>
            <span>대표 전화번호: 010-7742-2286</span> 
        </div>

        <div className="mt-3 mb-0 text-white">
           Copyright © Truss. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}