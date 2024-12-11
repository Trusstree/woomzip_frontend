'use client';

import useQueryString from '@/hooks/useQueryString';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CategoryButton({
  title,
  imgSrc,
  queryName,
  category,
}: {
  title: string;
  imgSrc: string;
  queryName: string;
  category?: string;
}) {
  const router = useRouter();
  const { createQuery, getParams, getRouteParams } = useQueryString();
  const handleClick = () => {
    createQuery('page');
    createQuery('q');
    createQuery(queryName, category);
    router.push(getRouteParams());
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '85px',
        height: '60px',
        display: 'flex', // Flexbox 사용
        flexDirection: 'column', // 수직 정렬
        alignItems: 'center', // 수평 중앙 정렬
        justifyContent: 'center', // 수직 중앙 정렬
        cursor: 'pointer',
      }}
    >
      <div>
        {/* <div className={getParams().get(queryName) == category ? styles.categoryIconBold : styles.categoryIcon}> */}
        <Image src={imgSrc} alt={title} width={30} height={28} style={{ width: '30px', padding: '0' }} />
      </div>
      <div
        style={{
          fontSize: '13px',
          fontWeight: '500',
          borderBottom: getParams().get(queryName) == category ? '3px solid #314FC0' : 'none', // 조건부 border-bottom
          paddingBottom: '2px',
          marginTop: '7px',
        }}
      >
        {/* <div
        className={getParams().get(queryName) == category ? styles.categoryButtonTextBold : styles.categoryButtonText}
        style={{ fontSize: '14px', fontWeight: '500' }}
      > */}
        {title}
      </div>
    </div>
  );
}
