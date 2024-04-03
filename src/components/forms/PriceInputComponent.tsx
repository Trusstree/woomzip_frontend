"use client"

import { postPrice } from "@/apis/priceAPI"
import { alertError } from "@/lib/alertUtil"
import { ChangeEvent, useCallback, useState } from "react"

type PriceInputComponentProps = {
  setData: Function
  className?: string
}

export function PriceInputComponent(props: PriceInputComponentProps) {
  const { setData, className } = props;

  const [priceData, setPriceData] = useState({
    option_type:"",
    option_product_name:"",
    option_product_price:0
  });
  const onChange = (e:ChangeEvent<HTMLSelectElement|HTMLInputElement>) => {
    if(e.target.value=="included") {
      setPriceData((e)=>({...e, price:0}))
    }
    setPriceData((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
  }

  const submitChange = useCallback(
    async () => {
      if(!priceData["option_type"].length) {alertError("option_type","한 글자 이상 써야해요 ㅠㅠ"); return;}
      
      setData((oldValues) =>([...oldValues, priceData]));
      setPriceData({
        option_type:"",
        option_product_name:"",
        option_product_price:0
      })
    }
  , [priceData]);

  return (
    <div className={`${className?className+" ":""}row`}>
      <div className="col-3">
        <input
          className="w-100 h-100"
          type='text'
          id={"option_type"}
          name={"option_type"}
          onChange={onChange}
          value={priceData["option_type"]} />
      </div>
      <div className="col-4">
        <input
          className="w-100 h-100"
          type='text'
          id={"option_product_name"}
          name={"option_product_name"}
          onChange={onChange}
          value={priceData["option_product_name"]} />
      </div>
      
      <div className="col-3">
        <input
          className="w-100 h-100"
          type='text'
          id={"option_product_price"}
          name={"option_product_price"}
          onChange={onChange}
          value={priceData["option_product_price"]}/>
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