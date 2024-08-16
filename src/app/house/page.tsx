import HouseClient from '@/app/house/_components/HouseClient';
import styles from '@/styles/Phrase.module.css';

export default function Home() {
  return (
    <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
      <div className={styles.mainPhrase}>
        <span style={{ color: '#314FC0' }}>움집</span>에서 가장 쉽고 빠른 집 찾기
      </div>

      <HouseClient />
    </div>
  );
}
