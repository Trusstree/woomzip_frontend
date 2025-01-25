'use client';

import useQueryString from '@/hooks/useQueryString';
import { useRouter } from 'next/navigation';

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
        width: 'auto',
        cursor: 'pointer',
        padding: '5px',
      }}
    >
      <div
        style={{
          fontSize: '13px',
          fontWeight: '500',
          backgroundColor: getParams().get(queryName) == category ? 'black' : '#ffffff',
          color: getParams().get(queryName) == category ? '#ffffff' : 'black',
          border: getParams().get(queryName) == category ? '1px solid black' : '1px solid lightgray',
          padding: '5px 10px',
          borderRadius: '20px',
        }}
      >
        {title}
      </div>
    </div>
  );
}
