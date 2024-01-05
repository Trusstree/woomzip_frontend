"use client"

import { getHouses } from "@/api/HouseAPI"
import { useRouter } from "next/navigation"
import { Key, useEffect, useState } from "react"

type CarouselProps = {
  height: number
  className: string
  skip: number
  limit: number
}

export default function Carousel(props: CarouselProps){
  const { height, className, skip, limit } = props;
  const router = useRouter();
  
  const [houseData, setHouseData] = useState(undefined as any);
  const interval=5;

  useEffect( () => {
    (async ()=>{
      const { data, error } = await getHouses({
        skip: skip,
        limit: limit
      });
      if(!error) setHouseData(data);
      else console.log(error);
    })();
  },[])
  
  return (
    <div id="Carousel" className={`carousel slide ${className}`} data-bs-ride="carousel">
      <div className="carousel-indicators">
        {houseData?.map((_, i)=>(
          <button
            key={i}
            type="button"
            data-bs-target="#Carousel"
            data-bs-slide-to={`${i}`}
            className={(i==0)?"active":""}
            aria-current={(i==0)?"true":"false"}
            aria-label={`Slide ${i+1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {houseData?.map((e, i)=>(
          <div
            key={i}
            className={`carousel-item ${i==0?"active":""}`}
            data-bs-interval={(interval*1000).toString()}
            >
            <img
              src={e.image}
              className="d-block w-100 rounded-4"
              alt="truss_logo.png"
              height={height}
              onClick={()=>{router.push(`/house/${e.id}`);}}
              style={{objectFit:"cover"}}/>
            <div className="carousel-caption d-none d-md-block text-start bg-secondary bg-opacity-50 rounded-5">
              <h3 className="fw-bold mx-3 my-0 text-white">{e.title}</h3>
              <span className="my-0 mx-3 ">#{e.price}만원 #{e.floorSpace}평 #방{e.roomNumber}개 #화장실{e.toiletNumber}개</span>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#Carousel" data-bs-slide="prev" style={{ mixBlendMode: "difference"}}>
        <span className="carousel-control-prev-icon" aria-hidden="true"/>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#Carousel" data-bs-slide="next" style={{ mixBlendMode: "difference"}}>
        <span className="carousel-control-next-icon" aria-hidden="true"/>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}