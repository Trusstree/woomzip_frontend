import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Carousel.module.css';
import { Stint_Ultra_Condensed } from 'next/font/google';

const CarouselData = [
  {
    title: '움집 서비스 알아보기',
    explain: '모듈러 기반 단독주택 프롭테크 플랫폼',
    img: '/CarouselImgs/CarouselMain1.webp',
    subImg: '/CarouselImgs/CarouselSub1.png',
    url: `/service`,
  },
  {
    title: 'AI 타잔 알아보기',
    explain: '당신만의 건축 전문가',
    img: '/CarouselImgs/CarouselMain2.webp',
    subImg: '/CarouselImgs/CarouselSub2.png',
    url: `/planning?house_id=14`,
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
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0 ? 'true' : 'false'}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {CarouselData.map((e, i) => (
            <Link
              key={i}
              className={`carousel-item ${i === 0 ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
              href={e['url']}
            >
              <Image priority width={1920} height={350} className={styles.mainImg} src={e.img} alt={'홈'} />
              <div className={`row ${styles.mainContainer}`}>
                <div
                  className="col-7"
                  style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                      wordBreak: 'keep-all',
                      textAlign: 'center',
                    }}
                  >
                    <div className={styles.explain}>{e.explain}</div>
                    <div className={styles.title}>{e.title}</div>
                  </div>
                </div>

                <div className="col-5" style={{ justifyContent: 'center', alignContent: 'center', height: '100%' }}>
                  <Image width={400} height={300} className={styles.subImg} src={e.subImg} alt={'홈'} />
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
          style={{ mixBlendMode: 'difference' }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#Carousel"
          data-bs-slide="next"
          style={{ mixBlendMode: 'difference' }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
