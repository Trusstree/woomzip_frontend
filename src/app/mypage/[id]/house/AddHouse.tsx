"use client"

import { postHouse } from "@/apis/HouseAPI";
import { postPrice } from "@/apis/priceAPI";
import { AdminImageComponent } from "@/components/admin/AdminImageComponent";
import { AdminRadioComponent } from "@/components/admin/AdminRadioComponent";
import { AdminTextComponent } from "@/components/admin/AdminTextComponent";
import { PriceInputComponent } from "@/components/admin/PriceInputComponent";
import { PriceTextComponent } from "@/components/admin/PriceTextComponent";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { HouseDataType } from "@/types/house";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

export default function AddHouse() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [houseData, setHouseData] = useState({
    "seller_id":1,
    "house_info":{
      "house_name": "모듈러 하우스1",
      "house_explanation": "정말 좋은 집이에요~~",
      "floor":2,
      "building_area": 20,
      "total_floor_area": 45,
      "room_count": 3,
      "toilet_count": 1,
      "estimate_duration": 4,
      "warranty": "24개월",
      "has_model": true,
      "base_price": 10000000,
      "discount_rate": 5,
      "price_variation": "이렇고 저렇고 이렇고 저러니까 가격이 더 증가할거야.",
      "specificity_info": {
        "default": ["다락방", "배란다", "데크"],
        "etc" : "기타 특이사항" // if etc is not null
      }
    },
    "option_info": [
      {
          "option_type": "인덕션",
          "option_product_name": "뜨끈한 인덕션",
          "option_product_price": 40000
      },
      {
          "option_type": "냉장고",
          "option_product_name": "시원한 냉장고",
          "option_product_price": 300000
      }
    ],
    "specification_info": {
      "framework": {
        "default": ["철근콘크리트"],
        "etc" : null // if etc is not null
      },
      "exterior_material" : {
        "default": ["써모사이딩", "루버강판"],
        "etc" : "다른 외장재"
      },
      "roofing_material" : {
        "default" : ["리얼 징크"],
        "etc" : "다른 지붕재"
      },
      "insulation_material" : {
        "default" : ["스카이텍"],
        "etc" :"다른 단열재"
      },
      "interior_material" : {
        "default": ["합지도배","강화마루"],
        "etc" : "다른 내장재"
      },
      "window" : {
        "default" : ["미국식"],
        "etc" :"다른 창호"
      },
      "heating" : {
        "default" : ["전기탄소필름"],
        "etc" :"다른 난방"
      },
      "furniture" : {
        "default" : ["수납장"],
        "etc" :"다른 가구"
      },
      "toilet" : {
        "default" : ["온수기", "양변기", "세면대","샤워부스"],
        "etc" :"다른 화장실 옵션"
      },
      "kitchen" : {
        "default" : ["싱크대","인덕션","가스레인지"],
        "etc" :"다른 주방 옵션"
      },
      "lighting" : {
        "default" : ["LED"],
        "etc" :"다른 조명"
      },
    "etc_info": "추가적으로 이런거 이런게 있어요.",
    "specification_description": "제품 사양에 대한 설명입니다."
  }
  });

  const [priceList, setPriceList] = useState([]);

  useEffect(()=>{
    (async ()=>{
      setHouseData((oldValues) => ({...oldValues, ["company"]: session?.user?.name}));
    })();
  },[session]);

  const handleText = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    // if (e) e.preventDefault();

    setHouseData((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const submitFunction = async (houseData: any) => {
    if(typeof houseData["company"]!="string") {alertError("company","type을 다시 한 번 확인해주세요~"); return;}

    if(typeof houseData["title"]!="string") {alertError("title","type을 다시 한 번 확인해주세요~"); return;}
    houseData["price"]=Number(houseData["price"]);
    if(typeof houseData["price"]!="number") {alertError("price","type을 다시 한 번 확인해주세요~"); return;}
    houseData["discount"]=Number(houseData["discount"]);
    if(typeof houseData["discount"]!="number") {alertError("discount","type을 다시 한 번 확인해주세요~"); return;}

    houseData["floorSpace"]=Number(houseData["floorSpace"]);
    if(typeof houseData["floorSpace"]!="number") {alertError("floorSpace","type을 다시 한 번 확인해주세요~"); return;}
    houseData["gunchuckSpace"]=Number(houseData["gunchuckSpace"]);
    if(typeof houseData["gunchuckSpace"]!="number") {alertError("gunchuckSpace","type을 다시 한 번 확인해주세요~"); return;}
    houseData["roomNumber"]=Number(houseData["roomNumber"]);
    if(typeof houseData["roomNumber"]!="number") {alertError("roomNumber","type을 다시 한 번 확인해주세요~"); return;}
    houseData["toiletNumber"]=Number(houseData["toiletNumber"]);
    if(typeof houseData["toiletNumber"]!="number") {alertError("toiletNumber","type을 다시 한 번 확인해주세요~"); return;}

    houseData["duration"]=Number(houseData["duration"]);
    if(typeof houseData["duration"]!="number") {alertError("duration","type을 다시 한 번 확인해주세요~"); return;}
    houseData["afterService"]=Number(houseData["afterService"]);
    if(typeof houseData["afterService"]!="number") {alertError("afterService","type을 다시 한 번 확인해주세요~"); return;}

    if(typeof houseData["moduler"]!="string") {alertError("moduler","type을 다시 한 번 확인해주세요~"); return;}
    if(typeof houseData["hasModel"]!="string") {alertError("hasModel","type을 다시 한 번 확인해주세요~"); return;}

    if(typeof houseData["thumbnail"]!="string") {alertError("thumbnail","type을 다시 한 번 확인해주세요~"); return;}
    if(typeof houseData["detailImage"]!="string") {alertError("detailImage","type을 다시 한 번 확인해주세요~"); return;}
    if(typeof houseData["itemImage"]!="string") {alertError("itemImage","type을 다시 한 번 확인해주세요~"); return;}
   
    const [data, error] = await postHouse(houseData);
    if(error){
      alertError("에러!", "뭐가 빠진 게 있나봐요 ㅠㅠ");
      return;
    }
    
    priceList.forEach(async (e)=>{
      console.log({...e, house_id:data.idx});
      const [priceData, priceError] = await postPrice({...e, house_id:data.idx});
      if(priceError) console.error(priceError);
      else console.log(priceData);
    });

    alertSuccess(houseData["title"],"제대로 들어갔어요~");
    router.push(pathname.replace("/house",""));
  }
  
  return (
    <div>
      <div className="d-flex justify-content-start flex-column mt-5">
        <h1 className="fw-bold">데이터를 입력해주세요</h1>
        <div
          className="py-4 my-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h3 className="fw-bold mb-4">기본 데이터</h3>
          <div className="d-flex flex-column">
            <AdminTextComponent className={"my-2"} title={"제품명 (최대 15자)"} text={"title"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"my-2"} title={"실제 사용 평수 (단위: 평)"} text={"floorSpace"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"my-2"} title={"건축면적"} text={"gunchuckSpace"} data={houseData} onChange={handleText}/>

            {/* roomNumber */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">방 개수</span>
              <div className="d-flex">
                <AdminRadioComponent id={"roomNumber1"} name={"roomNumber"} title={"1개"} data={1} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"roomNumber2"} name={"roomNumber"} title={"2개"} data={2} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"roomNumber3"} name={"roomNumber"} title={"3개"} data={3} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"roomNumber4"} name={"roomNumber"} title={"4개"} data={4} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"roomNumber5"} name={"roomNumber"} title={"5개"} data={5} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* toiletNumber */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">화장실 개수</span>
              <div className="d-flex">
                <AdminRadioComponent id={"toiletNumber1"} name={"toiletNumber"} title={"1개"} data={1} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"toiletNumber2"} name={"toiletNumber"} title={"2개"} data={2} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"toiletNumber3"} name={"toiletNumber"} title={"3개"} data={3} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"toiletNumber4"} name={"toiletNumber"} title={"4개"} data={4} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"toiletNumber5"} name={"toiletNumber"} title={"5개"} data={5} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* duration */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">예상 소요 기간 (제작일 기준)</span>
              <div className="d-flex">
                <AdminRadioComponent id={"duration1"} name={"duration"} title={"1개월"} data={1} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"duration2"} name={"duration"} title={"2개월"} data={2} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"duration3"} name={"duration"} title={"3개월"} data={3} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"duration4"} name={"duration"} title={"4개월"} data={4} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"duration5"} name={"duration"} title={"5개월"} data={5} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"duration6"} name={"duration"} title={"6개월 이상"} data={6} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* afterService */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">AS 보증 기간</span>
              <div className="d-flex">
                <AdminRadioComponent id={"afterService1"} name={"afterService"} title={"1개월"} data={1} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"afterService2"} name={"afterService"} title={"2개월"} data={2} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"afterService3"} name={"afterService"} title={"3개월"} data={3} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"afterService4"} name={"afterService"} title={"4개월"} data={4} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"afterService5"} name={"afterService"} title={"5개월"} data={5} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"afterService6"} name={"afterService"} title={"6개월 이상"} data={6} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* hasModel */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">해당 제품 모델하우스 유/무</span>
              <div className="d-flex">
                <AdminRadioComponent id={"hasModelYes"} name={"hasModel"} title={"yes"} data={"yes"} onChange={handleText} className={"mx-2"} />
                <AdminRadioComponent id={"hasModelNo"} name={"hasModel"} title={"no"} data={"no"} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            <AdminTextComponent className={"my-2"} title={"기본 가격(부가세 포함)"} text={"price"} data={houseData} onChange={handleText} />
            <AdminTextComponent className={"my-2"} title={"할인율 (없으면 0 입력)"} text={"discount"} data={houseData} onChange={handleText} />
            <AdminTextComponent className={"my-2"} title={"제품 설명"} text={"explanation"} data={houseData} onChange={handleText}/>
            
            {/* 특이사항 */}
            {/* <div className="col-12 d-flex">
              <span className="col-2">특이사항</span>
              <div className="col-4 row">
                <AdminCheckboxComponent id={"darak"} title={"다락"} name={"significant"} data={"darak"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent id={"balcony"} title={"발코니"} name={"significant"} data={"balcony"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent id={"oksang"} title={"옥상"} name={"significant"} data={"oksang"} onChange={handleText} className={"col-4"} />
              </div>
            </div> */}
          </div>
        </div>
        
        {/* 가격 */}
        <div
          className="mt-4 py-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h3 className="fw-bold mb-4">가격</h3>
          
          <div className={`mt-2 row`}>
            <div className="fs-5 col-4">이름</div>
            <div className="fs-5 col-2">카테고리</div>
            <div className="fs-5 col-4">가격</div>
          </div>
          
          <div className="row">
            <PriceInputComponent setPriceList={setPriceList} className={""} />
          </div>
          
          <div className="w-100 d-flex flex-column">
            {priceList.length>0 && priceList.map((e, i)=>{
              return <PriceTextComponent key={i} index={i} price={e} setPriceList={setPriceList} />
            })}
          </div>
        </div>

        {/* 사진 */}
        <div
          className="mt-4 py-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h3 className="fw-bold mb-4">사진</h3>
          <AdminImageComponent className={"py-3"} data={houseData} name={"thumbnail"} title={"썸네일 사진"} setHouseData={setHouseData} />
          <AdminImageComponent className={"py-3"} data={houseData} name={"itemImage"} title={"제품 사진"} setHouseData={setHouseData} />
          <AdminImageComponent className={"py-3"} data={houseData} name={"detailImage"} title={"상세 정보 사진"} setHouseData={setHouseData} />
        </div>
      
        {/* submit */}
        <div className="mt-4 py-4 d-flex justify-content-center flex-column"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <div className="mt-2 fw-bold fs-5" style={{"color":"#101648"}}>
            마지막으로 작성 정보를 다시 한 번 확인해주세요.<br/>
            수정 필요가 있다면 검수 후, 수정 요청드릴 수 있습니다.<br/>
            (수정은 우측 상단 '마이페이지'에서 가능합니다.)<br/>
            추가로 표현하고 싶은데, 해당사항이 없다면 전화주세요!
          </div>
          <button type="button"
            name="submit"
            style={{backgroundColor:"#101648"}}
            className={`my-5 px-5 py-3 btn btn-lg rounded-lg text-white fw-bold fs-3`}
            onClick={async ()=>{await submitFunction(houseData);}}>
            {"등록하기"}
          </button>
        </div>
      </div>

    </div>
  )
}
