'use client';

import { elapsedTimeText } from '@/lib/stringUtil';
import { postCommentHeart, postCommentHeartRemove } from '@/actions/apis/heartAPI';
import HeartComponent from '@/components/posts/HeartComponent';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CommentText({ data, isCommentLike }) {
  const [isLike, setIsLike] = useState(0);
  const [likeCount, setLikeCount] = useState(data['comment_like_count']);

  useEffect(() => {
    if (isCommentLike) {
      setIsLike(isCommentLike);
      setLikeCount((cnt) => cnt - isCommentLike);
    }
  }, [isCommentLike]);

  return (
    <div style={{ background: 'white' }}>
      <div className="d-flex justify-content-between" style={{ marginBottom: '15px' }}>
        <div className="row">
          <div style={{ width: '40px', height: '40px' }}>
            <Image
              src={data['user_img_url'] || '/blur_image.png'}
              alt={'user_img_url'}
              width={30}
              height={30}
              style={{
                objectFit: 'cover',
                borderRadius: '50px',
                overflow: 'hidden',
                width: '30px',
                height: '30px',
              }}
            />
          </div>
          <div
            style={{
              width: '200px',
              fontWeight: '500',
              fontSize: '15px',
              marginTop: '4px',
            }}
          >
            {data['nickname']}
          </div>
        </div>
        <div className="d-flex" style={{ width: 'auto' }}>
          <div style={{ marginRight: '20px', fontSize: '15px', marginTop: '4px' }}>
            {elapsedTimeText(data['updated_at'] || data['created_at'])}
          </div>
          <HeartComponent
            heart_id={data['comment_id']}
            likeCount={data['comment_like_count']}
            getHeart={isCommentLike}
            postHeart={postCommentHeart}
            postHeartRemove={postCommentHeartRemove}
            type={'thumb'}
          />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div>{data['content']}</div>
      </div>
      <hr style={{ border: '1px solid gray' }} />
    </div>
  );
}
