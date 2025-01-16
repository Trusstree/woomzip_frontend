'use client';

import { HighlightCardPriceText } from '@/app/product/_components/HighlightCardPriceText';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PlanningHouseCard({
  data,
}: {
  data: {
    houseName: string;
    price: number;
    imgUrl: string;
    totalFloorArea: number;
    roomCount: number;
    toiletCount: number;
  };
}) {
  const { houseName, price, imgUrl, totalFloorArea, roomCount, toiletCount } = data;
  const router = useRouter();
  return houseName ? (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card" style={{ width: '100%', border: 'none', marginBottom: '30px' }}>
        <Image
          src={imgUrl}
          alt={houseName + ' image'}
          width={320}
          height={180}
          style={{ borderRadius: '5px', objectFit: 'cover' }}
        />
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
              <div>{totalFloorArea}평</div>
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
  ) : (
    <button
      style={{
        width: '50%',
        borderRadius: '5px',
        aspectRatio: '5 / 3',
        overflow: 'hidden',
        padding: '10px',
      }}
      onClick={() => {
        router.push('/house');
      }}
    >
      선택된 집이 없어요.
      <br />
      제품찾기에서 집을 선택해주세요.
    </button>
  );
}
