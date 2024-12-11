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
    <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
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
  );
}
