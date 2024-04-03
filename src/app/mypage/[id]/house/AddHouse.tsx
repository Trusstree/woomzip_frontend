"use client"

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { postHouse } from "@/apis/HouseAPI";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { HouseInfoType, specificationInfoType, specificityInfoType } from "@/types/house";
import { RadioComponent } from "@/components/forms/RadioComponent";
import { SelectComponent } from "@/components/forms/SelectComponent";
import { ImageComponent } from "@/components/forms/ImageComponent";
import { ImageInputComponent } from "@/components/forms/ImageInputComponent";
import { TextAreaComponent } from "@/components/forms/TextAreaComponent";
import { TextBoxComponent } from "@/components/forms/TextBoxComponent";
import { PriceInputComponent } from "@/components/forms/PriceInputComponent";
import { PriceComponent } from "@/components/forms/PriceComponent";

export default function AddHouse() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [houseInfo, setHouseInfo] = useState({} as HouseInfoType);
  const [optionInfo, setOptionInfo]=useState([] as Array<any>);
  const [specificationInfo, setSpecificationInfo]=useState({} as specificationInfoType);
  const [imageList, setImageList] = useState([]);

  const handleHouse = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    if(e) e.preventDefault();
    setHouseInfo((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const handleOption = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    if(e) e.preventDefault();
    setOptionInfo((oldValues) => ([...oldValues, e.target.value]));
    return;
  }

  const handleSpecification = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    if(e) e.preventDefault();
    setSpecificationInfo((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const submitFunction = async () => {
    const [data, error] = await postHouse({
      seller_id: 1,
      house_info: houseInfo,
      option_info: optionInfo,
      specification_info: specificationInfo,
      house_image: imageList
    });

    console.log({
      seller_id: 1,
      house_info: houseInfo,
      option_info: optionInfo,
      specification_info: specificationInfo,
      house_image: imageList
    });

    if(error){
      alertError("에러!", "뭐가 빠진 게 있나봐요 ㅠㅠ");
      return;
    }
    
    alertSuccess(houseInfo["house_name"],"제대로 들어갔어요~");
    //router.push(pathname.replace("/house",""));
  }
  
  return (
    <div>
      <div className="d-flex justify-content-start flex-column mt-5">
        <h1 className="fw-bold" style={{color:"#101648"}}>집 데이터 추가</h1>
        <div
          className="py-4 my-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h3 className="fw-bold mb-4" style={{color:"#101648"}}>제품 기본 정보를 입력해주세요.</h3>
          <div className="d-flex flex-column">
            <TextBoxComponent className={"my-2"} title={"제품명 (최대 15자)"} text={"house_name"} data={houseInfo} onChange={handleHouse}/>
            <TextBoxComponent className={"my-2"} title={"실제 사용 평수 (단위: 평)"} text={"floor"} data={houseInfo} onChange={handleHouse}/>
            <TextBoxComponent className={"my-2"} title={"건축면적"} text={"gunchuckSpace"} data={houseInfo} onChange={handleHouse}/>
            <div className="row">
              <TextBoxComponent className={"col-8 my-2"} title={"기본 가격(부가세 포함)"} text={"base_price"} data={houseInfo} onChange={handleHouse} />
              <TextBoxComponent className={"col-4 my-2"} title={"할인율 (없으면 0 입력)"} text={"discount_rate"} data={houseInfo} onChange={handleHouse} />
            </div>
            
            <TextBoxComponent className={"my-2"} title={"price_variation"} text={"price_variation"} data={houseInfo} onChange={handleHouse} />
            
            {/* floor */}
            <RadioComponent
              title={"층수"}
              name={"floor"}
              onChange={handleHouse}
              data={[
                {title:"1층", data:1},
                {title:"2층", data:2},
                {title:"3층 이상", data:3}
              ]}
            />

            {/* room_count */}
            <RadioComponent
              title={"방 개수"}
              name={"room_count"}
              onChange={handleHouse}
              data={[
                {title:"1개", data:1},
                {title:"2개", data:2},
                {title:"3개", data:3},
                {title:"4개", data:4},
                {title:"5개 이상", data:5}
              ]}
            />

            {/* toilet_count */}
            <RadioComponent
             title={"화장실 개수"}
             name={"toilet_count"}
             onChange={handleHouse}
              data={[
                {title:"1개", data:1},
                {title:"2개", data:2},
                {title:"3개", data:3},
                {title:"4개 이상", data:4}
              ]}
            />

            {/* estimate_duration */}
            <RadioComponent
              title={"예상 소요 기간 (제작일 기준)"}
              name={"estimate_duration"}
              onChange={handleHouse}
              data={[
                {title:"1개월", data:1},
                {title:"2개월", data:2},
                {title:"3개월", data:3},
                {title:"4개월", data:4},
                {title:"5개월", data:5},
                {title:"6개월 이상", data:6}
              ]}
            />

            {/* warranty */}
            <RadioComponent
              title={"AS 보증 기간"}
              name={"warranty"}
              onChange={handleHouse}
              data={[
                {title:"1개월", data:1},
                {title:"2개월", data:2},
                {title:"3개월", data:3},
                {title:"4개월", data:4},
                {title:"5개월", data:5},
                {title:"6개월 이상", data:6}
              ]}
            />

            {/* hasModel */}
            <RadioComponent
              title={"해당 제품 모델하우스 유/무"}
              name={"has_model"}
              onChange={handleHouse}
              data={[
                {title:"예", data:true},
                {title:"아니오", data:false}
              ]}
            />

            {/* 특이사항 */}
            <SelectComponent
              title={"특이사항 (다중선택 가능)"}
              name={"specificity_info"}
              onChange={handleHouse}
              dataList={["다락방","발코니","배란다","옥상","데크",]}
            />

            <TextAreaComponent className={"my-2"} title={"제품 설명"} text={"house_explanation"} data={houseInfo} onChange={handleHouse} placeholder={""}/>
          </div>
        </div>

        {/* 가격 */}
        <div
          className="mt-4 py-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h3 className="fw-bold mb-4">제품 추가 가격 정보를 입력해주세요.</h3>
          
          <div className={`mt-2 row`}>
            <div className="fs-5 col-3">이름</div>
            <div className="fs-5 col-4 ps-1">카테고리</div>
            <div className="fs-5 col-3 ps-0">가격</div>
          </div>
          
          <div className="row">
            <PriceInputComponent setData={setOptionInfo} className={""} />
          </div>
          
          <div className="w-100 d-flex flex-column">
            {optionInfo.length>0 && optionInfo.map((e, i)=>(
              <PriceComponent key={i} price={e} setData={setOptionInfo} />
            ))}
          </div>
        </div>
        
        {/* 기본 제품 제작 사양 */}
        <div
          className="mt-4 py-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h3 className="fw-bold mb-4">기본 제품 제작 사양을 입력해주세요.</h3>
          
          <SelectComponent
            title={"골조구조"}
            name={"framework"}
            onChange={handleSpecification}
            dataList={["경량목","경량스틸","철근콘크리트"]}
          />

          <SelectComponent
            title={"외장재"}
            name={"exterior_material"}
            onChange={handleSpecification}
            dataList={["써모사이딩","리얼징크","루버강판","우드루바"]}
          />

          <SelectComponent
            title={"지붕재"}
            name={"roofing_material"}
            onChange={handleSpecification}
            dataList={["리얼징크","아스팔트슁글"]}
          />

          <SelectComponent
            title={"단열재"}
            name={"insulation_material"}
            onChange={handleSpecification}
            dataList={["스카이텍", "기밀자재"]}
          />

          <SelectComponent
            title={"내장재"}
            name={"exterior_material"}
            onChange={handleSpecification}
            dataList={["합지도배","랩핑몰딩","강화마루"]}
          />

          <SelectComponent
            title={"창호"}
            name={"exterior_material"}
            onChange={handleSpecification}
            dataList={["미국식","유럽식","KCC"]}
          />
          
          <SelectComponent
            title={"난방"}
            name={"exterior_material"}
            onChange={handleSpecification}
            dataList={["전기탄소필름","LPG"]}
          />

          <SelectComponent
            title={"가구"}
            name={"exterior_material"}
            onChange={handleSpecification}
            dataList={["신발장","수납장","붙박이장"]}
          />

          <SelectComponent
            title={"화장실"}
            name={"exterior_material"}
            onChange={handleSpecification}
            dataList={["온수기","양변기","세면대","샤워부스"]}
          />

          <SelectComponent
            title={"주방"}
            name={"exterior_material"}
            onChange={handleSpecification}
            dataList={["싱크대","인덕션","가스레인지"]}
          />

          <SelectComponent
            title={"조명"}
            name={"exterior_material"}
            onChange={handleSpecification}
            dataList={["LED"]}
          />

        </div>

        {/* 사진 */}
        <div
          className="mt-4 py-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h3 className="fw-bold mb-4">제품 사진을 업로드 해주세요.</h3>

          <div className="row mb-4">
            <h5 className="col-12 fw-bold">대표사진 (1장)</h5>
            {imageList.filter((e)=>(e.name=="representative_image")).map((e, i)=>(
              <ImageComponent key={i} className={"col-2 pb-3"} data={imageList[i].url} title={e.title} />
            ))}
            <ImageInputComponent className={"col-2"} data={imageList} setData={setImageList} name={"representative_image"} />
          </div>

          <div className="row mb-4">
            <h5 className="fw-bold">제품 외부 사진 (여러장 추가 가능)</h5>
            {imageList.filter((e)=>(e.name=="external_images")).map((e, i)=>(
              <ImageComponent key={i} className={"col-2 pb-3"} data={imageList[i].url} title={e.title} />
            ))}
            <ImageInputComponent className={"col-2"} data={imageList} setData={setImageList} name={"external_images"} />
          </div>

          <div className="row mb-4">
            <h5 className="fw-bold">제품 내부 사진 (여러장 추가 가능)</h5>
            {imageList.filter((e)=>(e.name=="internal_images")).map((e, i)=>(
              <ImageComponent key={i} className={"col-2 pb-3"} data={imageList[i].url} title={e.title} />
            ))}
            <ImageInputComponent className={"col-2"} data={imageList} setData={setImageList} name={"internal_images"} />
          </div>

          <div className="row mb-4">
            <h5 className="fw-bold">설계도면 {`<평면도>`} 사진 (여러장 추가 가능)</h5>
            {imageList.filter((e)=>(e.name=="floor_plan_images")).map((e, i)=>(
              <ImageComponent key={i} className={"col-2 pb-3"} data={imageList[i].url} title={e.title} />
            ))}
            <ImageInputComponent className={"col-2"} data={imageList} setData={setImageList} name={"floor_plan_images"} />
          </div>

          <div className="row mb-4">
            <h5 className="fw-bold">설계도면 {`<입면도>`} 사진 (여러장 추가 가능)</h5>
            {imageList.filter((e)=>(e.name=="elevation_plan_images")).map((e, i)=>(
              <ImageComponent key={i} className={"col-2 pb-3"} data={imageList[i].url} title={e.title} />
            ))}
            <ImageInputComponent className={"col-2"} data={imageList} setData={setImageList} name={"elevation_plan_images"} />
          </div>
        </div>
      
        {/* submit */}
        <div className="mt-4 py-4 d-flex justify-content-center flex-column"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <div
            className="mt-2 fw-bold fs-5"
            style={{"color":"#101648"}}>
            마지막으로 작성 정보를 다시 한 번 확인해주세요.<br/>
            수정 필요가 있다면 검수 후, 수정 요청드릴 수 있습니다.<br/>
            (수정은 우측 상단 '마이페이지'에서 가능합니다.)<br/>
            추가로 표현하고 싶은데, 해당사항이 없다면 전화주세요!
          </div>
          <button
            type="button"
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
