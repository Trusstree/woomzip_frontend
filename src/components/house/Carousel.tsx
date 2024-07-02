"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CarouselProps = {
  className?: string;
};

const CarouselList = [
  {
    title: "움집 서비스 알아보기",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/222.jpg",
    url: `/about/service`,
  },
  {
    title: "움집 속 AI 타잔 알아보기",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/444.png",
    url: `/service`,
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
      <div>
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
                style={{
                  overflow: "hidden",
                  height: "500px",
                  objectFit: "cover",
                }}
                src={e.img}
                alt={"홈"}
              />
              <div className="carousel-caption">
                <div
                  style={{
                    color: "white",
                    fontSize: "40px",
                    marginBottom: "10px",
                    fontWeight: "600",
                    wordBreak: "keep-all",
                  }}
                >
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
      </div>
    </div>
  );
}
