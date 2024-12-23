import Image from 'next/image';
import { HighlightCardPriceText } from '@/app/house/_components/HighlightCardPriceText';
import Link from 'next/link';

export default function HouseCard({ houseData }) {
  const { imgUrl, houseId, houseName, companyName, price, roomCount, toiletCount, totalFloorArea } = houseData;

  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card" style={{ width: '100%', border: 'none', marginBottom: '60px' }}>
        <Link
          className="container"
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            position: 'relative',
          }}
          href={`/house/${houseId}`}
        >
          <Image src={imgUrl} alt={houseName + ' image'} fill style={{ borderRadius: '7px', objectFit: 'cover' }} />
        </Link>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '600', marginTop: '15px' }}>{houseName}</div>
          <div
            className="d-flex"
            style={{ fontSize: '15px', wordBreak: 'keep-all', marginTop: '5px', fontWeight: '500', color: '#555555' }}
          >
            <div>{totalFloorArea.toFixed(0)}평</div>
            <div style={{ margin: '0 10px' }}>·</div>
            <div>침실 {roomCount}개</div>
            <div style={{ margin: '0 10px' }}>·</div>
            <div>욕실 {toiletCount}개</div>
          </div>
          <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px' }}>
            <HighlightCardPriceText price={price} />
            <span style={{ fontWeight: '500', color: '#555555', fontSize: '15px' }}> / 채</span>
          </div>
        </div>
      </div>
    </div>
  );
}
