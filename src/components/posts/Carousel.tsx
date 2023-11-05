"use client"

import { getHouses } from "@/api/HouseAPI"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type CarouselProps = {
  height: number
  className: string
}

export default function Carousel(props: CarouselProps){
  const { height, className } = props;
  const router = useRouter();
  
  const [houseData, setHouseData] = useState(undefined as any);

  useEffect( () => {
    (async ()=>{
      const { data, error } = await getHouses();
      if(!error) setHouseData(data);
      else console.log(error);

      console.log(houseData);
    })();
  },[])
  
  return (
    <div id="Carousel" className={`carousel slide ${className}`}>
      <div className="carousel-indicators">
        {houseData?.map((e, i)=>(
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
        <button className="carousel-control-prev" type="button" data-bs-target="#Carousel" data-bs-slide="prev" style={{ mixBlendMode: "difference"}}>
          <span className="carousel-control-prev-icon" aria-hidden="true"/>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#Carousel" data-bs-slide="next" style={{ mixBlendMode: "difference"}}>
          <span className="carousel-control-next-icon" aria-hidden="true"/>
          <span className="visually-hidden">Next</span>
        </button>

        {houseData?.map((e, i)=>(
          <div key={i} className={`carousel-item ${i==0?"active":""}`}>
            <img src={e.image} className="d-block w-100 rounded-4" alt="truss_logo.png" height={height} onClick={()=>{router.push(`/${e.id}`);}}/>
            <div className="carousel-caption d-none d-md-block text-start fw-bold text-white" >
              <h5 className="fw-bold">{e.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}