'use client';

import { cardPriceText } from '@/lib/stringUtil';
import Image from 'next/image';
import HeartSolidSVG from '@/components/svg/HeartSolidSVG';
import styles from '@/app/mypage/[uid]/_styles/HouseCard.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function MypageHouseCard({
  data,
  className,
  edit,
  destroy,
}: {
  data: any;
  className: string;
  edit?: boolean;
  destroy?: boolean;
}) {
  const houseImage = data['house_img_urls'].split(',');
  const router = useRouter();
  const pathname = usePathname();

  const handleEdit = useCallback(async () => {
    router.push(`${pathname}/house?method=edit&house_id=${data.house_id}`);
  }, []);

  const handleDelete = useCallback(async () => {
    console.log('delete');
  }, []);

  const handleRoute = useCallback(async (e) => {
    const targetTxt = e.target.textContent;
    if (targetTxt != '변경' && targetTxt != '삭제') router.push(`/house/${data.house_id}`);
  }, []);

  return (
    <div className={`${className}`}>
      <div
        className="card text-decoration-none"
        style={{ width: '100%', border: 'none' }}
        onClick={async (e) => {
          await handleRoute(e);
        }}
      >
        <div className="row g-1" style={{ marginTop: '10px' }}>
          <div className="col-md-12 col-6">
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '100%', // 1:1 비율을 유지하기 위해 padding-top을 100%로 설정
                borderRadius: '5px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={houseImage[0]}
                alt="representative_image"
                style={{ objectFit: 'cover' }}
                fill
                sizes="(max-width: 767px)100vw, 20vw"
              />

              <div
                style={{
                  fontSize: '13px',
                  fontWeight: '300',
                  width: 'auto',
                  position: 'absolute',
                  top: 8,
                  left: 10,
                  backgroundColor: '#314FC0',
                  color: 'white',
                  padding: '3px 7px',
                  borderRadius: '5px',
                }}
              >
                <HeartSolidSVG width={16} />
                <span> {data['like_count'] || '0'}</span>
              </div>
              {edit && (
                <div
                  className="btn"
                  style={{
                    fontSize: '13px',
                    fontWeight: '300',
                    width: 'auto',
                    position: 'absolute',
                    bottom: 8,
                    left: 10,
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '3px 7px',
                    borderRadius: '5px',
                  }}
                  onClick={async () => {
                    await handleEdit();
                  }}
                >
                  변경
                </div>
              )}
              {destroy && (
                <div
                  className="btn"
                  style={{
                    fontSize: '13px',
                    fontWeight: '300',
                    width: 'auto',
                    position: 'absolute',
                    bottom: 8,
                    right: 10,
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '3px 7px',
                    borderRadius: '5px',
                  }}
                  onClick={async () => {
                    await handleDelete();
                  }}
                >
                  삭제
                </div>
              )}
            </div>
          </div>

          <div className="col-md-12 col-6">
            <div style={{ height: '120px', border: 'none' }}>
              <div className="card-body w-100" style={{ padding: '0 4px' }}>
                <div className="d-flex flex-column" style={{ width: '100%', padding: '5px' }}>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: '400',
                      color: 'gray',
                      marginTop: '3px',
                      width: 'auto',
                    }}
                  >
                    {data['company_name']}
                  </div>

                  <div className="d-flex justify-content-between">
                    <div
                      className="card-title text-nowrap"
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '15px',
                        fontWeight: '500',
                      }}
                    >
                      {data['house_name']}
                    </div>
                  </div>

                  <div className="row" style={{ marginTop: '-7px' }}>
                    {data['discount_rate'] > 0 && (
                      <div style={{ width: 'auto', paddingRight: '0' }}>
                        <div
                          style={{
                            color: '#314FC0',
                            fontSize: '15px',
                            fontWeight: '500',
                          }}
                        >
                          {data['discount_rate']}%
                        </div>
                      </div>
                    )}
                    <div style={{ width: 'auto' }}>
                      <div style={{ fontSize: '15px', fontWeight: '500' }}>{cardPriceText(data['final_price'])}</div>
                    </div>
                  </div>

                  {/* <div className="row" style={{ padding: '0 7px', fontSize: '14px', width: '100%' }}>
                  <div className="row" style={{ width: 'auto' }}>
                    <div style={{ width: 'auto', padding: '0' }}>
                      <Image src={'/houseIcons/pyeong.png'} alt={'pyeong.png'} width={28} height={28}></Image>
                    </div>
                    <span style={{ width: 'auto', padding: '0', marginTop: '6px' }}>
                      {data['total_floor_area']?.toFixed(1) || 'NaN'}평
                    </span>
                  </div>
                  <div className="row" style={{ width: 'auto' }}>
                    <div style={{ width: 'auto', padding: '0' }}>
                      <Image src={'/houseIcons/room.png'} alt={'pyeong.png'} width={28} height={28}></Image>
                    </div>
                    <div style={{ width: 'auto', padding: '0', marginTop: '6px' }}>{data['room_count']}개</div>
                  </div>
                  <div className="row" style={{ width: 'auto' }}>
                    <div style={{ width: 'auto', padding: '0' }}>
                      <Image src={'/houseIcons/toilet.png'} alt={'pyeong.png'} width={28} height={28}></Image>
                    </div>
                    <div style={{ width: 'auto', padding: '0', marginTop: '6px' }}>{data['toilet_count']}개</div>
                  </div>
                </div> */}
                </div>
              </div>
              <div className={`row g-0 ${styles.specText}`}>
                <div className="col-4">
                  <Image src={'/houseIcons/pyeong.png'} alt={'pyeong.png'} width={28} height={28}></Image>
                  <span>{data['total_floor_area']?.toFixed(1) || 'NaN'}평</span>
                </div>
                <div className="col-4">
                  <Image src={'/houseIcons/room.png'} alt={'pyeong.png'} width={28} height={28}></Image>
                  <span>{data['room_count']}개</span>
                </div>
                <div className="col-4">
                  <Image src={'/houseIcons/toilet.png'} alt={'pyeong.png'} width={28} height={28}></Image>
                  <span>{data['toilet_count']}개</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
