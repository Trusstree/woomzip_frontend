"use client"

import React, { useState } from "react";
import SelectBox from "@/components/planning/SelectBox";
import SelectMiniBox from "@/components/planning/SelectMiniBox";
import SelectCityBox from "@/components/planning/SelectCityBox";
import PriceBox from "@/components/planning/PriceBox";
import {RouteButton} from "@/components/living/RouteButton";


export default function Planning() {
  const [system, setSystem] = useState("");
  const [slope, setSlope] = useState("");
  const [road, setRoad] = useState("");

  const [area, setArea] = useState("");
  const [city, setCity] = useState("");

  return <main>
    <div style={{ fontSize: "38px", margin: "120px 0", fontWeight:"600"}}>당신의 예상 건축비용,<br/>트러스가 알려드릴게요</div>

    <div className="row">
      <div style={{width:"70%", minWidth:"375px"}}>
        <div style={{marginBottom:"150px"}}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight:"600"}}>선택하신 집이 맞나요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px"}}>찾아보기 탭에서 마음에 드는 주택을 찾아보세요.</div>
          <button style={{width:"25%", height:"300px", borderRadius:"10px"}}>
            {/*집 카드 띄워주기*/}
          </button>
        </div>

        <div style={{marginBottom:"150px"}}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight:"600"}}>어떻게 사실 건가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px"}}>방식을 선택해주세요.</div>
          <SelectBox title={"농막"} text={"건축 인허가가 필요 없습니다."} value={"농막"} data={system} setData={setSystem} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"} />
          <SelectBox title={"주택"} text={"건축 인허가가 필요합니다."} value={"주택"} data={system} setData={setSystem} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"} />
        </div>

        <div style={{marginBottom:"150px"}}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight:"600"}}>어디에 지으실 건가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px"}}>아직 구매 전이라면 원하시는 위치를 알려주세요.</div>
          <SelectCityBox title={"경기도"} value={"2"} data={city} setData={setCity}/>
          <SelectCityBox title={"강원도"} value={"3"} data={city} setData={setCity}/>
          <SelectCityBox title={"충청북도"} value={"4"} data={city} setData={setCity}/>
          <SelectCityBox title={"충청남도"} value={"5"} data={city} setData={setCity}/>
          <SelectCityBox title={"경상북도"} value={"6"} data={city} setData={setCity}/>
          <SelectCityBox title={"경상남도"} value={"7"} data={city} setData={setCity}/>
          <SelectCityBox title={"전라북도"} value={"8"} data={city} setData={setCity}/>
          <SelectCityBox title={"전라남도"} value={"9"} data={city} setData={setCity}/>
          <SelectCityBox title={"제주도"} value={"10"} data={city} setData={setCity}/>

        </div>

        <div style={{marginBottom:"150px"}}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight:"600"}}>토지 면적을 알려주세요.</div>
          <div style={{ fontSize: "19px", marginBottom: "30px"}}>아직 구매 전이라면 원하시는 면적을 알려주세요.</div>
          <SelectMiniBox title={"50평 이하"} text={"~165m2"} value={"165"} data={area} setData={setArea}/>
          <SelectMiniBox title={"75평 이하"} text={"~248m2"} value={"248"} data={area} setData={setArea}/>
          <SelectMiniBox title={"100평 이하"} text={"~330m2"} value={"330"} data={area} setData={setArea}/>
          <SelectMiniBox title={"125평 이하"} text={"~413m2"} value={"413"} data={area} setData={setArea}/>
          <SelectMiniBox title={"150평 이하"} text={"~496m2"} value={"496"} data={area} setData={setArea}/>
          <SelectMiniBox title={"150평 초과"} text={"496m2~"} value={"500"} data={area} setData={setArea}/>
          
        </div>

        <div style={{marginBottom:"150px"}}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight:"600"}}>토지 경사도 상태는 어떤가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px"}}>대략적인 느낌을 알려주세요.</div>
          <SelectBox title={"평평함"} text={"토목공사가 필요 없습니다."} value={"평평함"} data={slope} setData={setSlope} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"} />
          <SelectBox title={"조금 경사짐"} text={"토목공사가 필요합니다."} value={"조금 경사짐"} data={slope} setData={setSlope} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"} />
          <SelectBox title={"많이 경사짐"} text={"비용이 더 많이 소요됩니다."} value={"많이 경사짐"} data={slope} setData={setSlope} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg"} />
        </div>

        <div style={{marginBottom:"150px"}}>
          <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight:"600"}}>토지 진입로 상태는 어떤가요?</div>
          <div style={{ fontSize: "19px", marginBottom: "30px"}}>대략적인 느낌을 알려주세요.</div>
          <SelectBox title={"넓음"} text={"기본 배송비가 소요됩니다."} value={"평평함"} data={road} setData={setRoad} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"} />
          <SelectBox title={"조금 좁음"} text={"추가 트럭 및 인력이 필요합니다."} value={"조금 경사짐"} data={road} setData={setRoad} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"} />
          <SelectBox title={"많이 좁음"} text={"현장건축이 필요할 수 있습니다."} value={"많이 경사짐"} data={road} setData={setRoad} img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg"} />
        </div>
      </div>

      

      <div style={{width:"25%", minWidth:"350px"}}>
        <PriceBox system={system} slope={slope} road={road}/>
        < RouteButton url={"/planning/application"} text={"이 견적으로 프로젝트 시작하기"}/>
      </div>
    </div>

  </main>;
}
