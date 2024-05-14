"use client"

import React, { useState } from "react";
import SelectBox2 from "@/components/planning/SelectBox2"



export default function application() {
    const [service, setService] = useState("");
    const [timeline, setTimeline] = useState("");
    const [finance, setFinance] = useState("");

  return <main>
    <div style={{ fontSize: "19px", marginTop: "50px", color: "gray" }}>트러스가 도와드릴게요.</div>
    <div style={{ fontSize: "32px", marginBottom: "100px", color: "#101648" }}>당신의 꿈을 현실로 만드세요!</div>
        
    <div style={{marginBottom:"100px"}}>
        <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>어떤 도움이 필요하신가요?</div>
        <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>대략적인 느낌을 알려주세요.</div>
        <SelectBox2 title={"안심 계약"} text={"계약과정을 안심할 수 있습니다."} value={"안심계약"} data={service} setData={setService}/>
        <SelectBox2 title={"이해관계자 연결"} text={"건축사, 토목사, 전문건설업체들을 이어드립니다."} value={"이해관계자 연결"} data={service} setData={setService}/>
        <SelectBox2 title={"통합 패키지"} text={"모든 과정을 밀착 관리합니다."} value={"통합 패키지"} data={service} setData={setService}/>
    </div>

    <div style={{marginBottom:"100px"}}>
        <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>언제 시작하실 계획이신가요?</div>
        <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>대략적인 기간을 알려주세요.</div>
        <SelectBox2 title={"최대한 빠르게"} text={"4~10주 내"} value={"최대한 빠르게"} data={timeline} setData={setTimeline}/>
        <SelectBox2 title={"1년 이내"} text={"12주 내"} value={"1년 이내"} data={timeline} setData={setTimeline}/>
        <SelectBox2 title={"계획 없음"} text={"견적만 알아보기"} value={"계획 없음"} data={timeline} setData={setTimeline}/>
    </div>

    <div style={{marginBottom:"100px"}}>
        <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>건축비를 위해 도움이 필요하신가요?</div>
        <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>은행권 대출을 연계해드립니다.</div>
        <SelectBox2 title={"필요 없습니다."} text={"스스로 확보하겠습니다."} value={"안심계약"} data={finance} setData={setFinance}/>
        <SelectBox2 title={"고민 중입니다."} text={"연계 서비스를 확인해보겠습니다."} value={"이해관계자 연결"} data={finance} setData={setFinance}/>
        <SelectBox2 title={"필요합니다."} text={"금융 서비스에 관심이 있습니다."} value={"통합 패키지"} data={finance} setData={setFinance}/>
    </div>
    </main>
}