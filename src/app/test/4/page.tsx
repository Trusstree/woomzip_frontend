import HouseCategory from '@/app/test/4/_components/HouseCategory';
import FilterButton from '@/app/test/4/_components/FilterButton';
import BadgeList from '@/app/test/4/_components/BadgeList';
import { loadHouseData } from '@/app/test/4/_actions/actions';
import HouseCard from '@/app/test/4/_components/HouseCard';

const filterItems = [
  { label: '침실', data: [1, 2] },
  { label: '욕실', data: [1, 2] },
  { label: '층', data: [1, 2] },
  {
    label: '가격',
    data: [
      [0, 2500_0000],
      [2500_0000, 5000_0000],
      [5000_0000, 7500_0000],
      [7500_0000, 1_0000_0000],
      [1_0000_0000, 1_2500_0000],
    ],
  },
  {
    label: '평수',
    data: [
      [0, 6],
      [6.1, 10],
      [10.1, 14],
      [14.1, 18],
      [18.1, 22],
      [22.1, 26],
    ],
  },
  { label: '골조', data: ['경량목', '경량스틸', '기타'] },
  { label: 'AS', data: [12, 24] },
  { label: '특이사항', data: ['데크', '다락방', '발코니', '베란다', '옥상'] },
];

export default async function test4({ searchParams }) {
  const [numShowItems, numShowPages] = [36, 10];
  const [houseData, houseCount] = await loadHouseData(searchParams, numShowItems);

  return (
    <>
      <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
        <HouseCategory />

        {/* Filter List */}
        <div
          className="row"
          style={{ margin: '10px 0', backgroundColor: '#F8F8FA', borderRadius: '10px', padding: '5px' }}
        >
          {filterItems.map((e, i) => (
            <FilterButton key={i} label={e.label} data={e.data} />
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
        {/* <FillteringList /> */}
        {/* <BadgeList /> */}

        <div className="row">
          {houseData.map((product, i) => (
            <HouseCard
              key={i}
              houseId={product.house_id}
              imgUrl={product.house_img_urls}
              houseName={product.house_name}
              companyName={product.company_name}
              price={product.final_price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
