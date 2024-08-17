import HouseExpl from '@/app/house/[pid]/_components/HouseExpl';
import HouseRemocon from '@/app/house/[pid]/_components/HouseRemocon';
import styles from '@/app/house/[pid]/_styles/HouseClient.module.css';
import { ReviewModal } from '@/components/house/ReviewModal';
import { loadData } from '@/app/house/[pid]/_actions/actions';
import LoadPage from '@/components/app/LoadPage';
import HeartComponent from '@/components/posts/HeartComponent';
import { getHouseHeartUser, postHouseHeart, postHouseHeartRemove } from '@/actions/apis/heartAPI';

type PageParams = {
  pid: number;
};

export default async function House({ params }: { params: PageParams }) {
  const { pid } = params;
  const { houseData, imageData, optionData, specificationData, userData, reviewData, deliveryData } =
    await loadData(pid);

  return houseData ? (
    <>
      <main>
        <div className="row" style={{ width: '90%', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: '28px', fontWeight: '400', margin: '10px 0' }}>{houseData['house_name']}</div>
            <div style={{ marginTop: '25px' }}>
              <HeartComponent
                heart_id={pid}
                likeCount={houseData['like_count']}
                getHeart={getHouseHeartUser}
                postHeart={postHouseHeart}
                postHeartRemove={postHouseHeartRemove}
                type={'heart'}
              />
            </div>
          </div>
          <div className="row g-2" style={{ width: '100%', position: 'relative' }}>
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
                  <img
                    src="https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
                    style={{ width: '25px' }}
                  />
                </div>
                <div style={{ width: 'auto', marginTop: '2px' }}>사진 전체보기</div>
              </div>
            </div>
          </div>

          <div className="g-3 row w-100">
            <div className="col-md-8 col-12">
              <HouseExpl
                pid={pid}
                deliveryData={deliveryData}
                houseData={houseData}
                specificationData={specificationData}
                optionData={optionData}
                reviewData={reviewData}
                userData={userData}
              />
            </div>

            <div className="col-md-4 col-12">
              <HouseRemocon pid={pid} houseData={houseData} optionData={optionData} />
            </div>
          </div>
        </div>
      </main>
      <ReviewModal id={'house_detail_modal'} images={imageData} isTwoCol />
    </>
  ) : (
    <LoadPage />
  );
}
