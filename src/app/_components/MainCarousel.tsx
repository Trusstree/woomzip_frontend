import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/MainCarousel.module.css';

const MainCarouselData = [
  {
    title: '모듈러주택 플랫폼, 움집이 곧 정식 출시될 예정이에요!',
    img: '/444.webp',
    profileImg: '/woomzip_icon.webp',
    author: '움집',
    url: `/community/17`,
  },
];

export default function MainCarousel() {
  return (
    <div className="col-md-9 col-12">
      <div style={{ position: 'relative' }}>
        {MainCarouselData.map((e, i) => (
          <Link key={i} href={e.url}>
            <div className={styles.container}>
              <Image src={e.img} alt="mainPic" className={styles.img} fill />
            </div>

            <div key={`title-${i}`} className={styles.title}>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
