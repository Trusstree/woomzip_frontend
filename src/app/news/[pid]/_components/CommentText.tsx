'use client';

import { elapsedTimeText } from '@/lib/stringUtil';
import { useEffect, useState } from 'react';
import Image from '@/components/ImageFallback';
import styles from '@/app/news/[pid]/_styles/CommentText.module.css';

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
          <div className={styles.imageContainer}>
            <Image
              src={data['user_img_url'] || '/blur_image.png'}
              alt={'user_img_url'}
              width={30}
              height={30}
              className={styles.profileImage}
            />
          </div>
          <div className={styles.nickname}>{data['nickname']}</div>
        </div>
        <div className="d-flex" style={{ width: 'auto' }}>
          <div className={styles.createdTime}>{elapsedTimeText(data['updated_at'] || data['created_at'])}</div>
        </div>
      </div>
      <div className={styles.content}>{data['content']}</div>
      <hr style={{ border: '1px solid gray' }} />
    </div>
  );
}
