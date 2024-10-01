'use client';

import useQuery from '@/hooks/useQuery';
import { useRouter } from 'next/navigation';
import styles from '@/styles/CategoryButton.module.css';
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
  const { createQuery, getParams, getRouteParams } = useQuery();
  const handleClick = () => {
    createQuery('page');
    createQuery('q');
    createQuery(queryName, category);
    router.push(getRouteParams());
  };

  return (
    <div
      className={styles.categoryButton}
      onClick={handleClick}
      style={{
        width: '70px',
        height: '50px',
        padding: '3px',
        backgroundColor: 'white',
        borderRadius: '10px',
        marginRight: '5px',
        display: 'flex', // Flexbox 사용
        flexDirection: 'column', // 수직 정렬
        alignItems: 'center', // 수평 중앙 정렬
        justifyContent: 'center', // 수직 중앙 정렬
        cursor: 'pointer',
      }}
    >
      <div className={getParams().get(queryName) == category ? styles.categoryIconBold : styles.categoryIcon}>
        <Image src={imgSrc} alt={title} width={25} height={25} style={{ width: '25px', padding: '0' }} />
      </div>
      <div
        className={getParams().get(queryName) == category ? styles.categoryButtonTextBold : styles.categoryButtonText}
        style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', width: 'auto' }}
      >
        {title}
      </div>
    </div>
  );
}
