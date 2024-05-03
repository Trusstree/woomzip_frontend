import Image from "next/image";


export default function Test() {

  return (
    <main>

      <div style={{backgroundColor:"#8C8C8C", width:"100vw", height:"263px", color:"white", padding:"20px"}}>
        <div style={{marginTop:"50px", fontSize:"30px"}}>전원주택 살아보기</div>
        <div style={{fontSize:"14px"}}>전원생활이 꿈이라면? 살아보고 결정하세요!</div>
      </div>
      {/*부모 컨테이너 무시하고, 양옆 최대로 확대하는 방법 찾아야함*/}

      <div className="row" style={{marginTop:"50px", width:"100%", minWidth:"390px", padding:"10px"}}>
        <div className="card" style={{border:"none", width:"50%", minWidth:"400px"}}>
          <Image
            className="card-img-top"
            style={{borderRadius:"25px"}}
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
        <div className="card" style={{border:"none", width:"50%", minWidth:"400px"}}>
          <Image
           className="card-img-top"
           style={{borderRadius:"25px"}}
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
      

      {/*}여기는 살아보기 상세페이지입니다.*/}
      <div>
        <div style={{fontSize:"19px", margin:"50px 0 0 2px", color:"gray"}}>모두가하우징</div>
        <div style={{fontSize:"32px", marginBottom:"15px", color:"#101648"}}>힐링리버</div>

        <div className="container" style={{marginLeft:"0", padding:"0", width:"100%"}}>
          <div className="row">
            <div className="container" style={{margin:"0", padding:"5px", width:"50%", minWidth:"400px"}}>
              <Image
              className="card-img-top"
              style={{borderRadius:"27px 0 0 27px"}}
              alt="main-img"
              src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
              width={100}
              height={500}
              unoptimized={true}/>
            </div>
            <div className="col" style={{margin:"0px", padding:"0", width:"25%"}}>
              <div className="container" style={{margin:"0px", padding:"5px", width:"100%", minWidth:"200px"}}>
                <Image
                  className="card-img-top"
                  style={{marginBottom:"5px"}}
                  alt="main-img"
                  src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
                  width={100}
                  height={245}
                  unoptimized={true}/>
                
                <Image
                  className="card-img-top"
                  style={{marginTop:"5px"}}
                  alt="main-img"
                  src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
                  width={100}
                  height={245}
                  unoptimized={true}/>
              </div>
            </div>
            <div className="col" style={{margin:"0px", padding:"0", width:"25%"}}>
              <div className="container" style={{margin:"0px", padding:"5px", width:"100%", minWidth:"200px"}}>
                <Image
                  className="card-img-top"
                  style={{marginBottom:"5px", borderRadius:"0 27px 0 0"}}
                  alt="main-img"
                  src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
                  width={100}
                  height={245}
                  unoptimized={true}/>
                
                <Image
                  className="card-img-top"
                  style={{marginTop:"5px", borderRadius:"0 0 27px 0"}}
                  alt="main-img"
                  src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
                  width={100}
                  height={245}
                  unoptimized={true}/>
              </div>
            </div>
          </div>
        </div>

        <div className="container row" style={{/*backgroundColor:"green",*/ width:"100%"}}>
          <div className="container" style={{/*backgroundColor:"red",*/ width:"64%", minWidth:"390px", padding:"0", margin:"0"}}>
            <div className="badge" style={{padding:"10px", margin:"20px 0", backgroundColor:"lightGray", color:"gray", fontSize:"16px"}}>
              지금까지 20명이 살아봤어요!
            </div>
            <div style={{color:"gray", fontSize:"14px"}}>후기(17)</div><span style={{float:"right", marginRight:"20px", color:"black", fontSize:"14px"}}>전체보기</span>
            <div className="container" style={{/*backgroundColor:"aqua",*/ width:"100%", fontSize:"14px", color:"gray", overflow:"scroll"}}>
              <div className="container row" style={{/*backgroundColor:"black",*/ padding:"0", width:"3000px", height:"200px", float:"left"}}>
                <div className="card" style={{/*backgroundColor:"white",*/ marginRight:"10px", width:"430px", minWidth:"350px", height:"100%", border:"1px solid lightGray", borderRadius:"15px", overflow:"hidden"}}>
                  <div style={{color:"gray", padding:"10px"}}>닉네임</div>
                  <div className="container row" style={{margin:"0", padding:"0"}}>
                    <div className="container" style={{/*backgroundColor:"yellow",*/ width:"65%", height:"110px", marginLeft:"0", fontWeight:"500", overflow:"hidden"}}>
                      화천에 있는 힐링리버에서 하루 묵었더니, 병이 싹 다 나았습니다. 장난 아니네요 ㄷㄷ 또 올게요. 무료로 이런 체험을 하다니 완전 대박 정말 너무 좋습니다~ 다음에는 꼭 제 집을 지어서, 지인들 이렇게 초대해서 놀고 싶네요^^
                    </div>
                    <div className="container" style={{/*backgroundColor:"pink",*/ float:"right", margin:"0", padding:"0" ,width:"100px", height:"100px"}}>
                      <Image
                      className="card-img-top"
                      style={{borderRadius:"10px"}}
                      alt="main-img"
                      src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
                      width={100}
                      height={100}
                      unoptimized={true}/>
                    </div>
                  </div>
                  <div className="container" style={{width:"500px"}}>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>가족끼리 좋아요</span>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>또 살아보고 싶어요</span>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>따뜻해요</span>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>자연이 좋아요</span>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>집갈래요 피곤해요</span>
                  </div>
                </div>
                
                <div className="card" style={{/*backgroundColor:"white",*/ marginRight:"10px", width:"430px", minWidth:"350px", height:"100%", border:"1px solid lightGray", borderRadius:"15px", overflow:"hidden"}}>
                  <div style={{color:"gray", padding:"10px"}}>닉네임</div>
                  <div className="container row" style={{margin:"0", padding:"0"}}>
                    <div className="container" style={{/*backgroundColor:"yellow",*/ width:"65%", height:"110px", marginLeft:"0", fontWeight:"500", overflow:"hidden"}}>
                      화천에 있는 힐링리버에서 하루 묵었더니, 병이 싹 다 나았습니다. 장난 아니네요 ㄷㄷ 또 올게요. 무료로 이런 체험을 하다니 완전 대박 정말 너무 좋습니다~ 다음에는 꼭 제 집을 지어서, 지인들 이렇게 초대해서 놀고 싶네요^^
                    </div>
                    <div className="container" style={{/*backgroundColor:"pink",*/ float:"right", margin:"0", padding:"0" ,width:"100px", height:"100px"}}>
                      <Image
                      className="card-img-top"
                      style={{borderRadius:"10px"}}
                      alt="main-img"
                      src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
                      width={100}
                      height={100}
                      unoptimized={true}/>
                    </div>
                  </div>
                  <div className="container" style={{width:"500px"}}>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>가족끼리 좋아요</span>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>또 살아보고 싶어요</span>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>따뜻해요</span>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>자연이 좋아요</span>
                    <span className="badge" style={{width:"auto", padding:"10px", marginRight:"5px", backgroundColor:"lightgray", color:"gray"}}>집갈래요 피곤해요</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*하단 우측 리모컨 비스무리한 것*/}
          <div className="container" style={{backgroundColor:"purple", width:"34%", minWidth:"300px", padding:"0", margin:"0"}}>
            안녕
          </div>

        </div>


      </div>

    </main>
  );
}