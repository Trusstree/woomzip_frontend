"use client"

import { postPrice } from "@/apis/priceAPI"
import { alertError } from "@/lib/alertUtil"
import { ChangeEvent, useCallback, useState } from "react"

type PriceInputComponentProps = {
  setPriceList: Function
  className?: string
}

export function PriceInputComponent(props: PriceInputComponentProps) {
  const { setPriceList, className } = props;

  const [priceData, setPriceData] = useState({
    name:"",
    category:"additional",
    price:0
  });
  const onChange = (e:ChangeEvent<HTMLSelectElement|HTMLInputElement>) => {
    if(e.target.value=="included") {
      setPriceData((e)=>({...e, price:0}))
    }
    setPriceData((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
  }

  const submitChange = useCallback(
    async () => {
      if(!priceData["name"].length) {alertError("name","한 글자 이상 써야해요 ㅠㅠ"); return;}
      priceData["price"]=Number(priceData["price"]);
      if(priceData["category"]!="included" && priceData["price"]<1) {alertError("price","가격이 제대로 되어있는지 확인해주세요!"); return;}
      else {
        setPriceList((oldValues) =>([...oldValues, priceData]));
        setPriceData({
          name:"",
          category:"additional",
          price:0
        })
      }
    }
  , [priceData]);

  return (
    <div className={`${className?className+" ":""}row`}>
      <div className="col-4">
        <input
          className="w-100 h-100"
          type='text'
          id={"name"}
          name={"name"}
          onChange={onChange}
          value={priceData["name"]} />
      </div>
      <div className="col-2">
        <select
          defaultValue={"addtional"}
          className="mx-0 px-0 form-select"
          aria-label="category"
          name={"category"}
          onChange={onChange}>
          <option value="additional">추가</option>
          <option value="included">포함</option>
          <option value="optional">옵션</option>
        </select>
      </div>
      
      <div className="col-4">
        <input
          className="w-100 h-100"
          type='text'
          id={"price"}
          name={"price"}
          onChange={onChange}
          value={priceData["price"]}
          disabled={priceData["category"]=="included"}/>
      </div>

      <div className="col-2">
        <button
          style={{backgroundColor:"#101648"}}
          className="btn text-white w-100"
          onClick={submitChange}>
          추가
        </button>
      </div>
    </div>
  )
}