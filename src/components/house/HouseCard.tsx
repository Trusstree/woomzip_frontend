'use client';

import { cardPriceText } from '@/lib/stringUtil';
import Image from 'next/image';
import Link from 'next/link';

export default function HouseCard({ data, className }: { data: any; className?: string }) {
  const houseImage = data['house_img_urls'].split(',');

  return (
    <div className={`${className ? `${className} ` : ''}col-md-4 col-lg-3`} style={{ marginBottom: '30px' }}>
      <Link
        className="card text-decoration-none"
        style={{ width: '100%', border: 'none' }}
        href={`/house/${data.house_id}`}
      >
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
            layout="fill" // 부모 요소를 꽉 채우도록 설정
            objectFit="cover" // 이미지의 비율을 유지하며, 컨테이너를 덮도록 설정
          />
        </div>

        <div className="card-body w-100" style={{ height: '110px', border: 'none', padding: '5px' }}>
          <div className="d-flex flex-column" style={{ width: '100%' }}>
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
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  width: 'auto',
                  marginTop: '-2px',
                }}
              >
                <span style={{ fontSize: '18px', fontWeight: '800', color: '#DA0004' }}>♥</span>{' '}
                {data['like_count'] || '0'}
              </div>
            </div>

            <div className="row d-flex justify-content-between" style={{ marginTop: '-7px' }}>
              <div style={{ width: 'auto' }}>
                <div style={{ fontSize: '15px', fontWeight: '500' }}>{cardPriceText(data['final_price'])}</div>
              </div>
              <div style={{ width: 'auto' }}>
                {data['discount_rate'] > 0 && (
                  <div
                    style={{
                      color: '#314FC0',
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    {data['discount_rate']}%
                  </div>
                )}
              </div>
            </div>

            <div className="d-flex justify-content-between" style={{ padding: '0 7px', fontSize: '15px' }}>
              <div className="row" style={{ width: 'auto' }}>
                <div style={{ width: 'auto', padding: '0' }}>
                  <Image src={'/houseIcons/pyeong.png'} alt={'pyeong.png'} width={30} height={30}></Image>
                </div>
                <div style={{ width: 'auto', padding: '3px' }}>{data['total_floor_area']?.toFixed(1) || 'NaN'}평</div>
              </div>
              <div className="row" style={{ width: 'auto' }}>
                <div style={{ width: 'auto', padding: '0' }}>
                  <Image src={'/houseIcons/room.png'} alt={'pyeong.png'} width={30} height={30}></Image>
                </div>
                <div style={{ width: 'auto', padding: '3px' }}>{data['room_count']}개</div>
              </div>
              <div className="row" style={{ width: 'auto' }}>
                <div style={{ width: 'auto', padding: '0' }}>
                  <Image src={'/houseIcons/toilet.png'} alt={'pyeong.png'} width={30} height={30}></Image>
                </div>
                <div style={{ width: 'auto', padding: '3px' }}>{data['toilet_count']}개</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
