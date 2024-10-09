import HouseCategory from '@/app/test/4/_components/HouseCategory';
import FillteringList from '@/app/test/4/_components/FillteringList';
import BadgeList from '@/app/test/4/_components/BadgeList';
import Image from 'next/image';
import { loadHouseData } from '@/app/test/4/_actions/actions';

export const HighlightCardPriceText = ({ price }: { price: number | string }) => {
  let _price = Number(price);
  if (isNaN(_price)) return <>'NaN원'</>; // 애초에 숫자가 아니면 에러처리
  if (_price == 0) return <>'0원'</>; // 0원은 만원 단위가 아니라 제거
  _price = Math.floor(_price); // 소수점은 제거

  const man = _price % 10000 > 0 ? (_price % 10000) + '만' : '';
  _price = Math.floor(_price / 10000);
  const eok = _price % 10000 > 0 ? (_price % 10000) + '억' : ''; // 집은 억 단위까지
  return (
    <>
      <span style={{ color: '#314FC0', fontSize: '24px' }}>{eok + man}</span>원
    </>
  );
};

export default async function test4({ searchParams }) {
  const [numShowItems, numShowPages] = [24, 10];
  const [houseData, houseCount] = await loadHouseData(searchParams, numShowItems);
  console.log();
  console.log('Adfds');
  return (
    <>
      <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
        <HouseCategory></HouseCategory>
        <FillteringList></FillteringList>
        <BadgeList />

        <div className="row">
          {houseData.map((product, i) => (
            <div key={i} className="col-md-6 col-12">
              <div className="card" style={{ width: '100%', border: 'none', marginBottom: '30px' }}>
                <div
                  className="container"
                  style={{
                    backgroundColor: '#000000',
                    width: '100%',
                    aspectRatio: '5 / 3',
                    borderRadius: '5px',
                    position: 'relative',
                  }}
                >
                  <Image src={product.house_img_urls} alt={product.house_name + ' image'} fill />
                </div>
                <div style={{ padding: '10px' }}>
                  <div style={{ color: '#777777', fontSize: '17px' }}>{product.company_name}</div>
                  <div className="d-flex justify-content-between">
                    <div style={{ color: '#222222', fontSize: '22px' }}>{product.house_name}</div>
                    <div style={{ color: '#222222', fontSize: '22px' }}>
                      <HighlightCardPriceText price={product.final_price} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
