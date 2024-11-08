'use client';

import { getHouseHeartUser } from '@/actions/apis/heartAPI';
import { getUserAccessToken } from '@/actions/auth/authAction';
import HeartLineSVG from '@/components/svg/HeartLineSVG';
import HeartSolidSVG from '@/components/svg/HeartSolidSVG';
import ThumbLineSVG from '@/components/svg/ThumbLineSVG';
import ThumbSolidSVG from '@/components/svg/ThumbSolidSVG';
import { cardCountText } from '@/lib/stringUtil';
import { useCallback, useEffect, useState } from 'react';

export default function HeartComponent({
  heart_id,
  likeCount,
  getHeart,
  postHeart,
  postHeartRemove,
  type,
}: {
  heart_id: string | number;
  likeCount: number;
  getHeart: Function | any;
  postHeart: Function;
  postHeartRemove: Function;
  type: 'heart' | 'thumb';
}) {
  const [at, setAT] = useState(undefined as any);
  const [isLike, setIsLike] = useState(0);
  const [isLiked, setIsLiked] = useState(0);

  const handleLike = useCallback(async () => {
    // 로그인 확인하기
    if (!at) return;

    if (!isLike) {
      const [data, error] = await postHeart(heart_id);
      if (error) {
        console.error(error);
        return;
      }
      setIsLike(1);
    } else {
      const [data, error] = await postHeartRemove(heart_id);
      if (error) {
        console.error(error);
        return;
      }
      setIsLike(0);
    }
  }, [isLike, at]);

  useEffect(() => {
    setIsLike(isLiked ? isLiked : 0);
  }, [isLiked]);

  useEffect(() => {
    (async () => {
      const at = await getUserAccessToken();
      if (!at) return;
      setAT(at);
      if (typeof getHeart == 'function') {
        // // 로그인 확인하기
        const [heartData, heartError] = await getHeart(heart_id);
        if (heartError) {
          console.error(heartError);
          return;
        }
        const data = heartData.data[0];
        setIsLiked(data.isHouseLike || data.isPostLike);
        return;
      }

      setIsLiked(getHeart);
    })();
  }, []);

  return (
    <div className="d-flex" style={{ width: '100%', padding: '0', alignItems: 'center' }}>
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
      <div className="ps-1" style={{ width: '100%', fontSize: '14px' }}>
        이 집을 <span style={{ color: '#314FC0' }}>{cardCountText(likeCount - isLiked + isLike)}명</span>이 좋아합니다.
      </div>
    </div>
  );
}
