"use client"

import { getHouseLast, postHouse } from "@/api/HouseAPI";
import { AdminCheckboxComponent } from "@/components/admin/AdminCheckboxComponent";
import { AdminRadioComponent } from "@/components/admin/AdminRadioComponent";
import { AdminSwitchComponent } from "@/components/admin/AdminSwitchComponent";
import { AdminSwitchTextComponent } from "@/components/admin/AdminSwitchTextComponent";
import { AdminTextComponent } from "@/components/admin/AdminTextComponent";
import { setS3Url } from "@/lib/s3Util";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function AdminClient() {
  const [houseData, setHouseData] = useState({
    title : "test 1",
    price : 0,
    floorSpace : 0,
    roomNumber : 0,
    toiletNumber : 0,
    hasLoft : "no",
    hasModel : "no",
    discount: 0,
    gunchuck: "no",
    interior: "no",
    eunsong: "no",
    addtionalTax: "no",
    afterService: "no",
    etc: "no",
    serveying: 0,
    inheoga: 0,
    tomok: 0,
    inip: 0,
    tax: 0,
  });

  const handleText = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    // if (e) e.preventDefault();

    setHouseData((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const testFunction = async (e:ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const count = await getHouseLast({});
    console.log(count.data?.id);
    console.log(count.error);
    const pid = count.data?count.data.id+1:1;
    const {response, error} = await setS3Url(`houses/${pid}/${name}.${img.type.split("/")[1]}`, img);
    if(!error) {
      setHouseData((oldValues) => (
        {
          ...oldValues,
          [e.target.name]: `https://trussbucket.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/houses/${pid}/${name}.${img.type.split("/")[1]}`
        }
      ));
    }
    else console.log(error);
  };
  
  return (
    <div>
      <div className="d-flex justify-content-start flex-column mt-5">
        <h2 className="fw-bold">데이터를 입력해주세요</h2>
        <div
          className="py-4 mt-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h4 className="fw-bold mb-4">기본 데이터</h4>
          <div className="row g-3">

            <AdminTextComponent className={"col-2"} title={"구분"} text={"gubun"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-4"} title={"업체"} text={"company"} data={houseData} onChange={handleText}/>
            <div className="col-6" />

            <AdminTextComponent className={"col-12"} title={"제목"} text={"title"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-2"} title={"가격"} text={"price"} data={houseData} onChange={handleText} />
            <AdminTextComponent className={"col-1"} title={"할인율"} text={"discount"} data={houseData} onChange={handleText} />
            <div className="col-9" />

            <AdminTextComponent className={"col-2"} title={"실평수"} text={"floorSpace"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-2"} title={"건축면적"} text={"gunchuckSpace"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-1"} title={"방개수"} text={"roomNumber"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-1"} title={"화장실 수"} text={"toiletNumber"} data={houseData} onChange={handleText}/>
            <div className="col-6" />

            <AdminTextComponent className={"col-2"} title={"예상소요기간"} text={"duration"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-2"} title={"AS기간"} text={"afterService"} data={houseData} onChange={handleText}/>
            <div className="col-8" />


            <div className="col-12 d-flex">
              <span className="col-2">모듈러</span>
              <div className="col-2 row">
                <AdminRadioComponent id={"modulerYes"} name={"moduler"} title={"yes"} data={"yes"} onChange={handleText} className={"col-6"} />
                <AdminRadioComponent id={"modulerNo"} name={"moduler"} title={"no"} data={"no"} onChange={handleText} className={"col-6"} />
              </div>
            </div>

            {/* hasModel */}
            <div className="col-12 d-flex">
              <span className="col-2">모델하우스</span>
              <div className="col-2 row">
                <AdminRadioComponent id={"hasModelYes"} name={"hasModel"} title={"yes"} data={"yes"} onChange={handleText} className={"col-6"} />
                <AdminRadioComponent id={"hasModelNo"} name={"hasModel"} title={"no"} data={"no"} onChange={handleText} className={"col-6"} />
              </div>
            </div>
            

            {/* 특이사항 */}
            <div className="col-12 d-flex">
              <span className="col-2">특이사항</span>
              <div className="col-4 row">
                <AdminCheckboxComponent id={"darak"} title={"다락"} name={"significant"} data={"darak"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent id={"balcony"} title={"발코니"} name={"significant"} data={"balcony"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent id={"oksang"} title={"옥상"} name={"significant"} data={"oksang"} onChange={handleText} className={"col-4"} />
              </div>
            </div>

            {/* 특이사항 */}
            <div className="col-12 d-flex">
              <span className="col-2">특이사항</span>
              <div className="col-4 row">
                <AdminCheckboxComponent id={"darak"} title={"다락"} name={"significant"} data={"darak"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent id={"balcony"} title={"발코니"} name={"significant"} data={"balcony"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent id={"oksang"} title={"옥상"} name={"significant"} data={"oksang"} onChange={handleText} className={"col-4"} />
                </div>
            </div>
          </div>

          <div
            className="mt-4 py-4"
            style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
            <h4 className="fw-bold mb-4">가격에 포함된 것</h4>
            <div className="row">
              <AdminSwitchComponent className="col-2" data={houseData} name={"gagu"} title={"가구"} onChange={handleText} />
              <AdminSwitchComponent className="col-2" data={houseData} name={"interior"} title={"인테리어"} onChange={handleText} />
              <AdminSwitchComponent className="col-2" data={houseData} name={"transportation"} title={"운송비"} onChange={handleText} />
              <AdminSwitchComponent className="col-2" data={houseData} name={"installation"} title={"설치비"} onChange={handleText} />
            </div>
          </div>

          <div
            className="mt-4 py-4"
            style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
            <h4 className="fw-bold mb-4">추가로 고려해야 할 비용</h4>

            <div className="row g-3">
              <AdminSwitchTextComponent data={houseData} name={"inheoga"} title={"인허가비용"} onChange={handleText} />
              <AdminSwitchTextComponent data={houseData} name={"gicho"} title={"기초공사"} onChange={handleText} />
              <AdminSwitchTextComponent data={houseData} name={"tomok"} title={"토목공사"} onChange={handleText} />
              <AdminSwitchTextComponent data={houseData} name={"electroInip"} title={"전기인입"} onChange={handleText} />
              <AdminSwitchTextComponent data={houseData} name={"sudoInip"} title={"수도인입"} onChange={handleText} />
              <AdminSwitchTextComponent data={houseData} name={"tax"} title={"세금"} onChange={handleText} />
              <AdminSwitchTextComponent data={houseData} name={"bohum"} title={"보험"} onChange={handleText} />
              <AdminSwitchTextComponent data={houseData} name={"etc"} title={"기타"} onChange={handleText} />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button"
          style={{backgroundColor:"#6764F7"}}
          className={`my-5 px-4 py-2 btn btn-primary rounded-lg fw-bold fs-5`}
          onClick={async ()=>{ console.log(houseData); await postHouse(houseData)}}>
          {"post house TEST"}
        </button>
      </div>

    </div>
  )
}





{/* image */}
{/* <div className="d-flex justify-content-center align-items-center">
  <div>
    <label htmlFor={"image"}>image</label>
    <input
      id={"image"}
      accept="image/*"
      multiple
      type="file" 
      onChange={(e)=>{testFunction(e, "image")}}
    />
  </div>
  <Image
    src={houseData["image"]}
    alt={"image"}
    width={200}
    height={100} />
</div> */}