"use client"

import { useState } from "react";
import FillteringButton from "./FillteringButton";
import ResetButton from "./ResetButton";

export function SearchModal({ data, setData }) {
  const [price, setPrice]=useState("");
  const [area, setArea]=useState("");
  const [structure, setStrucure]=useState("");
  const [time,setTime]=useState("");
  const [guaranty,setGuaranty]=useState("");
  const [significant,setSignificant]=useState("");

  return (
    <div
      className="modal fade"
      id={`search_modal`}
      aria-labelledby={`search_modal_Label`}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ width: 500 }}>
          <div className="modal-header">
            <h5 className="modal-title" id={`search_modal_Label`}>
              필터링
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <div style={{width:"450px", margin:"20px 0"}}>
            <div style={{margin:"0 10px", fontWeight:"600"}}>가격</div>
            <FillteringButton title={"~4천만원"} value={1} name={"price"} data={price} setData={setPrice}/>
            <FillteringButton title={"~7천만원"} value={2} name={"price"} data={price} setData={setPrice}/>
            <FillteringButton title={"~1억원"} value={3} name={"price"} data={price} setData={setPrice}/>
            <FillteringButton title={"~1.5억원"} value={4} name={"price"} data={price} setData={setPrice}/>
            <FillteringButton title={"1.5억원~"} value={5} name={"price"} data={price} setData={setPrice}/>
          </div>
          <div style={{width:"450px", margin:"20px 0"}}>
            <div style={{margin:"0 10px", fontWeight:"600"}}>사용 평수</div>
            <FillteringButton title={"~10평"} value={1} name={"area"} data={area} setData={setArea}/>
            <FillteringButton title={"~15평"} value={2} name={"area"} data={area} setData={setArea}/>
            <FillteringButton title={"~20평"} value={3} name={"area"} data={area} setData={setArea}/>
            <FillteringButton title={"~25평"} value={4} name={"area"} data={area} setData={setArea}/>
            <FillteringButton title={"25평~"} value={5} name={"area"} data={area} setData={setArea}/>
          </div>
          <div style={{width:"450px", margin:"20px 0"}}>
            <div style={{margin:"0 10px", fontWeight:"600"}}>골조 구조</div>
            <FillteringButton title={"경량목"} value={1} name={"structure"} data={structure} setData={setStrucure}/>
            <FillteringButton title={"경량스틸"} value={2} name={"structure"} data={structure} setData={setStrucure}/>
            <FillteringButton title={"기타"} value={3} name={"structure"} data={structure} setData={setStrucure}/>
          </div>
          <div style={{width:"450px", margin:"20px 0"}}>
            <div style={{margin:"0 10px", fontWeight:"600"}}>제작 소요기간</div>
            <FillteringButton title={"~2개월"} value={1} name={"time"} data={time} setData={setTime}/>
            <FillteringButton title={"4개월"} value={2} name={"time"} data={time} setData={setTime}/>
            <FillteringButton title={"6개월~"} value={3} name={"time"} data={time} setData={setTime}/>
          </div>
          <div style={{width:"450px", margin:"20px 0"}}>
            <div style={{margin:"0 10px", fontWeight:"600"}}>AS 보증기간</div>
            <FillteringButton title={"~12개월"} value={1} name={"guaranty"} data={guaranty} setData={setGuaranty}/>
            <FillteringButton title={"24개월"} value={2} name={"guaranty"} data={guaranty} setData={setGuaranty}/>
            <FillteringButton title={"36개월~"} value={3} name={"guaranty"} data={guaranty} setData={setGuaranty}/>
          </div>
          <div style={{width:"450px", margin:"20px 0"}}>
            <div style={{margin:"0 10px", fontWeight:"600"}}>특이사항</div>
            <FillteringButton title={"데크"} value={1} name={"significant"} data={significant} setData={setSignificant}/>
            <FillteringButton title={"다락방"} value={2} name={"significant"} data={significant} setData={setSignificant}/>
            <FillteringButton title={"발코니"} value={3} name={"significant"} data={significant} setData={setSignificant}/>
            <FillteringButton title={"베란다"} value={4} name={"significant"} data={significant} setData={setSignificant}/>
            <FillteringButton title={"옥상"} value={5} name={"significant"} data={significant} setData={setSignificant}/>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <div style={{width:"200px", margin:"20px 0"}}>
              <div style={{margin:"0 10px", fontWeight:"600"}}>모델하우스</div>
              <FillteringButton title={"있음"} value={1} name={"significant"} data={significant} setData={setSignificant}/>
            </div>
            <div style={{width:"80px", margin:"20px 0"}}>
              <div style={{margin:"0 10px", fontWeight:"600"}}>초기화</div>
              <ResetButton img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"} value={1} setData={setData}/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
