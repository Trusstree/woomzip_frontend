"use client"

import { useCallback } from "react"

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