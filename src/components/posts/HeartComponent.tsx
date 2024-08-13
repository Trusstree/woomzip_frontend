'use client';

import { getUserAccessToken } from '@/actions/auth/authAction';
import HeartLineSVG from '@/components/svg/HeartLineSVG';
import HeartSolidSVG from '@/components/svg/HeartSolidSVG';
import ThumbLineSVG from '@/components/svg/ThumbLineSVG';
import ThumbSolidSVG from '@/components/svg/ThumbSolidSVG';
import { cardCountText } from '@/lib/stringUtil';
import { useCallback, useEffect, useState } from 'react';

export default function HeartComponent({
  pid,
  likeCount,
  isLiked,
  postHeart,
  postHeartRemove,
  type,
}: {
  pid: string | number;
  likeCount: number;
  isLiked: number;
  postHeart: any;
  postHeartRemove: any;
  type: 'heart' | 'thumb';
}) {
  const [isLike, setIsLike] = useState(isLiked);

  const handleLike = useCallback(async () => {
    // 로그인 확인하기
    const at = await getUserAccessToken();
    if (!at) return;

    if (!isLike) {
      const [data, error] = await postHeart(pid);
      if (error) {
        console.error(error);
        return;
      }
      setIsLike(1);
    } else {
      const [data, error] = await postHeartRemove(pid);
      if (error) {
        console.error(error);
        return;
      }
      setIsLike(0);
    }
  }, [isLike]);

  useEffect(() => {
    console.log(isLiked);
    setIsLike(isLiked ? isLiked : 0);
  }, [isLiked]);

  return (
    <div className="d-flex" style={{ width: '60px', padding: '0' }}>
      <div onClick={handleLike}>
        {isLike ? (
          type == 'heart' ? (
            <HeartSolidSVG width={23} />
          ) : (
            <ThumbSolidSVG width={23} />
          )
        ) : type == 'heart' ? (
          <HeartLineSVG width={23} />
        ) : (
          <ThumbLineSVG width={23} />
        )}
      </div>
      <div className="ps-1" style={{ width: '34px' }}>
        {cardCountText(likeCount - isLiked + isLike)}
      </div>
    </div>
  );
}
