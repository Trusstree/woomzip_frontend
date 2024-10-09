import Image from 'next/image';
import { HighlightCardPriceText } from '@/app/test/4/_components/HighlightCardPriceText';
import Link from 'next/link';

export default function HouseCard({ imgUrl, houseId, houseName, companyName, price }) {
  return (
    <div className="col-md-6 col-12">
      <div className="card" style={{ width: '100%', border: 'none', marginBottom: '30px' }}>
        <Link
          className="container"
          style={{
            backgroundColor: '#000000',
            width: '100%',
            aspectRatio: '5 / 3',
            borderRadius: '5px',
            position: 'relative',
          }}
          href={`/house/${houseId}`}
        >
          <Image src={imgUrl} alt={houseName + ' image'} fill />
        </Link>
        <div style={{ padding: '10px' }}>
          <div style={{ color: '#777777', fontSize: '17px' }}>{companyName}</div>
          <div className="d-flex justify-content-between">
            <div style={{ color: '#222222', fontSize: '22px' }}>{houseName}</div>
            <div style={{ color: '#222222', fontSize: '22px' }}>
              <HighlightCardPriceText price={price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
