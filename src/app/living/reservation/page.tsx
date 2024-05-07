import Image from "next/image";
import React from 'react';
import CalenderForm from '@/components/test/Calender'; // CalenderForm 컴포넌트 import 수정
import { CheckboxComponent } from "@/components/forms/CheckboxComponent";


export default function Reservation() {

    return (
        <main>
            <div style={{fontSize:"19px", margin:"50px 0 0 2px", color:"gray"}}>모두가하우징</div>
            <div style={{fontSize:"32px", marginBottom:"15px", color:"#101648"}}>힐링리버</div>
            <div className="container" style={{margin:"0", padding:"0", width:"100%"}}>
                <Image
                    className="card-img-top"
                    style={{borderRadius:"25px", objectFit:"cover"}}
                    alt="main-img"
                    src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"
                    width={100}
                    height={500}
                    unoptimized={true}
                />
            </div>
            <div style={{fontSize:"32px", margin:"50px 0 15px 0", color:"#101648"}}>예약하기</div>
            <div className="container row" style={{width:"100%", marginBottom:"350px"}}>
                <div className="container" style={{width:"400px", margin:"0 0 20px 0"}}>
                    <CalenderForm /> {/* CalenderForm 컴포넌트를 JSX에서 올바르게*/}
                </div>
                <div className="container" style={{width:"100%", maxWidth:"870px", margin:"0", float:"left", color:"gray"}}>
                    <div className="container" style={{width:"100%"}}>
                        <div className="container row" style={{width:"100%", alignItems:"center"}}>
                            <div className="container" style={{width:"100px", margin:"0"}}>날짜</div>
                            <input className="container" style={{border:"none", width:"75%", height:"30px", padding:"0", margin:"0"}} placeholder={"ex) 05.12~05.14"}></input>
                        </div>
                        <hr/>
                    </div>
                    <div className="container" style={{width:"100%"}}>
                        <div className="container row" style={{width:"100%", alignItems:"center"}}>
                            <div className="container" style={{width:"100px", margin:"0"}}>인원</div>
                            <input className="container" style={{border:"none", width:"75%", height:"30px", padding:"0", margin:"0"}} placeholder={"ex) 3"}></input>
                        </div>
                        <hr/>
                    </div>
                    <div className="container" style={{width:"100%"}}>
                        <div className="container row" style={{width:"100%", alignItems:"center"}}>
                            <div className="container" style={{width:"100px", margin:"0"}}>이름</div>
                            <input className="container" style={{border:"none", width:"75%", height:"30px", padding:"0", margin:"0"}} placeholder={"ex) 홍길동"}></input>
                        </div>
                        <hr/>
                    </div>
                    <div className="container" style={{width:"100%"}}>
                        <div className="container row" style={{width:"100%", alignItems:"center"}}>
                            <div className="container" style={{width:"100px", margin:"0"}}>전화번호</div>
                            <input className="container" style={{border:"none", width:"75%", height:"30px", padding:"0", margin:"0"}} placeholder={"ex) 010-1234-5678"}></input>
                        </div>
                        <hr/>
                    </div>
                    <div className="container" style={{width:"100%"}}>
                        <div className="container row" style={{width:"100%", alignItems:"center"}}>
                            <div className="container" style={{width:"100px", margin:"0"}}>방문목적</div>
                            <input className="container" style={{border:"none", width:"75%", minHeight:"100px", padding:"0", margin:"0"}} placeholder={"최대한 구체적으로 적어주세요!"}></input>
                        </div>
                        <hr/>
                    </div>
                    <div className="container row" style={{width:"500px", margin:"20px 0"}}>
                        <div className="container" style={{width:"350px", margin:"0"}}>힐링리버의 체험 조건을 확인하였고, 동의합니다.</div>
                        <input className="container" style={{border:"none", width:"50px", padding:"0", margin:"0"}} type="checkbox"></input>
                    </div>
                    <button 
                        style={{width:"400px", height:"50px", borderRadius:"10px", padding:"10px", backgroundColor:"#101648", color:"white", fontSize:"20px", fontWeight:"600", textAlign:"center"}}
                        >예약 요청하기</button>
                </div>
            </div>
        </main>
    )}