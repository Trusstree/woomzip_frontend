import HouseCategory from '@/app/house/_components/HouseCategory';
import BadgeList from '@/app/house/_components/BadgeList';
import { loadHouseData } from '@/app/house/_actions/actions';
import HouseCard from '@/app/house/_components/HouseCard';
import Pagination from '@/components/Pagination';
import { badgeList, filterList } from '@/app/house/_data/Data';
import FilterList from '@/app/house/_components/FilterList';

export default async function House({ searchParams }) {
  const [numShowItems, numShowPages] = [30, 10];
  const [houseData, houseCount] = await loadHouseData(searchParams, numShowItems);

  return (
    <>
      <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
        <HouseCategory />
        <FilterList filterList={filterList} />
        <BadgeList badgeList={badgeList} />

        <div className="row">
          {houseData.map((product, i) => (
            <HouseCard
              key={i}
              houseId={product.house_id}
              imgUrl={product.house_img_urls}
              houseName={product.house_name}
              companyName={product.company_name}
              price={product.final_price}
              room={product.room_count}
              toilet={product.toilet_count}
              pyeong={product.total_floor_area}
            />
          ))}
          <Pagination numItems={houseCount} numShowItems={numShowItems} numShowPages={numShowPages} />
        </div>
      </div>
    </>
  );
}
