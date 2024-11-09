import Link from 'next/link';
import { cardCountText } from '@/lib/stringUtil';
import Image from 'next/image';

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

const style = {
  일반: { backgroundColor: '#CCD6FF', color: '#314FC0', height: '260px' },
  공지: { backgroundColor: '#FFCCCC', color: '#C03142', height: '260px' },
  질문: { backgroundColor: '#E2FFCC', color: '#8AC031', height: '260px' },
  칼럼: { backgroundColor: '#ECECF3', color: '#686875', height: '260px' },
  집들이: { backgroundColor: '#FFEAC7', color: '#D5A71E', height: '260px' },
};

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
          marginBottom: '30px',
        }}
      >
        <Link href={{ pathname: `/community/${data['post_id']}` }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '5 / 4',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={imgSrcArr || '/111.webp'}
              alt="post card img"
              style={{ objectFit: 'cover' }}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 20vw"
            />
          </div>

          <div
            className="card-body"
            style={{
              width: '100%',
              height: '260px',
              borderRadius: '10px',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          ></div>
        </Link>
        <div
          className={`card-footer`}
          style={{
            border: 'none',
            backgroundColor: 'white',
            padding: '6px',
          }}
        >
          <div className="d-flex flex-column" style={{ width: '100%' }}>
            {/* <div className="d-flex">
              <img src={data.profilePicture} width={40} height={40}/>
              <div className="mx-3 fw-bold align-self-center">{data.author}</div>
            </div> */}
            <div
              style={{
                fontSize: '15px',
                width: 'auto',
                fontWeight: '600',
                height: '50px',
                overflow: 'hidden',
                padding: '5px 0',
              }}
            >
              <span
                style={{
                  color: style[data.category].color,
                  backgroundColor: style[data.category].backgroundColor,
                  borderRadius: '20px',
                  padding: '0 5px',
                }}
              >
                {data['category']}
              </span>{' '}
              {data.title}
            </div>

            <div className="d-flex justify-content-between" style={{ alignItems: 'center' }}>
              <div style={{ fontSize: '14px', width: 'auto' }}>{data['nickname']}</div>

              <div
                className="d-flex justify-content-center align-content-center"
                style={{ fontSize: '13px', width: 'auto', fontWeight: '400', color: 'gray' }}
              >
                <div>댓글 {cardCountText(data?.['comment_count'])}</div>
                <span style={{ padding: '0 5px' }}>·</span>
                <div>좋아요 {cardCountText(data?.['post_like_count'])}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
