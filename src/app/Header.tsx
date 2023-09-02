import React from "react";
import Image from 'next/image'

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <div className={`d-flex justify-content-around  mt-5 pb-2 text-white`}
    // style={{backgroundColor:"#141468"}} sticky-top
    > 
      <div className="fs-1 fw-bold align-self-center">
        <Image
          className={`mr-auto m-3`}
          src="/logo1.png"
          alt="Truss Logo"
          width={109}
          height={64}
          priority
          style={{ filter: "brightness(0) invert(1)" }}
        />
        시공사, 건축사사무소 리뷰 공간
      </div>

      <div className="btn-group me-5">
        <button type="button" className="btn text-white">로그인</button>
        <button type="button" className="btn text-white">회원가입</button>
      </div>
    </div>
  );
}
