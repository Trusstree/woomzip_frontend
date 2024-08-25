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

export default function PostCard({ data, className }: PostCardProps) {
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
        <Link href={{ pathname: `/community/${data['post_id']}` }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '100%', // 1:1 비율을 유지하기 위해 padding-top을 100%로 설정
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={imgSrcArr[0] || '/111.webp'}
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
          >
            {/* <div className="d-flex justify-content-between">
              <div
                style={{
                  backgroundColor: style[data.category].backgroundColor,
                  borderColor: style[data.category].backgroundColor,
                  width: '60px',
                  fontSize: '14px',
                  color: style[data.category].color,
                  borderRadius: '15px',
                  padding: '3px 6px',
                  textAlign: 'center',
                }}
              >
                {data['category']}
              </div>

              <div className="d-flex justify-content-between" style={{ width: 'auto' }}>
                <div
                  className="row"
                  style={{
                    width: 'auto',
                    backgroundColor: 'white',
                    opacity: '0.8',
                    borderRadius: '15px',
                    padding: '3px 0 3px 10px',
                    marginRight: '0',
                  }}
                >
                  <div className="d-flex" style={{ width: '50px', padding: '0' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="gray"
                      width={25}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                    <div
                      className="ps-1"
                      style={{
                        width: '34px',
                        fontSize: '15px',
                        color: 'gray',
                        fontWeight: '400',
                      }}
                    >
                      {cardCountText(data?.['comment_count'])}
                    </div>
                  </div>
                  <div className="d-flex" style={{ width: '50px', padding: '0' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="gray"
                      width={25}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                    <div
                      className="ps-1"
                      style={{
                        width: '34px',
                        fontSize: '15px',
                        color: 'gray',
                        fontWeight: '400',
                      }}
                    >
                      {cardCountText(data?.['post_like_count'])}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
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

            <div
              className="d-flex justify-content-between"
              style={{ fontSize: '14px', width: 'auto', fontWeight: '400', marginTop: '5px', color: '#D1D1DA' }}
            >
              <div style={{ fontWeight: '500' }}>{data['nickname']}</div>

              <div
                className="d-flex justify-content-center align-content-center"
                style={{ fontSize: '13px', width: 'auto', fontWeight: '400' }}
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
