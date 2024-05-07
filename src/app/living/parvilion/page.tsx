import Image from "next/image";


export default function Parvilion() {

  return (
    <main>
{/*}여기는 살아보기 상세페이지입니다.*/}
        <div style={{fontSize:"19px", margin:"50px 0 0 2px", color:"gray"}}>모두가하우징</div>
        <div style={{fontSize:"32px", marginBottom:"15px", color:"#101648"}}>힐링리버</div>

        <div className="container" style={{marginLeft:"0", padding:"0", width:"98%"}}>
          <div className="row">
            <div className="container" style={{margin:"0", padding:"5px", width:"50%"}}>
              <Image
              className="card-img-top"
              style={{borderRadius:"27px 0 0 27px", objectFit:"cover"}}
              alt="main-img"
              src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
              width={100}
              height={500}
              unoptimized={true}/>
            </div>
            <div className="col" style={{margin:"0px", padding:"0", width:"25%"}}>
              <div className="container" style={{margin:"0px", padding:"5px", width:"100%"}}>
                <Image
                  className="card-img-top"
                  style={{marginBottom:"5px", objectFit:"cover"}}
                  alt="main-img"
                  src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"
                  width={100}
                  height={245}
                  unoptimized={true}/>
                
                <Image
                  className="card-img-top"
                  style={{marginTop:"5px", objectFit:"cover"}}
                  alt="main-img"
                  src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg"
                  width={100}
                  height={245}
                  unoptimized={true}/>
              </div>
            </div>
            <div className="col" style={{margin:"0px", padding:"0", width:"25%"}}>
              <div className="container" style={{margin:"0px", padding:"5px", width:"100%"}}>
                <Image
                  className="card-img-top"
                  style={{marginBottom:"5px", borderRadius:"0 27px 0 0", objectFit:"cover"}}
                  alt="main-img"
                  src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver4.jpeg"
                  width={100}
                  height={245}
                  unoptimized={true}/>
                
                <Image
                  className="card-img-top"
                  style={{marginTop:"5px", borderRadius:"0 0 27px 0", objectFit:"cover"}}
                  alt="main-img"
                  src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver5.jpeg"
                  width={100}
                  height={245}
                  unoptimized={true}/>
              </div>
            </div>
          </div>
        </div>

        <div className="container row" style={{/*backgroundColor:"green",*/ width:"100%"}}>
            <div className="container" style={{/*backgroundColor:"red",*/ width:"65%", minWidth:"400px", padding:"0", margin:"0"}}>
                <div className="badge" style={{padding:"10px", margin:"30px 0", backgroundColor:"lightGray", color:"gray", fontSize:"16px"}}>
                지금까지 20명이 살아봤어요!
                </div>
                <div style={{color:"gray", fontSize:"14px"}}>후기(17)</div><span style={{float:"right", marginRight:"20px", color:"black", fontSize:"14px"}}>전체보기</span>
                <div className="container" style={{/*backgroundColor:"aqua",*/ width:"100%", minWidth:"400px",fontSize:"14px", color:"gray", overflow:"scroll"}}>
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
                        style={{borderRadius:"10px", objectFit:"cover"}}
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
                        style={{borderRadius:"10px", objectFit:"cover"}}
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

            <div style={{fontWeight:"600", lineHeight:"30px"}}>
                <div style={{marginTop:"80px", fontSize:"25px", color:"#101648"}}>
                    체험 조건
                </div>
                <div style={{fontSize:"18px", marginTop:"30px", padding:"10px"}}>
                ✅  체험 후기 작성<br/>✅  SNS에 체험 후기 작성(유튜브, 블로그, 카페 등)
                </div>

                <div style={{marginTop:"80px", fontSize:"25px", color:"#101648"}}>
                    보증금 반환 조건
                </div>
                <div style={{fontSize:"18px", margin:"30px 0 60px 0", padding:"10px"}}>
                ✅  체험 조건 이수<br/>✅  청소 상태 원상복구<br/>✅  가이드라인 준수
                </div>
                <div className="container" style={{width:"100%", backgroundColor:"lightGray", marginBottom:"200px", padding:"0"}}>
                  <div style={{margin:"0", fontSize:"25px", color:"#101648", paddingTop:"50px"}}>
                      힐링리버 소개
                  </div>
                  <div style={{fontSize:"18px", marginTop:"30px", padding:"10px"}}>
                  힐링리버는 강원도 화천군에 위치한 모두가하우징의 체험형 홍보관입니다.<br/>전원주택의 삶을 꿈꾸시는 분들에게 전원생활과 모두가하우징의 주택을 체험하실 수 있도록 하기 위해 제공합니다.
                  </div>
                  <div style={{margin:"0", fontSize:"25px", color:"#101648", paddingTop:"50px"}}>
                      편의시설
                  </div>
                  <div style={{fontSize:"18px", marginTop:"30px", padding:"10px"}}>
                  ● TV<br/>● 침대<br/>● 침구<br/>● 싱크대<br/>● 하이라이트<br/>● 조리도구<br/>● 전자레인지
                  </div>
                  <div style={{margin:"0", fontSize:"25px", color:"#101648", paddingTop:"50px"}}>
                      주의사항
                  </div>
                  <div style={{fontSize:"18px", marginTop:"30px", padding:"10px"}}>
                  ● 2층과 주변 주택들에 주민들이 살고 있으니 늦은 밤에는 정숙해주세요.<br/>
                  ● 전원생활 체험 주택입니다. 전문 숙소가 아니기에 불편함이 있을 수 있습니다.<br/>
                  ● 지속적인 무료 서비스 제공을 위해, 퇴실 시 다음 사람을 위해 기존 상태와 동일하게 청소해주셔야 합니다.<br/>
                  ● 화장지, 수건 등 필요한 세면도구는 지참해주시길 바랍니다.
                  </div>
                </div>
            </div>
                
            
          </div>

          {/*하단 우측 리모컨 비스무리한 것*/}
          <div className="container" style={{/*backgroundColor:"purple",*/ width:"35%", minWidth:"300px", padding:"0", margin:"0"}}>
            <div className="card" style={{width:"80%", minWidth:"300px", height:"500px", border:"1px solid lightGray", float:"right", borderRadius:"35px", padding:"10px", marginTop:"30px"}}>
                <div className="container row" style={{width:"100%",padding:"10px", margin:"45px 0 0 0"}}>
                    <div className="container" style={{width:"50%", textAlign:"right"}}>21평</div>
                    <div className="container" style={{width:"50%", textAlign:"right"}}>2개</div>
                </div>
                <div className="container row" style={{width:"100%",padding:"10px", margin:"45px 0 0 0"}}>
                    <div className="container" style={{width:"50%", textAlign:"right"}}>최대 5명</div>
                    <div className="container" style={{width:"50%", textAlign:"right"}}>최대 3일</div>
                </div>
                <div className="container row" style={{width:"100%",padding:"10px", margin:"45px 0 0 0"}}>
                    <div className="container" style={{width:"50%", textAlign:"right"}}></div>
                    <div className="container" style={{width:"50%", textAlign:"right"}}>무료</div>
                </div>
                <div className="container row" style={{width:"100%",padding:"10px", margin:"45px 0 0 0"}}>
                    <div className="container" style={{width:"50%", textAlign:"right"}}></div>
                    <div className="container" style={{width:"50%", textAlign:"right"}}>5만원</div>
                </div>
                <div className="container" style={{width:"100%",padding:"10px", margin:"45px 0 0 0"}}>
                    <div className="button" style={{width:"100%", height:"50px", borderRadius:"10px", padding:"10px", backgroundColor:"#101648", color:"white", fontSize:"20px", fontWeight:"600", textAlign:"center"}}>
                        체험 예약 신청하기
                    </div>
                </div>
            </div>
          </div>

        </div>

    </main>
    );
}