'use client';

import { HighlightCardPriceText } from '@/app/house/_components/HighlightCardPriceText';
import Image from 'next/image';

export default function PlanningHouseCard({data}:{data:{ houseName: string, price:number, imgUrl:string, totalFloorArea:number, roomCount:number, toiletCount:number }}) {
  const { houseName, price, imgUrl, totalFloorArea, roomCount, toiletCount } = data;

  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card" style={{ width: '100%', border: 'none', marginBottom: '30px' }}>
        <Image src={imgUrl} alt={houseName + ' image'} fill style={{ borderRadius: '5px', objectFit: 'cover' }} />
        <div style={{ padding: '10px' }}>
          {/* <div style={{ color: '#777777', fontSize: '16px' }}>{companyName}</div> */}
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ alignItems: 'center' }}>
              <div style={{ color: '#222222', fontSize: '16px' }}>{houseName}</div>
              <Image
                src={'/houseIcons/safe.png'}
                alt={'safe'}
                width={15}
                height={15}
                style={{ width: '14px', height: '17px', marginLeft: '5px' }}
              ></Image>
            </div>
            <div style={{ color: '#222222', fontSize: '16px' }}>
              <HighlightCardPriceText price={price} />
            </div>
          </div>
          <div className="d-flex" style={{ fontSize: '15px' }}>
            <div className="d-flex" style={{ alignItems: 'center', marginRight: '20px' }}>
              <Image
                src={'/houseIcons/pyeong1.png'}
                alt={'pyeong.png'}
                width={18}
                height={18}
                style={{ width: '18px', height: 'auto', marginRight: '2px' }}
              ></Image>
              <div>{(totalFloorArea).toFixed(0)}평</div>
            </div>
            <div className="d-flex" style={{ alignItems: 'center', marginRight: '20px' }}>
              <Image
                src={'/houseIcons/room1.png'}
                alt={'room.png'}
                width={18}
                height={18}
                style={{ width: '18px', height: 'auto', marginRight: '2px' }}
              ></Image>
              <div>{roomCount}개</div>
            </div>
            <div className="d-flex" style={{ alignItems: 'center' }}>
              <Image
                src={'/houseIcons/toilet1.png'}
                alt={'toilet.png'}
                width={18}
                height={18}
                style={{ width: '18px', height: 'auto', marginRight: '2px' }}
              ></Image>
              <div>{toiletCount}개</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
