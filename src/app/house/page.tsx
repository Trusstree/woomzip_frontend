import HouseCategory from '@/app/house/_components/HouseCategory';
import BadgeList from '@/app/house/_components/BadgeList';
import HouseCard from '@/app/house/_components/HouseCard';
import Pagination from '@/components/Pagination';
import { badgeList, categoryList, filterList } from '@/app/house/_data/Data';
import FilterList from '@/app/house/_components/FilterList';
import { loadProductsData } from '@/app/house/_actions/actions';

export default async function House({ searchParams }) {
  const [numShowItems, numShowPages] = [30, 10];

  // 상품 카드 데이터 호출
  const productCardData = await loadProductsData(searchParams, 0);

  return (
    <div>
      <div style={{ width: '100%', height: '61px', backgroundColor: 'black' }}></div>
      <div style={{ width: '95%', margin: '0 auto' }}>
        <div style={{ fontSize: '32px', fontWeight: '600', margin: '45px 0' }}>움집 제품들</div>
        <hr style={{ borderColor: '#777777' }} />
        <HouseCategory categoryList={categoryList} />
        <FilterList filterList={filterList} />
        <BadgeList badgeList={badgeList} />

        <div className="row">
          {productCardData.map((product, i) => (
            <HouseCard key={i} productData={product} />
          ))}
          <Pagination numItems={productCardData.length} numShowItems={numShowItems} numShowPages={numShowPages} />
        </div>
      </div>
    </div>
  );
}
