"use client"


export default function PriceLine({ title, minPrice, maxPrice}) {
    return(
        <div className="d-flex justify-content-between" style={{lineHeight:"35px"}}>
            <div style={{fontSize:"16px", fontWeight:"500"}}>{title}</div>
            <div style={{fontSize:"14px"}}>{minPrice}~{maxPrice}만원</div>
        </div>
    )
}