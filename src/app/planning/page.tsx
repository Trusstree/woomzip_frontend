"use client"

import React, { useState } from "react";
import SelectBox from "@/components/planning/SelectBox";
import StateDropdown from "@/components/planning/StateDropdown";
import PriceBox from "@/components/planning/priceBox";
import {RouteButton} from "@/components/living/RouteButton";


export default function Planning() {
  const [system, setSystem] = useState("");
  const [slope, setSlope] = useState("");
  const [road, setRoad] = useState("");

  return <main>
    <div style={{ fontSize: "19px", marginTop: "50px", color: "gray" }}>트러스에서 꼼꼼히 계획해보세요!</div>
    <div style={{ fontSize: "32px", marginBottom: "30px", color: "#101648" }}>총 건축비용 계산기</div>

    <div className="row">
      <div style={{width:"70%", minWidth:"375px"}}>
        <div style={{marginBottom:"100px"}}>
          <hr/>
          <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>선택하신 집이 맞나요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>찾아보기 탭에서 마음에 드는 주택을 찾아보세요.</div>
          <button style={{width:"25%", height:"300px", borderRadius:"10px"}}>
            {/*집 카드 띄워주기*/}
          </button>
        </div>

        <div style={{marginBottom:"100px"}}>
          <hr/>
          <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>어떻게 사실 건가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>방식을 선택해주세요.</div>
          <SelectBox title={"농막"} text={"건축 인허가가 필요 없습니다."} value={"농막"} data={system} setData={setSystem} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"} />
          <SelectBox title={"주택"} text={"건축 인허가가 필요합니다."} value={"주택"} data={system} setData={setSystem} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"} />
        </div>

        <div style={{marginBottom:"100px"}}>
          <hr/>
          <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>어디에 지으실 건가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>아직 구매 전이라면 원하시는 위치를 알려주세요.</div>
          <StateDropdown />
          
        </div>

        <div style={{marginBottom:"100px"}}>
          <hr/>
          <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>토지 면적을 알려주세요.</div>
          <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>아직 구매 전이라면 원하시는 면적을 알려주세요.</div>
          <StateDropdown />
          
        </div>

        <div style={{marginBottom:"100px"}}>
          <hr/>
          <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>토지 경사도 상태는 어떤가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>대략적인 느낌을 알려주세요.</div>
          <SelectBox title={"평평함"} text={"토목공사가 필요 없습니다."} value={"평평함"} data={slope} setData={setSlope} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"} />
          <SelectBox title={"조금 경사짐"} text={"토목공사가 필요합니다."} value={"조금 경사짐"} data={slope} setData={setSlope} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"} />
          <SelectBox title={"많이 경사짐"} text={"비용이 더 많이 소요됩니다."} value={"많이 경사짐"} data={slope} setData={setSlope} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg"} />
        </div>

        <div style={{marginBottom:"100px"}}>
          <hr/>
          <div style={{ fontSize: "25px", fontWeight:"500", color: "#101648" }}>토지 진입로 상태는 어떤가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px", color: "gray" }}>대략적인 느낌을 알려주세요.</div>
          <SelectBox title={"넓음"} text={"기본 배송비가 소요됩니다."} value={"평평함"} data={road} setData={setRoad} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"} />
          <SelectBox title={"조금 좁음"} text={"추가 트럭 및 인력이 필요합니다."} value={"조금 경사짐"} data={road} setData={setRoad} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"} />
          <SelectBox title={"많이 좁음"} text={"현장건축이 필요할 수 있습니다."} value={"많이 경사짐"} data={road} setData={setRoad} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg"} />
        </div>
      </div>

      

      <div style={{width:"25%", minWidth:"250px"}}>
        <PriceBox system={system} slope={slope} road={road}/>
        < RouteButton url={"/planning/application"} text={"이 견적으로 프로젝트 시작하기"}/>
      </div>
    </div>

  </main>;
}
