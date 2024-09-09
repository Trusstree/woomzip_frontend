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
    <div className={styles.categoryButton} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={getParams().get(queryName) == category ? styles.categoryIconBold : styles.categoryIcon}>
        <Image src={imgSrc} alt={title} width={26} height={26} />
      </div>
      <div
        className={getParams().get(queryName) == category ? styles.categoryButtonTextBold : styles.categoryButtonText}
      >
        {title}
      </div>
    </div>
  );
}
