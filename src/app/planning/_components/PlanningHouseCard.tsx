'use client';

import { cardPriceText } from '@/lib/stringUtil';
import Image from 'next/image';

export default function PlanningHouseCard({ data, className }: { data: any; className: string }) {
  const houseImage = data['house_img_urls'].split(',');

  return (
    <div className={`${className}`}>
      <div style={{ width: '100%', border: 'none' }}>
        <Image
          src={houseImage[0]}
          alt="representative_image"
          width={300}
          height={200}
          style={{
            objectFit: 'cover',
            position: 'relative',
            width: '100%',
            borderRadius: '5px',
            aspectRatio: '5 / 3',
            overflow: 'hidden',
          }}
        />

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

        <div
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '15px',
            fontWeight: '500',
          }}
        >
          {data['house_name']}
        </div>

        <div className="row">
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

        <div className="d-flex justify-content-between" style={{ fontSize: '14px', fontWeight: '400' }}>
          <div>
            <Image
              src={'/houseIcons/pyeong1.png'}
              alt={'pyeong.png'}
              width={28}
              height={28}
              style={{ width: '19px', height: 'auto', marginRight: '2px' }}
            ></Image>
            <span>{data['total_floor_area']?.toFixed(1) || 'NaN'}평</span>
          </div>
          <div>
            <Image
              src={'/houseIcons/room1.png'}
              alt={'pyeong.png'}
              width={28}
              height={28}
              style={{ width: '19px', height: 'auto', marginRight: '2px' }}
            ></Image>
            <span>{data['room_count']}개</span>
          </div>
          <div>
            <Image
              src={'/houseIcons/toilet1.png'}
              alt={'pyeong.png'}
              width={28}
              height={28}
              style={{ width: '19px', height: 'auto', marginRight: '2px' }}
            ></Image>
            <span>{data['toilet_count']}개</span>
          </div>
        </div>
      </div>
    </div>
  );
}
