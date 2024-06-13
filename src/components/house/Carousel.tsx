"use client";

import { detailPriceText } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BrowserView, MobileView } from "react-device-detect";

type CarouselProps = {
  houseData: any[];
  className?: string;
};

export default function Carousel(props: CarouselProps) {
  const { houseData, className } = props;
  const router = useRouter();
  const interval = 5;

  return (
    <div id="Carousel" className={`carousel slide ${className}`} data-bs-ride="carousel">
      <BrowserView>
        <div className="carousel-indicators">
          {houseData
            ? houseData.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#Carousel"
                  data-bs-slide-to={`${i}`}
                  className={i == 0 ? "active" : ""}
                  aria-current={i == 0 ? "true" : "false"}
                  aria-label={`Slide ${i + 1}`}
                />
              ))
            : undefined}
        </div>
        <div className="carousel-inner">
          {houseData ? (
            houseData.map((e, i) => (
              <div
                key={i}
                className={`carousel-item ${i == 0 ? "active" : ""}`}
                data-bs-interval={(interval * 1000).toString()}
              >
                <Image
                  className="d-block w-100 rounded-4"
                  src={e["house_img_url"] || "/blur_image.png"}
                  alt="truss_logo.png"
                  width={400}
                  height={600}
                  onClick={() => {
                    router.push(`/house/${e["house_id"]}`);
                  }}
                  style={{ objectFit: "cover" }}
                  placeholder={"blur"}
                  blurDataURL={"/placeholder.png"}
                />
                <div className="carousel-caption d-none d-md-block text-start bg-secondary bg-opacity-50 rounded-5">
                  <h3 className="fw-bold mx-3 my-0 text-white">{e["house_name"]}</h3>
                  <span className="my-0 mx-3 ">
                    #{detailPriceText(e["final_price"])} #{e["total_floor_area"].toFixed(1)}평 #방 {e["room_count"]}개
                    #화장실 {e["toilet_count"]}개
                  </span>
                </div>
              </div>
            ))
          ) : (
            <button
              className="d-block w-100 rounded-4"
              style={{
                backgroundColor: "gray",
                borderColor: "gray",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#Carousel"
          data-bs-slide="prev"
          style={{ mixBlendMode: "difference" }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#Carousel"
          data-bs-slide="next"
          style={{ mixBlendMode: "difference" }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </BrowserView>


      <MobileView>
        <div className="carousel-indicators" style={{}}>
          {houseData
            ? houseData.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#Carousel"
                  data-bs-slide-to={`${i}`}
                  className={i == 0 ? "active" : ""}
                  aria-current={i == 0 ? "true" : "false"}
                  aria-label={`Slide ${i + 1}`}
                />
              ))
            : undefined}
        </div>
        <div className="carousel-inner">
          {houseData ? (
            houseData.map((e, i) => (
              <div
                key={i}
                className={`carousel-item ${i == 0 ? "active" : ""}`}
                data-bs-interval={(interval * 1000).toString()}
              >
                <Image
                  src={e["house_img_url"] || "/blur_image.png"}
                  alt="truss_logo.png"
                  width={440}
                  height={250}
                  onClick={() => {
                    router.push(`/house/${e["house_id"]}`);
                  }}
                  style={{ objectFit: "cover", width:"102vw"}}
                  placeholder={"blur"}
                  blurDataURL={"/placeholder.png"}
                />
              </div>
            ))
          ) : (
            <button
              className="d-block w-100 rounded-4"
              style={{
                backgroundColor: "gray",
                borderColor: "gray",
                objectFit: "cover",
              }}
            />
          )}
        </div>

      </MobileView>
    </div>
  );
}
