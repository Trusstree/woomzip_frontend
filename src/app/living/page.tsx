import Image from "next/image";
import React from 'react';

export default function Test() {

  return (
    <main>

      <div style={{backgroundColor:"#8C8C8C", height:"263px", color:"white", padding:"20px",  width:"100%"}}>
        <div style={{marginTop:"50px", fontSize:"30px"}}>전원주택 살아보기</div>
        <div style={{fontSize:"14px"}}>전원생활이 꿈이라면? 살아보고 결정하세요!</div>
      </div>
      {/*부모 컨테이너 무시하고, 양옆 최대로 확대하는 방법 찾아야함*/}

      <div className="row" style={{width:"100%", minWidth:"400px", padding:"10px", margin:"50px 0 800px 0"}}>
        <div className="card" style={{border:"none", width:"50%", minWidth:"400px"}}>
          <Image
            className="card-img-top"
            style={{borderRadius:"25px", objectFit:"cover"}}
           alt="main-img"
            src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
            width={100}
            height={270}
            unoptimized={true}/>
        
          <div style={{color:"gray", padding:"20px"}}>
           <div style={{fontSize:"15px", marginLeft:"2px"}}>모두가하우징</div>
           <div style={{fontSize:"25px", color:"#101648"}}>힐링리버</div>
           <div style={{fontSize:"15px", marginLeft:"10px", marginTop:"10px"}}>강원도 화천군</div>
           <hr/>
           <span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>지금까지 20명이 살아봤어요!</span>
           <span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>또 살아보고 싶어요</span>
           <span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>따뜻해요</span>
         </div>
        </div>
        <div className="card" style={{border:"none", width:"50%", minWidth:"400px"}}>
          <Image
           className="card-img-top"
           style={{borderRadius:"25px", objectFit:"cover"}}
           alt="main-img"
           src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
           width={100}
           height={270}
           unoptimized={true}/>
        
          <div style={{color:"gray", padding:"20px"}}>
            <div style={{fontSize:"15px", marginLeft:"2px"}}>모두가하우징</div>
            <div style={{fontSize:"25px", color:"#101648"}}>힐링리버</div>
            <div style={{fontSize:"15px", marginLeft:"10px", marginTop:"10px"}}>강원도 화천군</div>
            <hr/>
            <span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>지금까지 20명이 살아봤어요!</span>
            <span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>또 살아보고 싶어요</span>
            <span className="badge" style={{padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>따뜻해요</span>
         </div>
       </div>
      </div>
      

    </main>
  );
}