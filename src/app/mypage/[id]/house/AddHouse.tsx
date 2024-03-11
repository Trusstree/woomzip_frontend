"use client"

import { postHouse } from "@/apis/HouseAPI";
import { postPrice } from "@/apis/priceAPI";
import { AdminRadioComponent } from "@/components/admin/AdminRadioComponent";
import { AdminTextComponent } from "@/components/admin/AdminTextComponent";
import { PriceInputComponent } from "@/components/admin/PriceInputComponent";
import { PriceTextComponent } from "@/components/admin/PriceTextComponent";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { setS3Url } from "@/lib/s3Util";
import { HouseDataType } from "@/types/house";
import moment from "moment";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

export default function AddHouse() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [houseData, setHouseData] = useState({
    title: "",
    company: "",
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

    thumbnail:"",
    detailImage:"",
    itemImage:"",
  } as HouseDataType);

  const [priceList, setPriceList] = useState([]);

  useEffect(()=>{
    (async ()=>{
      setHouseData((oldValues) => ({...oldValues, ["company"]: session?.user?.name}));
    })();
  },[session]);

  // useEffect(()=>{
  //   (async ()=>{
  //     //const [prevData, setPrevData]=await getHouse();
  //     setHouseData((oldValues) => ({...oldValues, ["company"]: session?.user?.name}));
  //   })();
  // })

  const handleText = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    // if (e) e.preventDefault();

    setHouseData((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const setS3Image = async (e:ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const title=e.target.name+moment().format('YYYYMMDDHHmmss');
    console.log(`${process.env.NEXT_PUBLIC_AWS_S3_URL}/houses/${session.user.id}/${title}`);
    const {response, error} = await setS3Url(`houses/${session.user.id}/${title}`, img);
    if(!error) {
      setHouseData((oldValues) => (
        {
          ...oldValues,
          [e.target.name]: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/houses/${session.user.id}/${title}`
        }
      ));
    }
    else console.error(error);
  };

  const submitFunction = async (houseData: HouseDataType) => {
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
    
    console.log(data);
    
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
        <h2 className="fw-bold">데이터를 입력해주세요</h2>
        <div
          className="py-4 mt-4"
          style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
          <h4 className="fw-bold mb-4">기본 데이터</h4>
          <div className="row g-3">

            <AdminTextComponent className={"col-12"} title={"제목"} text={"title"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-2"} title={"가격"} text={"price"} data={houseData} onChange={handleText} />
            <AdminTextComponent className={"col-1"} title={"할인율"} text={"discount"} data={houseData} onChange={handleText} />
            <div className="col-9" />

            <AdminTextComponent className={"col-2"} title={"실평수"} text={"floorSpace"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-2"} title={"건축면적"} text={"gunchuckSpace"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-2"} title={"방개수"} text={"roomNumber"} data={houseData} onChange={handleText}/>
            <AdminTextComponent className={"col-2"} title={"화장실 수"} text={"toiletNumber"} data={houseData} onChange={handleText}/>
            <div className="col-4" />

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
            className="mt-4 py-3"
            style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
            <h4 className="fw-bold mb-4">썸네일 사진</h4>
            
            <input
              id={"thumbnail"}
              name={"thumbnail"}
              accept="image/*"
              multiple
              type="file"
              onChange={(e)=>{setS3Image(e)}} />
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
              onChange={(e)=>{setS3Image(e)}} />
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
              onChange={(e)=>{setS3Image(e)}} />
            <img
              src={houseData["detailImage"]}
              alt={"detailImage"}
              width={200}
              height={100} />
          </div>

          <div
            className="mt-4 py-4"
            style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
            <h4 className="fw-bold mb-4">가격</h4>
            
            <div className={` mt-2 col-9 row`}>
              <h5 className="col-4">이름</h5>
              <div className="col-2">카테고리</div>
              <div className="col-4">가격</div>
            </div>
            
            <div className="row">
              <PriceInputComponent setPriceList={setPriceList} className={"col-9"} />
            </div>
            
            <div className="w-100 d-flex flex-column">
              {priceList.length>0 && priceList.map((e, i)=>{
                return <PriceTextComponent key={i} index={i} price={e} setPriceList={setPriceList} />
              })}
            </div>
            
          </div>

        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button"
          name="submit"
          style={{backgroundColor:"#101648"}}
          className={`my-5 px-5 py-3 btn btn-lg rounded-lg text-white fw-bold fs-3`}
          onClick={async ()=>{await submitFunction(houseData);}}>
          {"등록하기"}
        </button>
      </div>

    </div>
  )
}
