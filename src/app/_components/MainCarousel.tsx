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
    <div className="col-md-9 col-12" style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
      {MainCarouselData.map((e, i) => (
        <Link key={i} style={{ cursor: 'pointer' }} href={e.url}>
          <div className={styles.imageContainer}>
            <Image src={e.img} alt="mainPic" layout="fill" className={styles.image} />
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
