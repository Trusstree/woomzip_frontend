'use client';

import { cardPriceText } from '@/lib/stringUtil';
import Image from 'next/image';

export default function PlanningHouseCard({ data, className }: { data: any; className: string }) {
  const houseImage = data['house_img_urls'].split(',');

  return (
    <div className={`${className}`}>
      <div
        className="card text-decoration-none"
        style={{ width: '100%', border: 'none' }}
      >
        <div className="row" style={{ marginTop: '10px' }}>
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
                  fontSize: '15px',
                  fontWeight: '500',
                  width: 'auto',
                  position: 'absolute',
                  bottom: 9,
                  right: 10,
                  backgroundColor: '#D1D1DA',
                  padding: '0 7px',
                  borderRadius: '10px',
                }}
              >
                <span style={{ fontSize: '19px', fontWeight: '800', color: '#314FC0' }}>♥</span>{' '}
                {data['like_count'] || '0'}
              </div>
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
              <div className="row g-0" style={{ fontSize: '14px', fontWeight: '400' }}>
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
