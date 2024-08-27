import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Carousel.module.css';

const SubCarouselData = [
  {
    backgroundColor: '#ECECF3',
    subTitle: '나무내음 가득',
    title: '목조 주택 전문가,',
    title2: '탑디자인의 새로운 제품!',
    subTitle2: '',
    color: '#686875',
    img: '/CarouselImgs/topdesign.webp',
    url: `/house?q=탑디자인`,
  },
  {
    backgroundColor: '#DCE3FF',
    subTitle: '최대 20% 할인',
    title: '패시브하우스 명장,',
    title2: '모두가하우징 기획전!',
    subTitle2: '08.25~',
    color: '#1E4DFF',
    img: '/CarouselImgs/moduga.webp',
    url: `/house?q=모두가하우징`,
  },
];

export default function SubCarousel() {
  return (
    <div id="Carousel" className={`carousel slide w-100`} data-bs-ride="carousel">
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
                }}
              >
                <div className="row" style={{ maxWidth: '1600px', margin: '0 auto' }}>
                  <div className="col-md-2 col-0"></div>
                  <div className="col-md-4 col-6">
                    <div
                      style={{
                        color: SubCarouselData[i].color,
                        marginTop: '10%',
                      }}
                    >
                      <div className={styles.subTitle}>{e.subTitle}</div>
                      <div className={styles.title}>{e.title}</div>
                      <div className={styles.title}>{e.title2}</div>
                      <div className={styles.subTitle}>{e.subTitle2}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <Image src={e.img} alt={'mainPic'} width={400} height={200} className={styles.img} />
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
