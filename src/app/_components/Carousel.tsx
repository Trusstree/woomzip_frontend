import Link from "next/link";
import Image from "next/image";

const CarouselData = [
  {
    title: "움집 서비스 알아보기",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/222.jpg",
    url: `/service`,
  },
  {
    title: "움집 속 AI 타잔 알아보기",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/444.png",
    url: `/about`,
  },
];

export default function Carousel({ className }: { className?: string }) {
  return (
    <div id="Carousel" className={`carousel slide ${className}`} data-bs-ride="carousel">
      <div>
        <div className="carousel-indicators">
          {CarouselData.map((e, i) => (
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
          {CarouselData.map((e, i) => (
            <Link
              key={i}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
              style={{ cursor: "pointer" }}
              href={e["url"]}
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
            </Link>
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
