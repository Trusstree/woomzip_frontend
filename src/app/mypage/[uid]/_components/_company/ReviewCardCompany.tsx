'use client';

import { badgeStyles } from '@/lib/badgeStyles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ReviewCardCompany({ uid, id, nickname, date, rating, tag, comment, images }) {
  const router = useRouter();
  // function handleClick() {
  //   // e.target.value
  //   router.push(url);
  // }
  const handleClick = () => {
    router.push(`/mypage/${uid}/review`);
  };

  return (
    <div
      className="card"
      style={{
        margin: '7px',
        width: '380px',
        minWidth: '350px',
        height: '100%',
        border: 'none',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
      }}
      onClick={handleClick}
    >
      <div
        className="container row g-1"
        style={{
          margin: '0',
          padding: '10px',
          width: '100%',
          height: '150px',
        }}
      >
        <div className="col-8" style={{ height: '150px' }}>
          <div className="pb-1" style={{ color: 'gray' }}>
            {nickname}
          </div>

          <div
            className="container p-0"
            style={{
              marginLeft: '0',
              fontSize: '15px',
              fontWeight: '500',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              whiteSpace: 'pre-wrap',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
            }}
          >
            {comment}
          </div>
        </div>
        <div className="col-4 m-0 p-0 d-flex flex-column align-items-center">
          <Image
            className="card-img-top mt-3"
            style={{ width: 110, borderRadius: '10px', objectFit: 'cover' }}
            alt="main-img"
            src={images?.[0] || 'blur_image.png'}
            width={110}
            height={110}
            unoptimized={true}
          />
        </div>
      </div>
      <div className="container" style={{ width: '1000px', marginBottom: '15px' }}>
        {tag?.map((badge, index) => (
          <span
            className="badge"
            key={index}
            style={{
              padding: '6px',
              marginRight: '4px',
              backgroundColor: badgeStyles(badge),
              color: 'white',
              fontWeight: '400',
            }}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
