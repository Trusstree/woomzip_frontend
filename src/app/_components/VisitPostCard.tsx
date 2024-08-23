import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { cardCountText, elapsedTimeText } from '@/lib/stringUtil';
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
  칼럼: { backgroundColor: '#F9F871', color: '#FFC75F', height: '260px' },
};

export default function VisitPostCard({ data, className }: PostCardProps) {
  const regex = /<([^>]+)>/gi;
  const imgSrcArr = data['content']
    .split(/img src="/g)
    .filter((e) => e.search(/https?/g) > -1)
    .map((e) => e.split('"')[0]);

  return (
    <div className={`${className}`}>
      <div
        className="card"
        style={{
          width: '100%',
          borderRadius: '5px',
          border: 'none',
          marginBottom: '20px',
        }}
      >
        <div className="row">
          <div className="col-md-12 col-6">
            <Link href={{ pathname: `/community/${data['post_id']}` }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '60%', // 1:1 비율을 유지하기 위해 padding-top을 100%로 설정
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={imgSrcArr[0] || '/111.webp'}
                  alt="post card img"
                  layout="fill" // 부모 요소를 꽉 채우도록 설정
                  objectFit="cover" // 이미지의 비율을 유지하며, 컨테이너를 덮도록 설정
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
          </div>
          <div className="col-md-12 col-6">
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
                    fontWeight: '500',
                    height: '50px',
                    overflow: 'hidden',
                    padding: '5px 0',
                  }}
                >
                  {/* <span
                    style={{
                      color: style[data.category].color,
                    }}
                  >
                    {data['category']} ·{' '}
                  </span> */}
                  {data.title}
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ fontSize: '14px', width: 'auto', fontWeight: '400', marginTop: '2px' }}
                >
                  <div>{data['nickname']}</div>

                  <div
                    className="d-flex justify-content-center align-content-center"
                    style={{ fontSize: '13px', color: 'gray', width: 'auto', fontWeight: '400' }}
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
      </div>
    </div>
  );
}
