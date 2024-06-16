"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BrowserView, MobileView } from "react-device-detect";

const badgeExample = [
  <span
    key={1}
    className="badge"
    style={{ padding: "8px 10px", marginRight: "5px", border: "2px solid lightgray", borderRadius:"10px", color: "gray", fontWeight:"400", fontSize:"14px" }}
  >
    전원생활 체험하기 좋아요
  </span>,
  <span
    key={2}
    className="badge"
    style={{ padding: "8px 10px", marginRight: "5px", border: "2px solid lightgray", borderRadius:"10px", color: "gray", fontWeight:"400", fontSize:"14px" }}
  >
    또 살아보고 싶어요
  </span>,
  <span
    key={3}
    className="badge"
    style={{ padding: "8px 10px", marginRight: "5px", border: "2px solid lightgray", borderRadius:"10px", color: "gray", fontWeight:"400", fontSize:"14px" }}
  >
    따뜻해요
  </span>,
];

export function LivingCard({ company, title, addr, img, url }) {
  const router = useRouter();

  function handleClick() {
    // e.target.value
    if (url) router.push(url);
  }

  return (
    <>
    <BrowserView className="card" style={{ border: "none", width: "50%"}}>
      <div >
        <Image
          className="card-img-top"
          style={{ borderRadius: "10px", objectFit: "cover" }}
          alt="main-img"
          src={img}
          width={100}
          height={270}
          unoptimized={true}
          onClick={handleClick}
        />

        <div style={{ color: "gray", padding: "20px" }}>
          <div style={{ fontSize: "15px", marginLeft: "2px" }}>{company}</div>
          <div style={{ fontSize: "25px", color: "black" }}>{title}</div>
          <div className="row" style={{width:"300px", marginTop:"10px"}}>
            <Image
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/gps.png"}
              width={100}
              height={20}
              style={{width:"40px"}}
              alt={"gpsIcon"}/>
            <div style={{ fontSize: "15px", width:"260px"}}>{addr}</div>
          </div>
          <hr />
          {badgeExample}
          <hr />
          <div style={{fontWeight:"500", fontSize:"15px"}}>
            지금까지 5명이 살아봤어요!
          </div>
        </div>
      </div>
    </BrowserView>

    <MobileView>
      <div className="card" style={{ border: "none", width: "105%"}}>
        <Image
          className="card-img-top"
          style={{ borderRadius: "10px", objectFit: "cover" }}
          alt="main-img"
          src={img}
          width={100}
          height={170}
          unoptimized={true}
          onClick={handleClick}
        />

        <div style={{ color: "gray", padding: "10px" }}>
          <div style={{width:"100%"}}>
            <div style={{ fontSize: "14px", marginLeft: "2px" }}>{company}</div>
            <div style={{ fontSize: "18px", color: "black" }}>{title}</div>
          </div>
          
          <div className="row" style={{width:"100%"}}>
            <div className="row" style={{width:"50%", marginTop:"10px"}}>
              <Image
                src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/gps.png"}
                width={100}
                height={20}
                style={{width:"40px"}}
                alt={"gpsIcon"}/>
              <div style={{ fontSize: "14px", width:"110px"}}>{addr}</div>
            </div>
            <div className="row" style={{width:"50%", marginTop:"10px"}}>
              <div style={{fontSize:"14px", fontWeight:"700", width:"30px"}}>₩</div>
              <div style={{ fontSize: "14px", width:"auto"}}>무료</div>
            </div>
          </div>
          <div style={{fontWeight:"500", fontSize:"14px", color:"#314FC0", marginTop:"5px", textAlign:"right"}}>
          지금까지 5명이 살아봤어요!
          </div>
          <hr />
        </div>
      </div>
    </MobileView>
  </>
  );
}
