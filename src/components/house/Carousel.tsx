
"use client";

import { useEffect, useState } from "react";
import { BrowserView } from "react-device-detect";
import { useRouter } from "next/navigation";

type CarouselProps = {
  className?: string;
};

const CarouselList = [
  {
    title: "전원생활의 시작을 함께, 움집",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/222.jpg",
    url: `/living/1`,
  },
  {
    title: "자연 속 작은 집",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/111.jpg",
    url: `/living/1`,
  },
];

export default function Carousel(props: CarouselProps) {
  const { className } = props;
  const router = useRouter();
  const [carouselData, setCarouselData] = useState(CarouselList);

  useEffect(() => {
    (async () => {
      // const [data, error] = await getLivings();
      // if (error) console.error(error);
      // setLivingData(data);
    })();
  }, []);

  const handleSlideClick = (url: string) => {
    router.push(url);
  };

  return (
    <div id="Carousel" className={`carousel slide ${className}`} data-bs-ride="carousel">
      <BrowserView>
        <div className="carousel-indicators">
          {carouselData.map((e, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#Carousel"
              data-bs-slide-to={`${i}`}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : "false"}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {carouselData.map((e, i) => (
            <div
              key={i}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
              onClick={() => handleSlideClick(e.url)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="w-100"
                style={{ overflow: "hidden", height: "600px", objectFit: "cover" }}
                src={e.img}
                alt={"홈"}
              />
              <div className="carousel-caption" style={{ fontSize: "50px", fontWeight: "600" }}>
                <div style={{ marginBottom: "200px", color: "white" }}>
                  {e.title}
                </div>
              </div>
            </div>
          ))}
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


      {/* <MobileView>
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

      </MobileView> */}
    </div>
  );
}
