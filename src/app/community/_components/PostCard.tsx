import Link from 'next/link';
import { cardCountText } from '@/lib/stringUtil';
import Image from 'next/image';
import styles from '@/app/house/_styles/houseCard.module.css';

type PostCardProps = {
  data: DataProps;
  className: string;
};

type DataProps = {
  idx: number;
  category: string;
  title: string;
  text: string;
  author: string;
  profilePicture: string;
  updated_at: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
};

// const styleColor = {
//   일반: { backgroundColor: '#CCD6FF', color: '#314FC0', height: '260px' },
//   공지: { backgroundColor: '#FFCCCC', color: '#C03142', height: '260px' },
//   질문: { backgroundColor: '#E2FFCC', color: '#8AC031', height: '260px' },
//   칼럼: { backgroundColor: '#ECECF3', color: '#686875', height: '260px' },
//   집들이: { backgroundColor: '#FFEAC7', color: '#D5A71E', height: '260px' },
// };

export default function PostCard({ data, className }: PostCardProps) {
  // const regex = /<([^>]+)>/gi;
  const imgSrcArr = data['content']
    .match(/img src="https.*amazonaws.com\/.*\.(jpg|jpeg|png|gif|bmp|webp)/gim)?.[0]
    .split('"')?.[1];
  //console.log(imgSrcArr);

  return (
    <div className={`${className}`}>
      <div
        className="card"
        style={{
          width: '100%',
          borderRadius: '5px',
          border: 'none',
          marginBottom: '50px',
        }}
      >
        <Link
          href={{ pathname: `/community/${data['post_id']}` }}
          className={`${styles.img_container} ${styles.img_hover}`}
          >
            <Image
              src={imgSrcArr || '/111.webp'}
              alt="post card img"
              style={{ objectFit: 'cover' }}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 20vw"
            />
        </Link>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '600', marginTop: '15px' }}>{data.title}</div>
          <div
            className="d-flex justify-content-between"
            style={{ alignItems: 'center', fontSize: '15px', color: '#555555', fontWeight: '500', marginTop: '10px' }}
          >
            <div style={{ width: 'auto' }}>{data['nickname']}</div>
            <div
              className="d-flex justify-content-center align-content-center"
              style={{ width: 'auto', fontSize: '14px' }}
            >
              <div>댓글 {cardCountText(data?.['comment_count'])}</div>
              <span style={{ padding: '0 5px' }}>·</span>
              <div>좋아요 {cardCountText(data?.['post_like_count'])}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
