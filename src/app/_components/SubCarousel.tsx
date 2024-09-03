import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/SubCarousel.module.css';

const SubCarouselData = [
  {
    backgroundColor: '#314FC0',
    tagBackgroundColor: '#CCD6FF',
    tag: '이벤트',
    tagColor: '#314FC0',
    subTitle: '서비스 출시 기념',
    title: '전 제품 구매 시,',
    title2: '금액의 1%를 환급!',
    color: 'white',
    img: '/SubCarouselImgs/present.webp',
    url: `/community/19`,
  },
  {
    backgroundColor: '#FF7A2F',
    tagBackgroundColor: '#FFCCCC',
    tag: '서비스',
    tagColor: '#C03142',
    subTitle: '전원생활 동반자',
    title: '움집 서비스 알아보기',
    color: 'white',
    img: '/SubCarouselImgs/girl.webp',
    url: `/service`,
  },
  {
    backgroundColor: '#303033',
    tagBackgroundColor: '#E2FFCC',
    tag: '서비스',
    tagColor: '#136E11',
    subTitle: '건축 전문가',
    title: 'AI 타잔 알아보기',
    color: 'white',
    img: '/SubCarouselImgs/man.webp',
    url: `/planning?house_id=54`,
  },
];

export default function SubCarousel() {
  return (
    <div id="SubCarousel" className={`carousel slide col-md-3 col-12`} data-bs-ride="carousel">
      <div>
        <div className="carousel-indicators">
          {SubCarouselData.map((e, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#SubCarousel"
              data-bs-slide-to={`${i}`}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0 ? 'true' : 'false'}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {SubCarouselData.map((e, i) => (
            <Link
              key={i}
              className={`carousel-item ${i === 0 ? 'active' : ''}`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
              href={e['url']}
            >
              <div
                className={`justify-content-center align-content-center ${styles.container}`}
                style={{
                  width: '100%',
                  backgroundColor: SubCarouselData[i].backgroundColor,
                  borderRadius: '5px',
                }}
              >
                <div className="row">
                  <div className="col-md-12 col-7">
                    <div
                      className={styles.tag}
                      style={{
                        backgroundColor: SubCarouselData[i].tagBackgroundColor,
                        color: SubCarouselData[i].tagColor,
                      }}
                    >
                      {e.tag}
                    </div>
                    <div
                      style={{
                        textAlign: 'center',
                        color: SubCarouselData[i].color,
                      }}
                    >
                      <div className={styles.subTitle}>{e.subTitle}</div>
                      <div className={styles.title}>{e.title}</div>
                      <div className={styles.title}>{e.title2}</div>
                    </div>
                  </div>
                  <div className="col-md-12 col-5">
                    <Image src={e.img} alt={'mainPic'} width={400} height={450} className={styles.pic} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#SubCarousel"
          data-bs-slide="prev"
          style={{ mixBlendMode: 'difference' }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#SubCarousel"
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
