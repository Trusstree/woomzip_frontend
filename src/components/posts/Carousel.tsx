"use client"

import { getHouses } from "@/api/HouseAPI"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type CarouselProps = {
  skip: number
  limit: number
  className?: string
}

export default function Carousel(props: CarouselProps){
  const { skip, limit, className } = props;
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
    <div
      id="Carousel"
      className={`carousel slide ${className}`}
      data-bs-ride="carousel">
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
        {houseData?
          houseData.map((e, i)=>(
            <div
              key={i}
              className={`carousel-item ${i==0?"active":""}`}
              data-bs-interval={(interval*1000).toString()}
              >
              <Image
                className="d-block w-100 rounded-4"
                src={e.image}
                alt="truss_logo.png"
                width={400}
                height={500}
                onClick={()=>{router.push(`/house/${e.idx}`);}}
                style={{objectFit:"cover"}}
                placeholder={"blur"}
                blurDataURL={"/placeholder.png"}/>
              <div className="carousel-caption d-none d-md-block text-start bg-secondary bg-opacity-50 rounded-5">
                <h3 className="fw-bold mx-3 my-0 text-white">{e.title}</h3>
                <span className="my-0 mx-3 ">#{e.price}만원 #{e.floorSpace}평 #방{e.roomNumber}개 #화장실{e.toiletNumber}개</span>
              </div>
            </div>
          ))
        :
        <button
          className="d-block w-100 rounded-4"
          style={{
            backgroundColor:"gray",
            borderColor:"gray",
            objectFit:"cover",
          }}/>
        }
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