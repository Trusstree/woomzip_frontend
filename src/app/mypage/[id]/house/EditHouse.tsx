"use client"

import { postHouse } from "@/apis/HouseAPI";
import { postPrice } from "@/apis/priceAPI";
import { ImageComponent } from "@/components/forms/ImageComponent";
import { RadioButtonComponent } from "@/components/forms/RadioButtonComponent";
import { TextAreaComponent } from "@/components/forms/TextAreaComponent";
import { TextBoxComponent } from "@/components/forms/TextBoxComponent";
import { PriceInputComponent } from "@/components/forms/PriceInputComponent";
import { PriceTextComponent } from "@/components/forms/PriceComponent";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { HouseInfoType, specificationInfoType, specificityInfoType } from "@/types/house";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

export default function AddHouse() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [houseInfo, setHouseInfo] = useState({} as HouseInfoType)
  const [optionInfo, setOptionInfo]=useState([] as Array<specificityInfoType>)
  const [specificationInfo, setSpecificationInfo]=useState({} as specificationInfoType)
  const [priceList, setPriceList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const handleText = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    // if (e) e.preventDefault();

    //func((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const submitFunction = async () => {

    const [data, error] = await postHouse({
      seller_id: 1,
      house_info: houseInfo,
      option_info: optionInfo,
      specification_info: specificationInfo
    });

    if(error){
      alertError("에러!", "뭐가 빠진 게 있나봐요 ㅠㅠ");
      return;
    }
    
    priceList.forEach(async (e)=>{
      const [priceData, priceError] = await postPrice({...e, house_id:data.idx});
      if(priceError) console.error(priceError);
      else console.log(priceData);
    });

    alertSuccess(houseInfo["house_name"],"제대로 들어갔어요~");
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
            <TextBoxComponent className={"my-2"} title={"제품명 (최대 15자)"} text={"house_name"} data={houseInfo} onChange={handleText}/>
            <TextBoxComponent className={"my-2"} title={"실제 사용 평수 (단위: 평)"} text={"floor"} data={houseInfo} onChange={handleText}/>
            <TextBoxComponent className={"my-2"} title={"건축면적"} text={"gunchuckSpace"} data={houseInfo} onChange={handleText}/>
            <TextBoxComponent className={"my-2"} title={"기본 가격(부가세 포함)"} text={"base_price"} data={houseInfo} onChange={handleText} />
            <TextBoxComponent className={"my-2"} title={"할인율 (없으면 0 입력)"} text={"discount_rate"} data={houseInfo} onChange={handleText} />
            <TextBoxComponent className={"my-2"} title={"price_variation"} text={"price_variation"} data={houseInfo} onChange={handleText} />
            
            {/* floor */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">층수</span>
              <div className="d-flex">
                <RadioButtonComponent name={"floor"} title={"1층"} data={1} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"floor"} title={"2층"} data={2} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"floor"} title={"3층 이상"} data={3} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* room_count */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">방 개수</span>
              <div className="d-flex">
                <RadioButtonComponent name={"room_count"} title={"1개"} data={1} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"room_count"} title={"2개"} data={2} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"room_count"} title={"3개"} data={3} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"room_count"} title={"4개"} data={4} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"room_count"} title={"5개 이상"} data={5} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* toilet_count */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">화장실 개수</span>
              <div className="d-flex">
                <RadioButtonComponent name={"toilet_count"} title={"1개"} data={1} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"toilet_count"} title={"2개"} data={2} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"toilet_count"} title={"3개"} data={3} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"toilet_count"} title={"4개 이상"} data={4} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* estimate_duration */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">예상 소요 기간 (제작일 기준)</span>
              <div className="d-flex">
                <RadioButtonComponent name={"estimate_duration"} title={"1개월"} data={1} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"estimate_duration"} title={"2개월"} data={2} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"estimate_duration"} title={"3개월"} data={3} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"estimate_duration"} title={"4개월"} data={4} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"estimate_duration"} title={"5개월"} data={5} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"estimate_duration"} title={"6개월 이상"} data={6} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* warranty */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">AS 보증 기간</span>
              <div className="d-flex">
                <RadioButtonComponent name={"warranty"} title={"1개월"} data={1} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"warranty"} title={"2개월"} data={2} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"warranty"} title={"3개월"} data={3} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"warranty"} title={"4개월"} data={4} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"warranty"} title={"5개월"} data={5} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"warranty"} title={"6개월 이상"} data={6} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* hasModel */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">해당 제품 모델하우스 유/무</span>
              <div className="d-flex">
                <RadioButtonComponent name={"hasModel"} title={"yes"} data={"yes"} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"hasModel"} title={"no"} data={"no"} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            {/* hasModel */}
            <div className="my-2 d-flex flex-column">
              <span className="fs-5">해당 제품 모델하우스 유/무</span>
              <div className="d-flex">
                <RadioButtonComponent name={"hasModel"} title={"yes"} data={"yes"} onChange={handleText} className={"mx-2"} />
                <RadioButtonComponent name={"hasModel"} title={"no"} data={"no"} onChange={handleText} className={"mx-2"} />
              </div>
            </div>

            <TextAreaComponent className={"my-2"} title={"제품 설명"} text={"house_explanation"} data={houseInfo} onChange={handleText} placeholder={""}/>
            
            {/* 특이사항 */}
            {/* <div className="col-12 d-flex">
              <span className="col-2">특이사항</span>
              <div className="col-4 row">
                <AdminCheckboxComponent title={"다락"} name={"significant"} data={"darak"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent title={"발코니"} name={"significant"} data={"balcony"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent title={"옥상"} name={"significant"} data={"oksang"} onChange={handleText} className={"col-4"} />
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
        {/* <div
          className="mt-4 py-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h3 className="fw-bold mb-4">사진</h3>
          <AdminImageComponent className={"py-3"} data={imageList} name={"thumbnail"} title={"썸네일 사진"} setHouseData={setHouseData} />
          <AdminImageComponent className={"py-3"} data={houseData} name={"itemImage"} title={"제품 사진"} setHouseData={setHouseData} />
          <AdminImageComponent className={"py-3"} data={houseData} name={"detailImage"} title={"상세 정보 사진"} setHouseData={setHouseData} />
        </div> */}
      
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
            onClick={async ()=>{await submitFunction();}}>
            {"등록하기"}
          </button>
        </div>
      </div>

    </div>
  )
}
