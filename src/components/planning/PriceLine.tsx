"use client"


export default function PriceLine({ title, minPrice, maxPrice}) {
    return(
        <div className="d-flex justify-content-between" style={{lineHeight:"35px"}}>
            <div style={{fontSize:"17px", fontWeight:"500"}}>{title}</div>
            <div>{minPrice}~{maxPrice}</div>
        </div>
    )
}