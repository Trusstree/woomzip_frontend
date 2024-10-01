import Image from 'next/image';
import { loadHouseData } from '@/app/test/4/_actions/actions';

const filterItems = [
  { label: '카테고리', key: 'category' },
  { label: '침실', key: 'bedrooms' },
  { label: '욕실', key: 'bathrooms' },
  { label: '층', key: 'floors' },
  { label: '가격', key: 'price' },
  { label: '평수', key: 'floor_area' },
  { label: '골조', key: 'structure' },
  { label: 'AS', key: 'after_service' },
  { label: '특이사항', key: 'after_service' },
];

// const productData = [
//   {
//     company: '업체명',
//     productName: '제품명제품명제품명',
//     price: '1억 5400',
//     currency: '만원',
//   },
//   {
//     company: '업체명',
//     productName: '제품명제품명제품명',
//     price: '1억 5400',
//     currency: '만원',
//   },
//   {
//     company: '업체명',
//     productName: '제품명제품명제품명',
//     price: '1억 5400',
//     currency: '만원',
//   },
// ];

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
      <span style={{ color: '#314FC0', fontSize: '20px' }}>{eok + man}</span>원
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
        <div
          className="row"
          style={{ margin: '20px 0 40px 0', backgroundColor: '#F8F8FA', borderRadius: '10px', padding: '5px' }}
        >
          {/* 필터 아이템 생성 */}
          {filterItems.map((item) => (
            <div
              key={item.key}
              style={{
                width: 'auto',
                height: '35px',
                padding: '0 30px',
                backgroundColor: 'white',
                borderRadius: '10px',
                marginRight: '5px',
                alignContent: 'center',
              }}
            >
              <div className="row">
                <div
                  style={{ textAlign: 'center', fontSize: '15px', fontWeight: '500', width: 'auto', padding: '2px' }}
                >
                  {item.label}
                </div>
                <img
                  src="/down.png"
                  width={13}
                  height={13}
                  alt="down"
                  style={{ width: '13px', padding: '0', marginTop: '6px' }}
                />
              </div>
            </div>
          ))}

          {/* 초기화 버튼 */}
          <div
            style={{
              width: 'auto',
              height: '35px',
              padding: '0 30px',
              backgroundColor: 'white',
              borderRadius: '10px',
              marginLeft: 'auto', // 오른쪽 정렬
              alignContent: 'center',
              cursor: 'pointer',
            }}
          >
            <div className="row">
              <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: '500', width: 'auto', padding: '2px' }}>
                초기화
              </div>
              <img
                src="/reset.png"
                width={13}
                height={13}
                alt="reset"
                style={{ width: '13px', padding: '0', marginTop: '7px' }}
              />
            </div>
          </div>
        </div>

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
                  <div style={{ color: '#777777', fontSize: '16px' }}>{product.company_name}</div>
                  <div className="d-flex justify-content-between">
                    <div style={{ color: '#222222', fontSize: '18px' }}>{product.house_name}</div>
                    <div style={{ color: '#222222', fontSize: '18px' }}>
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
