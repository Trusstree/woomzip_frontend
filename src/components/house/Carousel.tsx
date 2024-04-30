"use client"

import { getHouses } from "@/apis/HouseAPI"
import { cardPriceText, detailPriceText } from "@/lib/stringUtil"
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
      const [ data, error ] = await getHouses({
        skip: skip,
        limit: limit
      });
      
      if(error) {console.error(error); return;}
      setHouseData(data.data[0].houses);
    })();
  },[])
  
  return (
    <div
      id="Carousel"
      className={`carousel slide ${className}`}
      data-bs-ride="carousel">
      <div className="carousel-indicators">
        {houseData?
          houseData.map((_, i)=>(
          <button
            key={i}
            type="button"
            data-bs-target="#Carousel"
            data-bs-slide-to={`${i}`}
            className={(i==0)?"active":""}
            aria-current={(i==0)?"true":"false"}
            aria-label={`Slide ${i+1}`}
          />
        ))
      :undefined}
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
                src={e["house_img_url"] || "/blur_image.png"}
                alt="truss_logo.png"
                width={400}
                height={500}
                onClick={()=>{router.push(`/house/${e["house_id"]}`);}}
                style={{objectFit:"cover"}}
                placeholder={"blur"}
                blurDataURL={"/placeholder.png"}/>
              <div className="carousel-caption d-none d-md-block text-start bg-secondary bg-opacity-50 rounded-5">
                <h3 className="fw-bold mx-3 my-0 text-white">{e["house_name"]}</h3>
                <span className="my-0 mx-3 ">#{detailPriceText(e["final_price"])} #{e["total_floor_area"].toFixed(1)}평 #방 {e["room_count"]}개 #화장실 {e["toilet_count"]}개</span>
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