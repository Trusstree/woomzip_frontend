'use client';

import styles from '@/app/house/[pid]/_styles/HouseClient.module.css';

export default function ImageList({ pid, imageData }) {
  return (
    <div className="row g-2" style={{ width: '100%', position: 'relative', margin: '10px 0' }}>
      <div className="col-6">
        <div style={{ borderRadius: '10px 0 0 10px', overflow: 'hidden' }}>
          <img className={styles.mainImg} src={imageData[0]} />
        </div>
      </div>
      <div className="col-3">
        <div style={{ height: '50%', overflow: 'hidden' }}>
          <img className={styles.subImg} src={imageData[1]} />
        </div>
        <div style={{ height: '50%', marginTop: '4px', overflow: 'hidden' }}>
          <img className={styles.subImg} src={imageData[2]} />
        </div>
      </div>
      <div className="col-3">
        <div
          style={{
            height: '50%',
            overflow: 'hidden',
            borderRadius: '0 10px 0 0',
          }}
        >
          <img className={styles.subImg} src={imageData[3]} />
        </div>
        <div
          style={{
            height: '50%',
            marginTop: '4px',
            overflow: 'hidden',
            borderRadius: '0 0 10px 0',
          }}
        >
          <img className={styles.subImg} src={imageData[4]} />
        </div>
      </div>
      <div
        className="btn"
        data-bs-toggle="modal"
        data-bs-target={`#house_detail_modal`}
        style={{
          position: 'absolute',
          right: '25px',
          bottom: '15px',
          backgroundColor: 'white',
          opacity: '0.7',
          width: 'auto',
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ width: '30px' }}>
            <img src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png" style={{ width: '25px' }} />
          </div>
          <div style={{ width: 'auto', marginTop: '2px' }}>사진 전체보기</div>
        </div>
      </div>
    </div>
  );
}
