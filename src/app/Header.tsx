import React from "react";
import Image from 'next/image'

type Props = {};

function Header({}: Props) {
  return (
    <div className={`d-flex sticky-top pb-2`} style={{backgroundColor:"#E1ECEF"}}>
      <Image
        className={`mr-auto m-3`}
        src="/logo1.png"
        alt="Truss Logo"
        width={109}
        height={64}
        priority
      />

      <div className="btn-group">
        <button type="button" className="btn">서비스 소개</button>
        <button type="button" className="btn">요금안내</button>
        <button type="button" className="btn">건축현장</button>
        <button type="button" className="btn">고객지원</button>
      </div>

      <div className="btn-group ms-auto me-5">
        <button type="button" className="btn">파트너스 사이트</button>
        <button type="button" className="btn">로그인</button>
        <button type="button" className="btn">회원가입</button>
      </div>
    </div>
  );
}

export default Header;