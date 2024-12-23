import HouseCategory from '@/app/house/_components/HouseCategory';
import BadgeList from '@/app/house/_components/BadgeList';
import { loadHouseData } from '@/app/house/_actions/actions';
import HouseCard from '@/app/house/_components/HouseCard';
import Pagination from '@/components/Pagination';
import { badgeList, categoryList, filterList } from '@/app/house/_data/Data';
import FilterList from '@/app/house/_components/FilterList';

export default async function House({ searchParams }) {
  const [numShowItems, numShowPages] = [30, 10];
  const [houseData, houseCount] = await loadHouseData(searchParams, numShowItems);

  return (
    <div>
      <div style={{ width: '100%', backgroundColor: 'black', height: '61px' }}></div>
      <div style={{ width: '95%', margin: '0 auto' }}>
        <div style={{ fontSize: '32px', fontWeight: '600', margin: '45px 0' }}>움집 제품들</div>
        <hr style={{ borderColor: '#777777' }} />
        <HouseCategory categoryList={categoryList} />
        <FilterList filterList={filterList} />
        <BadgeList badgeList={badgeList} />

        <div className="row">
          {houseData.map((product, i) => (
            <HouseCard key={i} houseData={product} />
          ))}
          <Pagination numItems={houseCount} numShowItems={numShowItems} numShowPages={numShowPages} />
        </div>
      </div>
    </div>
  );
}
