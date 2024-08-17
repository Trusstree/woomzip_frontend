'use client';

import useQuery from '@/hooks/useQuery';
import { useRouter } from 'next/navigation';
import styles from '@/styles/CategoryButton.module.css';

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
  const { createQuery, getRouteParams } = useQuery();
  const handleClick = () => {
    createQuery(queryName, category);
    router.push(getRouteParams());
  };

  return (
    <div className={styles.categoryButton} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={styles.categoryIcon}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.categoryButtonText}>{title}</div>
    </div>
  );
}
