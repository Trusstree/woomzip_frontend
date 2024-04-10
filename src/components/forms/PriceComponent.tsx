"use client"

import { useCallback, useEffect } from "react"

type PriceComponentProps = {
  key: number
  price: any
  setData: Function
  className?: string
}

export function PriceComponent(props: PriceComponentProps) {
  const { key, price, setData, className } = props;

  const onClick = useCallback(()=>{
    setData((oldValues)=>(oldValues.filter((_,i)=>i!=key)));
  }, [price]);

  return (
    <div className={`${className} mt-2 col-12 row`}>
      <div className="col-3">
        {price.option_type}
      </div>
      <div className="col-4">
        {price.option_product_name}
      </div>
      <div className="col-3">
        {price.option_product_price}
      </div>
      <div
        className={"col-2 btn d-flex flex-column justify-content-center align-self-center"}
        onClick={onClick}>
        X
      </div>
    </div>
  )
}