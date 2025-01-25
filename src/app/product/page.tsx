import HouseCategory from '@/app/product/_components/HouseCategory';
import BadgeList from '@/app/product/_components/BadgeList';
import HouseCard from '@/app/product/_components/HouseCard';
import Pagination from '@/components/Pagination';
import { badgeList, categoryList, filterList } from '@/app/product/_data/Data';
import FilterList from '@/app/product/_components/FilterList';
import { loadProductsData } from '@/app/product/_actions/actions';

export default async function House({ searchParams }) {
  const [numShowItems, numShowPages] = [30, 10];

  // 상품 카드 데이터 호출
  const [productCardData] = await loadProductsData(searchParams, 0);

  return productCardData ? (
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
  ) : (
    <div>
      <div style={{ width: '100%', height: '61px', backgroundColor: 'black' }}></div>
      <div style={{ width: '95%', margin: '0 auto' }}>
        <div style={{ fontSize: '32px', fontWeight: '600', margin: '45px 0' }}>움집 제품이 없습니다.</div>
      </div>
    </div>
  );
}
