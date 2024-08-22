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
    img: '/SubCarouselImgs/present.png',
    url: `/community/19`,
  },
  {
    backgroundColor: '#C03142',
    tagBackgroundColor: '#FFCCCC',
    tag: '서비스',
    tagColor: '#C03142',
    subTitle: '전원생활 동반자',
    title: '움집 서비스 알아보기',
    color: 'white',
    img: '/SubCarouselImgs/girl.png',
    url: `/service`,
  },
  {
    backgroundColor: '#136E11',
    tagBackgroundColor: '#E2FFCC',
    tag: '서비스',
    tagColor: '#136E11',
    subTitle: '건축 전문가',
    title: 'AI 타잔 알아보기',
    color: 'white',
    img: '/SubCarouselImgs/man.png',
    url: `/planning?house_id=54`,
  },
];

export default function SubCarousel() {
  return (
    <div id="Carousel" className={`carousel slide col-md-3 col-12`} data-bs-ride="carousel">
      <div>
        <div className="carousel-indicators">
          {SubCarouselData.map((e, i) => (
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
                  <div className="col-md-12 col-6">
                    <div
                      style={{
                        backgroundColor: SubCarouselData[i].tagBackgroundColor,
                        color: SubCarouselData[i].tagColor,
                        width: '50px',
                        margin: '20px auto',
                        borderRadius: '5px',
                        textAlign: 'center',
                        fontSize: '14px',
                      }}
                    >
                      {e.tag}
                    </div>
                    <div
                      style={{
                        textAlign: 'center',
                        color: SubCarouselData[i].color,
                        margin: '20px 0',
                        fontSize: '15px',
                        fontWeight: '340',
                      }}
                    >
                      <div>{e.subTitle}</div>
                      <div style={{ fontSize: '18px', margin: '5px 0', fontWeight: '600' }}>{e.title}</div>
                      <div style={{ fontSize: '18px', margin: '5px 0', fontWeight: '600' }}>{e.title2}</div>
                    </div>
                  </div>
                  <div className="col-md-12 col-6">
                    <Image
                      src={e.img}
                      alt={'mainPic'}
                      width={400}
                      height={450}
                      style={{
                        width: '100%',
                        height: '150px',
                        borderRadius: '5px',
                        objectFit: 'contain',
                      }}
                    ></Image>
                  </div>
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

    // <div className="col-md-3 col-12" style={{ marginTop: '20px' }}>
    //   {SubCarouselData.map((e, i) => (
    //     <Link key={i} style={{ cursor: 'pointer' }} href={e.url}>
    //       <div
    //         style={{
    //           width: '100%',
    //           backgroundColor: SubCarouselData[i].backgroundColor,
    //           borderRadius: '5px',
    //           height: '450px',
    //         }}
    //       >
    //         <div style={{ paddingTop: '30%' }}>
    //           <div
    //             style={{
    //               backgroundColor: SubCarouselData[i].tagBackgroundColor,
    //               color: SubCarouselData[i].tagColor,
    //               width: '50px',
    //               margin: '20px auto',
    //               borderRadius: '5px',
    //               textAlign: 'center',
    //               fontSize: '14px',
    //             }}
    //           >
    //             {e.tag}
    //           </div>
    //           <div
    //             style={{
    //               textAlign: 'center',
    //               color: SubCarouselData[i].color,
    //               margin: '20px 0',
    //               fontSize: '16px',
    //             }}
    //           >
    //             <div>{e.subTitle}</div>
    //             <div style={{ fontSize: '18px', margin: '10px 0', fontWeight: '600' }}>{e.title}</div>
    //           </div>
    //           <Image
    //             src={e.img}
    //             alt={'mainPic'}
    //             width={400}
    //             height={450}
    //             style={{ width: '100%', height: '100px', borderRadius: '5px', objectFit: 'cover', margin: '30px 0' }}
    //           ></Image>
    //         </div>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
  );
}
