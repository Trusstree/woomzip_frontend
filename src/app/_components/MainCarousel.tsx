import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Carousel.module.css';

const MainCarouselData = [
  {
    title: '모듈러주택 플랫폼, 움집이 곧 정식 출시될 예정이에요!',
    img: '/444.webp',
    profileImg: '/woomzip_icon.png',
    author: '움집',
    url: `/community/17`,
  },
];

export default function MainCarousel() {
  return (
    <div className="col-md-9 col-12" style={{ position: 'relative', overflow: 'hidden' }}>
      {MainCarouselData.map((e, i) => (
        <Link key={i} style={{ position: 'relative', cursor: 'pointer' }} href={e.url}>
          <div className={styles.imageContainer} style={{ position: 'relative', height: 450 }}>
            <Image
              src={e.img}
              alt="mainPic"
              fill
              sizes="(max-width: 880px) 80vw, 100vw"
              className={styles.image}
              style={{ borderRadius: '5px' }}
            />
          </div>
        </Link>
      ))}
      {MainCarouselData.map((e, i) => (
        <div
          key={`title-${i}`}
          style={{
            position: 'absolute',
            top: 320,
            left: 40,
            color: 'white',
            fontSize: '30px',
            fontWeight: '700',
            wordBreak: 'keep-all',
            textShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div>{e.title}</div>
          <div>
            <Image
              src={e.profileImg}
              alt={'profileImg'}
              width={30}
              height={30}
              style={{ borderRadius: '50px' }}
            ></Image>
            <span style={{ fontSize: '18px', fontWeight: '400', marginLeft: '7px' }}>{e.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
