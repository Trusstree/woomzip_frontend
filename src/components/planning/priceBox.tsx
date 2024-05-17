"use client"
import { useEffect, useState } from "react"
import PriceLine from "./PriceLine"
import { algorithm } from "@/lib/algorithm";
import styled from "styled-components";


export default function PriceBox({system, slope, road}) {

    const [delivery, setDelivery] = useState([0,0]);
    const [permit, setPermit] = useState([0,0]);

    useEffect(()=>{
        const res=algorithm({system:system, slope:slope, road: road});
        setDelivery(res["delivery"]);
        setPermit(res["permit"]);
    },[system, slope, road]);

    return(
          <div className="container" style={{borderColor:"white", width: "100%",
          position: "sticky",
          bottom: "0"}}>
            <div className="d-flex justify-content-between" style={{lineHeight:"35px"}}>
              <div style={{fontSize:"17px", fontWeight:"500"}}>주택가격</div>
              <div>price</div>
            </div>
            <PriceLine title={"배송비"} minPrice={delivery[0]} maxPrice={delivery[1]} />
            <PriceLine title={"측량비"} minPrice={undefined} maxPrice={undefined} />
            <PriceLine title={"인허가비"} minPrice={permit[0]} maxPrice={permit[1]} />
            <PriceLine title={"토목공사비"} minPrice={undefined} maxPrice={undefined} />
            <PriceLine title={"기초공사비"} minPrice={undefined} maxPrice={undefined} />
            <PriceLine title={"보험비"} minPrice={undefined} maxPrice={undefined} />
            <PriceLine title={"세금"} minPrice={undefined} maxPrice={undefined} />
            <hr/>
            <PriceLine title={"총"} minPrice={undefined} maxPrice={undefined} />
        </div>
    )
}