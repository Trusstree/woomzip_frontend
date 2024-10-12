import HouseCategory from '@/app/test/4/_components/HouseCategory';
import FilterButton from '@/app/test/4/_components/FilterButton';
import BadgeList from '@/app/test/4/_components/BadgeList';
import { loadHouseData } from '@/app/test/4/_actions/actions';
import HouseCard from '@/app/test/4/_components/HouseCard';
import FilterResetButton from '@/app/test/4/_components/FilterResetButton';

const filterItems = [
  { label: '침실', queryName: 'room_count', queryData: [1, 2] },
  { label: '욕실', queryName: 'toilet_count', queryData: [1, 2] },
  { label: '층', queryName: 'floor_count', queryData: [1, 2] },
  {
    label: '가격',
    queryName: ['min_price', 'max_price'],
    queryData: [
      [0, 2500_0000],
      [2500_0000, 5000_0000],
      [5000_0000, 7500_0000],
      [7500_0000, 1_0000_0000],
      [1_0000_0000, 1_2500_0000],
    ],
  },
  {
    label: '평수',
    queryName: ['floor_area_min', 'floor_area_max'],
    queryData: [
      [0, 6],
      [6, 10],
      [10, 14],
      [14, 18],
      [18, 22],
      [22, 26],
    ],
  },
  { label: '골조', queryName: 'frame', queryData: ['경량목', '경량스틸', '기타'], selected: true },
  { label: 'AS', queryName: 'warranty', queryData: [12, 24] },
  {
    label: '특이사항',
    queryName: 'specificity',
    queryData: ['데크', '다락방', '발코니', '베란다', '옥상'],
    selected: true,
  },
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
            <FilterButton
              key={i}
              label={e.label}
              queryName={e.queryName}
              queryData={e.queryData}
              selected={e.selected}
            />
          ))}
          <FilterResetButton />
        </div>

        <BadgeList />

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
