"use client"

import { getHouseLast, postHouse } from "@/apis/HouseAPI";
import { AdminRadioComponent } from "@/components/admin/AdminRadioComponent";
import { AdminSwitchComponent } from "@/components/admin/AdminSwitchComponent";
import { AdminSwitchTextComponent } from "@/components/admin/AdminSwitchTextComponent";
import { AdminTextComponent } from "@/components/admin/AdminTextComponent";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { setS3Url } from "@/lib/s3Util";
import { HouseDataType } from "@/types/house";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function AddHouse() {
  const router = useRouter();
  const pathname = usePathname();
  
  const [houseData, setHouseData] = useState({
    gubun: "",
    company: "",

    title: "",
    price: 0,
    discount: 0,

    floorSpace: 0,
    gunchuckSpace: 0,
    roomNumber: 0,
    toiletNumber: 0,

    duration: 0,
    afterService: 0,

    moduler: "no",
    hasModel: "no",

    gagu: "no",
    interior: "no",
    transportation: "no",
    installation: "no",

    inheoga: 0,
    gicho: 0,
    tomok: 0,
    electroInip: 0,
    sudoInip: 0,
    tax: 0,
    bohum: 0,
    etc: 0,

    thumbnail:"",
    detailImage:"",
    itemImage:"",
  } as HouseDataType);

  const handleText = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    // if (e) e.preventDefault();
    setHouseData((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const testFunction = async (e:ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const [data, houseError] = await getHouseLast({});
    if(houseError)console.error(houseError);
    const pid = data?data.idx+1:1;
    const {response, error} = await setS3Url(`houses/${pid}/${e.target.name}.${img.type.split("/")[1]}`, img);
    if(!error) {
      setHouseData((oldValues) => (
        {
          ...oldValues,
          [e.target.name]: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/houses/${pid}/${e.target.name}.${img.type.split("/")[1]}`
        }
      ));
    }
    else console.log(error);
  };

  const submitFunction = async (houseData: HouseDataType) => {
    if(typeof houseData["gubun"]!="string") {alertError("gubun","type을 다시 한 번 확인해주세요~"); return;}
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

    if(typeof houseData["gagu"]!="string") {alertError("gagu","type을 다시 한 번 확인해주세요~"); return;}
    if(typeof houseData["interior"]!="string") {alertError("interior","type을 다시 한 번 확인해주세요~"); return;}
    if(typeof houseData["transportation"]!="string") {alertError("transportation","type을 다시 한 번 확인해주세요~"); return;}
    if(typeof houseData["installation"]!="string") {alertError("installation","type을 다시 한 번 확인해주세요~"); return;}

    houseData["inheoga"]=Number(houseData["inheoga"]);
    if(typeof houseData["inheoga"]!="number") {alertError("inheoga","type을 다시 한 번 확인해주세요~"); return;}
    houseData["gicho"]=Number(houseData["gicho"]);
    if(typeof houseData["gicho"]!="number") {alertError("gicho","type을 다시 한 번 확인해주세요~"); return;}
    houseData["tomok"]=Number(houseData["tomok"]);
    if(typeof houseData["tomok"]!="number") {alertError("tomok","type을 다시 한 번 확인해주세요~"); return;}
    houseData["electroInip"]=Number(houseData["electroInip"]);
    if(typeof houseData["electroInip"]!="number") {alertError("electroInip","type을 다시 한 번 확인해주세요~"); return;}
    houseData["sudoInip"]=Number(houseData["sudoInip"]);
    if(typeof houseData["sudoInip"]!="number") {alertError("sudoInip","type을 다시 한 번 확인해주세요~"); return;}
    houseData["tax"]=Number(houseData["tax"]);
    if(typeof houseData["tax"]!="number") {alertError("tax","type을 다시 한 번 확인해주세요~"); return;}
    houseData["bohum"]=Number(houseData["bohum"]);
    if(typeof houseData["bohum"]!="number") {alertError("bohum","type을 다시 한 번 확인해주세요~"); return;}
    houseData["etc"]=Number(houseData["etc"]);
    if(typeof houseData["etc"]!="number") {alertError("etc","type을 다시 한 번 확인해주세요~"); return;}

    if(typeof houseData["thumbnail"]!="string") {alertError("thumbnail","type을 다시 한 번 확인해주세요~"); return;}
    if(typeof houseData["detailImage"]!="string") {alertError("detailImage","type을 다시 한 번 확인해주세요~"); return;}
    if(typeof houseData["itemImage"]!="string") {alertError("itemImage","type을 다시 한 번 확인해주세요~"); return;}
    await postHouse(houseData);
    alertSuccess(houseData["title"],"제대로 들어갔어요~");
  }
  
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
            {/* <div className="col-12 d-flex">
              <span className="col-2">특이사항</span>
              <div className="col-4 row">
                <AdminCheckboxComponent id={"darak"} title={"다락"} name={"significant"} data={"darak"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent id={"balcony"} title={"발코니"} name={"significant"} data={"balcony"} onChange={handleText} className={"col-4"} />
                <AdminCheckboxComponent id={"oksang"} title={"옥상"} name={"significant"} data={"oksang"} onChange={handleText} className={"col-4"} />
              </div>
            </div> */}

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

          <div
            className="mt-4 py-3"
            style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
            <h4 className="fw-bold mb-4">썸네일 사진</h4>
            
            <input
              id={"thumbnail"}
              name={"thumbnail"}
              accept="image/*"
              multiple
              type="file"
              onChange={(e)=>{testFunction(e)}} />
            <img
              src={houseData["thumbnail"]}
              alt={"thumbnail"}
              width={200}
              height={100} />
            
          </div>

          <div className="py-3">
            <h4 className="fw-bold mb-4">제품 사진</h4>
            <input
              id={"image"}
              name={"itemImage"}
              accept="image/*"
              multiple
              type="file"
              onChange={(e)=>{console.log(e.target.name); testFunction(e)}} />
            <img
              src={houseData["itemImage"]}
              alt={"itemImage"}
              width={200}
              height={100} />
          </div>

          <div className="py-3">
            <h4 className="fw-bold mb-4">상세정보 사진</h4>
            <input
              id={"detailImage"}
              name={"detailImage"}
              accept="image/*"
              multiple
              type="file" 
              onChange={(e)=>{testFunction(e)}} />
            <img
              src={houseData["detailImage"]}
              alt={"detailImage"}
              width={200}
              height={100} />
          </div>

        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button"
          name="image"
          style={{backgroundColor:"#6764F7"}}
          className={`my-5 px-4 py-2 btn btn-primary rounded-lg fw-bold fs-5`}
          onClick={async ()=>{ await submitFunction(houseData); router.push(pathname.replace("/house",""));}}>
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