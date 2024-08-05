import Link from "next/link";
import Image from "next/image";

const CarouselData = [
  {
    title: "움집 서비스 알아보기",
    explain: "모듈러 기반 단독주택 프롭테크 플랫폼",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/111.webp",
    subImg:
      "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/1111.png",
    url: `/service`,
  },
  {
    title: "AI 타잔 알아보기",
    explain: "당신만의 건축 전문가",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/222.webp",
    subImg:
      "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/2222.png",
    url: `/planning?house_id=14`,
  },
];

export default function Carousel({ className }: { className?: string }) {
  return (
    <div
      id="Carousel"
      className={`carousel slide ${className}`}
      data-bs-ride="carousel"
    >
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
              <Image
                width={1920}
                height={350}
                className="w-100"
                style={{
                  overflow: "hidden",
                  height: "380px",
                  objectFit: "cover",
                  position: "relative",
                }}
                src={e.img}
                alt={"홈"}
              />
              <div
                className="row w-100"
                style={{
                  position: "absolute",
                  top: "1px",
                  left: "1px",
                }}
              >
                <div className="col-md-5 col-12">
                  <div
                    style={{
                      color: "white",

                      wordBreak: "keep-all",
                      margin: "0 auto",
                      paddingTop: "20%",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "400",
                      }}
                    >
                      {e.explain}
                    </div>
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: "500",
                      }}
                    >
                      {e.title}
                    </div>
                  </div>
                </div>

                <div className="col-md-7 col-12" style={{}}>
                  <Image
                    width={300}
                    height={200}
                    className="w-100"
                    style={{
                      overflow: "hidden",
                      width: "auto",
                      maxWidth: "80%",
                      marginLeft: "15%",
                      height: "74%",
                      marginTop: "2%",
                      objectFit: "contain",
                      position: "relative",
                      borderRadius: "10px",
                    }}
                    src={e.subImg}
                    alt={"홈"}
                  />
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
