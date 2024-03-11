"use client"

import { useCallback } from "react"

type PriceTextComponentProps = {
  index: number
  price: any
  setPriceList: Function
  className?: string
}

export function PriceTextComponent(props: PriceTextComponentProps) {
  const { index, price, setPriceList, className } = props;

  const onClick = useCallback(()=>{
    setPriceList((oldValues)=>(oldValues.filter((_,i)=>i!=index)));
  },[price]);

  return (
    <div className={`${className} mt-2 col-9 row`}>
      <div className="col-2">
        {price.category}
      </div>
      <div className="col-4">
        {price.name}
      </div>
      <div className="col-4">
        {price.price}
      </div>
      <div
        className={"col-2 btn d-flex flex-column justify-content-center align-self-center"}
        onClick={onClick}>
        X
      </div>
    </div>
  )
}